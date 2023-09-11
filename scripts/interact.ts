import { ethers } from 'hardhat'

async function main() {


const  CatContract =	'0xe2a1FcD65Ab92a203280Ed326DD6395499CbB7c8'

const ownerAddr = '0xe9999a29B116cB45444621EcD1CE52CA013243E4'

  const Kitty = await ethers.getContractAt(
    "INFT",
    "0xe2a1FcD65Ab92a203280Ed326DD6395499CbB7c8"
  );
  await Kitty.mint(ownerAddr,5, "ipfs://bafkreifjwjo2x55ea26dpwjr34vgnxilkxw53ulz6wi5mm2vkdxvllzuqq" );
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
