import { ethers } from "hardhat";


async function main() {
  const Nft = await ethers.deployContract("Cat", [ ]);
  Nft.waitForDeployment();

  console.log(Nft.target);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });