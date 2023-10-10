const ItemManager = artifacts.require("ItemManager");

contract("ItemManager", (accounts) => {
  it("should create an item", async () => {
    const itemManager = await ItemManager.deployed();
    const itemName = "Item 1";
    const itemPrice = web3.utils.toWei("1", "ether");

    const result = await itemManager.createItem(itemName, itemPrice, { from: accounts[0] });

    // Assert event emission
    assert.equal(result.logs[0].event, "ItemCreated");

    // Assert item count
    const itemCount = await itemManager.itemCount();
    assert.equal(itemCount, 1, "Item count should be 1");

    // Assert item details
    const item = await itemManager.items(1);
    assert.equal(item.itemId, 1, "Item ID should be 1");
    assert.equal(item.name, itemName, "Item name should match");
    assert.equal(item.price, itemPrice, "Item price should match");
  });

  it("should allow a purchase", async () => {
    const itemManager = await ItemManager.deployed();
    const itemPrice = web3.utils.toWei("1", "ether");

    // Create an item
    await itemManager.createItem("Item 2", itemPrice, { from: accounts[0] });

    const result = await itemManager.purchaseItem(2, { from: accounts[1], value: itemPrice });

    // Assert event emission
    assert.equal(result.logs[0].event, "ItemPaid");

    // Assert item state
    const item = await itemManager.items(2);
    assert.equal(item.state, 1, "Item state should be 'Paid'");
  });

  it("should confirm item delivery", async () => {
    const itemManager = await ItemManager.deployed();

    // Confirm delivery of the item
    const result = await itemManager.confirmDelivery(2, { from: accounts[0] });

    // Assert event emission
    assert.equal(result.logs[0].event, "ItemDelivered");

    // Assert item state
    const item = await itemManager.items(2);
    assert.equal(item.state, 2, "Item state should be 'Delivered'");
  });
});