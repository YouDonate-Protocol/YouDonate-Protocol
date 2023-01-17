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
const name = "You Donate";


const symbol = "YDT";

const rydtToken = "0xe12e0702c36056842a336886F0FF5a420E5Bc580";



async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // console.log(prices)
//   const constructorArgs = [
//     name,
//     symbol,
//     rydtToken
// ];
    // const Data = await hre.ethers.getContractFactory("YDTData");
    // const data = await Data.deploy();
    // await data.deployed();
    await hre.run("verify:verify", {
        address: "0xcB66efD46915F97Dd97951a98941ca8d02642aaa",
    });
    // console.log("YDT contract deployed to:", data.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
