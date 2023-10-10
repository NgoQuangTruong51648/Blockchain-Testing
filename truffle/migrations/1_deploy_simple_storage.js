const ItemManager = artifacts.require("ItemManager");
const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(ItemManager);
  deployer.deploy(MyToken, 1000000);
};
