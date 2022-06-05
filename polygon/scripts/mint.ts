/* eslint-disable no-unused-vars */
const hre = require("hardhat");

const WALLET_ADDRESS = "0x07d3C520EB96F4bA44f6beb6408003abd1dA0Dbd";
const CONTRACT_ADDRESS = "0xCd8D2762f0D5918aA0b3346af06d14dcc3e06746";

async function main(_URI: any) {
  const NFT = await hre.ethers.getContractFactory("MyToken");

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.safeMint(WALLET_ADDRESS).then((txn: { hash: any }) => {
    // Log Txn
    console.log(txn.hash);
    return txn;
  });
}

export default main(null);
