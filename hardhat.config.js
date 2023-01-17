require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    arbitrum: {
        url: 'https://goerli-rollup.arbitrum.io/rpc/',
        accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc: {
      url: 'https://bsctestapi.terminet.io/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: `https://eth-goerli.public.blastapi.io`, // <---- YOUR INFURA ID! (or it won't work)
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
        url: 'https://rpc-mumbai.maticvigil.com',
        accounts: [process.env.PRIVATE_KEY],
    },
    fantom: {
        url: 'https://rpc.testnet.fantom.network',
        accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
    customChains: [
      {
        network: "arbitrumGoerli",
        chainId: 421613,
        urls: {
          apiURL: "https://api-goerli.arbiscan.io/api",
          browserURL: "https://goerli.arbiscan.io/"
        }
      }
    ],
  },
  gasReporter: {
    enabled: true,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};
