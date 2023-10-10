//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Ownable {
    address public _owner;

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(isOwner(), "You are not the owner");
        _;
    }

    function isOwner() public view returns (bool) {
        return (msg.sender == _owner);
    }
}


contract ItemManager is Ownable {
    enum SupplyChainState { Created, Paid, Delivered }

    struct Item {
        uint itemId;
        string name;
        uint price;
        address payable onwer;
        address payable buyer;
        SupplyChainState state;
    }

    mapping(uint => Item) public items;
    uint public itemCount;

    event ItemCreated(uint indexed itemId, string name, uint price, address onwer, SupplyChainState state);
    event ItemPaid(uint indexed itemId, address buyer, SupplyChainState state);
    event ItemDelivered(uint indexed itemId, address buyer, SupplyChainState state);

    modifier onlySeller(uint _itemId) {
        require(items[_itemId].onwer == msg.sender, "You are not the seller");
        _;
    }

    function createItem(string memory _name, uint _price) public {
        itemCount++;
        items[itemCount] = Item({
            itemId: itemCount,
            name: _name,
            price: _price,
            onwer: payable(msg.sender),
            buyer: payable(address(0)),
            state: SupplyChainState.Created
        });

        emit ItemCreated(itemCount, _name, _price, msg.sender,SupplyChainState.Created);
    }

    function purchaseItem(uint _itemId) public payable {
        Item storage item = items[_itemId];
        require(item.state == SupplyChainState.Created, "You are not allowed to purchase this item");
        require(msg.value >= item.price, "Insufficient funds");
        
        item.state = SupplyChainState.Paid;
        item.buyer = payable(msg.sender);
        
        emit ItemPaid(_itemId, msg.sender, SupplyChainState.Paid);
    }

    function confirmDelivery(uint _itemId) public onlySeller(_itemId) {
        Item storage item = items[_itemId];
        require(item.state == SupplyChainState.Paid, "Item has not been purchased");

        item.state = SupplyChainState.Delivered;
        item.onwer.transfer(item.price);
        item.onwer = item.buyer;  // Ghi đè người bán bằng người mua
        item.buyer = payable(address(0)); // Xóa giá trị người mua
        
        emit ItemDelivered(_itemId, item.buyer ,  SupplyChainState.Delivered);
    }

}
