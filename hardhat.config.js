require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts:'./src/artifacts'
  },
  networks: {
    hardhat: {
      chainID: 1337
    }
  }
};
