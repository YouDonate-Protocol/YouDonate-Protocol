// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { BigNumber } = require("@ethersproject/bignumber");
const { ethers } = require("hardhat");
const hre = require("hardhat");
// const amount = ethers.BigNumber.from("100").mul(
//   ethers.BigNumber.from(10).pow(18)
// );
// const amount2 = ethers.BigNumber.from("110").mul(
//   ethers.BigNumber.from(10).pow(18)
// );
// const amount3 = ethers.BigNumber.from("120").mul(
//   ethers.BigNumber.from(10).pow(18)
// );
const ydtToken = "0xa301924bcAcfdd2696989c2a06Fc4bD2bea8BdAC";

const getConvertedPrice = (price) => {
  return ethers.utils.parseEther(price.toString());
};
const minFund = getConvertedPrice(10);
const minVote = 20;

const approvedMembers = [
  "0x562937835cdD5C92F54B94Df658Fd3b50A68ecD5",
  "0xA05d173F369263fB697e1a0e214b107b59237400",
  "0x3c50ba6dcCb7Ce4D718093c47e1e751e71e09f81",
  "0xC49ee2f2ca7eC59d28Da5016643ead1562fb6a00",
  "0x4FadFc37d43d11a5316FC91A16B66F92ABBEC7e8",
  "0xeBd0AEAF330bA756884637ba5201b6eC4c699d72"
];
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // console.log(prices)
    const Data = await hre.ethers.getContractFactory("SimiDAO");
    const constructorArgs = [
    approvedMembers,
    ydtToken,
    minFund,
    minVote
  ];
    const data = await Data.deploy(...constructorArgs);
    await data.deployed();
    // await hre.run("verify:verify", {
    //     address: "0xb0B987d1CFd503be9A67E684bD08419f5667834D",
    //     constructorArguments: constructorArgs,
    // });
    console.log("SimiDAO deployed to:", data.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
