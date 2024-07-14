import { ethers } from 'ethers';
import abi from "./abi.json";

console.log(abi)

// 合约地址
const contractAddress = '0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46';

async function main() {
  // 连接到以太坊节点
  const provider = new ethers.providers.JsonRpcProvider('https://scroll-sepolia.chainstacklabs.com');
  const privateKey = "0xbf8207eeed3791bcb63ace1ca3410dd4f05a97c1a62ac87e4589153d2d7df42e"
  // 设置钱包
  const wallet = new ethers.Wallet(privateKey, provider);

  // 合约实例
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // 调用函数示例

  // createPost
  const createPostTx = await contract.createPost("This is a post content", "QmExampleCID");
  await createPostTx.wait();
  console.log("Post created");

  // addProof
  
  const addProofTx = await contract.addProof(1, "QmExampleProofCID");
  await addProofTx.wait();
  console.log("Proof added");

  // getNextPostId
  const nextPostId = await contract.getNextPostId();
  console.log("Next Post ID:", nextPostId.toString());

  // getPost
  const post = await contract.getPost(1);
  console.log("Post:", post);

  // nextPostId
  const nextPostIdValue = await contract.nextPostId();
  console.log("Next Post ID (via nextPostId):", nextPostIdValue.toString());

  // nextProofId
  const nextProofId = await contract.nextProofId(1);
  console.log("Next Proof ID for Post 1:", nextProofId.toString());

  // posts
  const postDetails = await contract.posts(1);
  console.log("Post Details:", postDetails);

  // proofs
  const proofDetails = await contract.proofs(1, 1);
  console.log("Proof Details for Post 1:", proofDetails);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
