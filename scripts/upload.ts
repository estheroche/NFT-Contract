import { ethers } from 'hardhat'
import { NFTStorage } from 'nft.storage';

async function main() {
  const {NFTStorage,File } = require("nft.storage");
  const mime = require("mime"); 
  const fs = require("fs"); 
  const path = require("path");
  const NFT_STORAGE_KEY = ""

  
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
