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


const randomNumberAddres = "0xC52945bD9FD8Ec9c16549FD5eAdCAbA848Ee62Df";



async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // console.log(prices)
  const Data = await hre.ethers.getContractFactory("YDTSwapLottery");
  const constructorArgs = [
    ydtToken,
    randomNumberAddres
  ];
    const data = await Data.deploy(...constructorArgs);
    await data.deployed();
    // await hre.run("verify:verify", {
    //     address: "0x0C6175EfCfdD95596A2f6752CEAC3fFefCb7143B",
    //     constructorArguments: constructorArgs,
    // });
    console.log("Lottery contract deployed to:", data.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
