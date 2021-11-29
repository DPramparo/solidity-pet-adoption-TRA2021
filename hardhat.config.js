require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
rinkeby: {
  url: 'https://eth-mainnet.alchemyapi.io/v2/v6zL-tQvNkit2Ge2nheWNArG9kAMIrTz',
  accounts: ['0x498b3e7b788020125be11f640695591afbff5391'],
  gasPrice: 8000000000
  }
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
};

