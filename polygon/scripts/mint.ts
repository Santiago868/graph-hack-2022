/* eslint-disable no-unused-vars */
const hre = require("hardhat");

const WALLET_ADDRESS = "0x07d3C520EB96F4bA44f6beb6408003abd1dA0Dbd";
const CONTRACT_ADDRESS = "0x5852E2B1a614e2fa3140A59F9aB35e0C20a34cc5";

async function main(_URI: any) {
  const NFT = await hre.ethers.getContractFactory("DSTL");

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.safeMint(WALLET_ADDRESS).then((txn: { hash: any }) => {
    // Log Txn
    console.log(txn.hash);
    return txn;
  });
}

export default main(
  "https://graph-hack-2022.s3.us-west-2.amazonaws.com/dstl.json"
);
