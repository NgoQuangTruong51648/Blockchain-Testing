import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import axios from "axios";
// import Web3 from "web3";

function ContractBtns() {
  const { state: { contract, accounts } } = useEth();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  // const [balance, setBalance] = useState("");


  // useEffect(() => {
  //   const loadWeb3 = async () => {
  //     if (window.ethereum) {
  //       // Kết nối với MetaMask
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       // Tạo đối tượng Web3 từ provider của MetaMask
  //       const web3 = new Web3(window.ethereum);
  //       // Lấy địa chỉ tài khoản đã kết nối
  //       const accounts = await web3.eth.getAccounts();

  //       // Lấy số dư của tài khoản đã kết nối
  //       const balanceInWei = await web3.eth.getBalance(accounts[0]);
  //       const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
  //       setBalance(balanceInEther);
  //     }
  //   };

  //   loadWeb3();
  // }, []);



  const handleCreate = async e => {
    e.preventDefault();
    const s = await contract.methods.createItem(title, parseInt(price)).send({ from: accounts[0] });
    console.log(s)
    const product = {
      title: title,
      price: parseInt(price),
      owner: accounts[0],
      itemAdd: s.events.SupplyChainStep.returnValues._itemAddress,
      indexItem : s.events.SupplyChainStep.returnValues[0],
      state : s.events.SupplyChainStep.returnValues._step,
      blockHash: s.blockHash
    };
    try {
      await axios.post("http://localhost:8000/api/product/", product);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="btns">
          <h3>My Account : {accounts}</h3>
          {/* <h3>Balance: {balance} ETH</h3> */}
      <form onSubmit={handleCreate}>
          <input className="inp" onChange={(e) => setTitle(e.target.value)}
            type="text" placeholder="Title" />
          <input className="inp" onChange={(e) => setPrice(e.target.value)}
            type="text" placeholder="Price" />
        <button className="btn" type="submit">
          Create Item
        </button>
      </form>
    </div>
  );
}

export default ContractBtns;
