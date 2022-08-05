const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      server: "https://localhost:443",
    },
    ropsten: {
      host: "localhost",
      port: 8543,
      network_id: "3",
      from: "",
      // gasPrice: 21000000000
      // gas: 400000
    },
    rinkeby: {
      host: "localhost",
      port: 8544,
      network_id: "4",
      from: "",
    },
    kovan: {
      host: "localhost",
      port: 8542,
      network_id: "42",
      from: "",
    },
    rsk: {
      host: "IP_RSK_TESTNET",
      port: 4444,
      network_id: "31", // Match any network id
      gasPrice: 20000,
      gas: 250000,
      from: "A_PUBLIC_KEY",
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          "@MoC_PRIVATE_KEY",
          "https://goerli.infura.io/v3/fe05e55ba1724b0589f19037b0a54a38"
        );
      },
      network_id: "5", // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
    },
  },
};
/*

*/
