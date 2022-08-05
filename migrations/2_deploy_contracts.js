const fs = require("fs");

var FaucetRLC = artifacts.require("./RLC.sol");

module.exports = function (deployer) {
  deployer.deploy(FaucetRLC, { gas: 1916452 }).then(function () {
    console.log("RLC contract address: " + FaucetRLC.address);
    FaucetRLC.address;
    let rlcAddress = {
      address: FaucetRLC.address,
    };
    const content = JSON.stringify(rlcAddress);

    fs.writeFile("../RLC.json", content, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
};
