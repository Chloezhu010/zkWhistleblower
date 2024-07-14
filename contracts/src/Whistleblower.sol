// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ByteHasher} from "./helpers/ByteHasher.sol";
import {IWorldID} from "./interfaces/IWorldID.sol";

contract Whistleblower {
    using ByteHasher for bytes;

    struct Post {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
    }

    // Structure to hold comment information
    struct Proof {
        address author;
        string cid;
        uint256 timestamp;
    }

    struct VerifyProofParams {
        address signal;
        uint256 root;
        uint256 nullifierHash;
        uint256[8] proof;
    }

    // Mapping to store posts by id
    mapping(uint256 => Post) public posts;
    mapping(uint256 => mapping(uint256 => Proof)) public proofs;

    // Current post ID (auto-increments)
    uint256 public nextPostId;
    mapping(uint256 => uint256) public nextProofId;

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    /// @dev The contract's external nullifier hash
    uint256 internal immutable externalNullifier;

    /// @dev The World ID group ID (always 1)
    uint256 internal immutable groupId = 1;

    /// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
    mapping(uint256 => bool) internal nullifierHashes;

    // Event emitted when a new post is created
    event PostCreated(
        uint256 id,
        address author,
        string content,
        uint256 timestamp
    );

    // Event emitted when a new comment is added to a post
    event ProofAdded(
        uint256 postId,
        address author,
        string cid,
        uint256 timestamp
    );
    /// @param nullifierHash The nullifier hash for the verified proof
    /// @dev A placeholder event that is emitted when a user successfully verifies with World ID
    event Verified(uint256 nullifierHash);

    ///////////////////////////////////////////////////////////////////////////////
    ///                                  ERRORS                                ///
    //////////////////////////////////////////////////////////////////////////////

    /// @notice Thrown when attempting to reuse a nullifier
    error DuplicateNullifier(uint256 nullifierHash);

    constructor(
        IWorldID _worldId,
        string memory _appId,
        string memory _actionId
    ) {
        worldId = _worldId;
        externalNullifier = abi
            .encodePacked(abi.encodePacked(_appId).hashToField(), _actionId)
            .hashToField();
    }

    // Function to create a new post
    function createPost(
        string memory content,
        string memory cid,
        VerifyProofParams memory params
    ) public payable {
        posts[nextPostId] = Post({
            id: nextPostId,
            author: address(msg.sender),
            content: content,
            timestamp: block.timestamp
        });

        emit PostCreated(nextPostId, msg.sender, content, block.timestamp);
        addProof(nextPostId, cid, params);
        nextPostId++;
    }

    // Function to add a comment to a post
    function addProof(
        uint256 postId,
        string memory cid,
        VerifyProofParams memory params
    ) public payable {
        require(postId <= nextPostId, "Invalid post ID");
        if (nullifierHashes[params.nullifierHash])
            revert DuplicateNullifier(params.nullifierHash);
        worldId.verifyProof(
            params.root,
            groupId,
            abi.encodePacked(params.signal).hashToField(),
            params.nullifierHash,
            externalNullifier,
            params.proof
        );
        // We now record the user has done this, so they can't do it again (proof of uniqueness)
        nullifierHashes[params.nullifierHash] = true;
        // Finally, execute your logic here, for example issue a token, NFT, etc...
        // Make sure to emit some kind of event afterwards!
        emit Verified(params.nullifierHash);

        proofs[postId][nextProofId[postId]] = Proof({
            author: address(msg.sender),
            cid: cid,
            timestamp: block.timestamp
        });
        emit ProofAdded(postId, msg.sender, cid, block.timestamp);
        nextProofId[postId]++;
    }

    // Function to get a specific post by ID
    function getPost(uint256 postId) public view returns (Post memory) {
        require(postId < nextPostId, "Invalid post ID");
        return posts[postId];
    }

    function getNextPostId() public view returns (uint256) {
        return nextPostId;
    }

    function verifyAndExecute(
        address signal,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public {
        // First, we make sure this person hasn't done this before
        if (nullifierHashes[nullifierHash])
            revert DuplicateNullifier(nullifierHash);

        // We now verify the provided proof is valid and the user is verified by World ID
        worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(signal).hashToField(),
            nullifierHash,
            externalNullifier,
            proof
        );

        // We now record the user has done this, so they can't do it again (proof of uniqueness)
        nullifierHashes[nullifierHash] = true;

        // Finally, execute your logic here, for example issue a token, NFT, etc...
        // Make sure to emit some kind of event afterwards!

        emit Verified(nullifierHash);
    }
}
