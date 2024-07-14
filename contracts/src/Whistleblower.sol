// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Whistleblower {
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

    // Mapping to store posts by id
    mapping(uint256 => Post) public posts;
    mapping(uint256 => mapping(uint256 => Proof)) public proofs;

    // Current post ID (auto-increments)
    uint256 public nextPostId;
    mapping(uint256 => uint256) public nextProofId;

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

    // Function to create a new post
    function createPost(
        string memory content,
        string memory cid
    ) public payable {
        posts[nextPostId] = Post({
            id: nextPostId,
            author: address(msg.sender),
            content: content,
            timestamp: block.timestamp
        });

        emit PostCreated(nextPostId, msg.sender, content, block.timestamp);
        addProof(nextPostId, cid);
        nextPostId++;
    }

    // Function to add a comment to a post
    function addProof(uint256 postId, string memory cid) public payable {
        require(postId <= nextPostId, "Invalid post ID");
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
}
