import React, { useEffect, useState } from "react";
import axios from "axios"
import useEth from "../../contexts/EthContext/useEth";

function Contract() {
  const { state: { contract, accounts } } = useEth();
  const [products, setProducts] = useState([])
  const [pay, setPay] = useState(0)

  const switchT = (t) => {
    const convertT = parseInt(t)
    switch (convertT) {
      case 0:
        return "Created"
      case 1:
        return "Paided"
      case 2:
        return "Deliveried"
      default:
        return "Created"
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("http://localhost:8000/api/product/")
      let items1 = res.data.length
      let tempProducts = [];
      for (let index = 0; index < items1; ++index) {
        const s = await contract.methods.items(index).call()
        s["index"] = index;
        tempProducts.push(s);
      }
      setProducts(tempProducts);
    }
    fetchProduct()
  }, [contract])

  const handleTrigg = async (index) => {
    await contract.methods.triggerDelivery(parseInt(index)).send({ from: accounts[0] });
    window.location.reload(true);
  }

  const handleBuy = async (index) => {
    await contract.methods.triggerPayment(parseInt(index)).send({ from: accounts[0], value: pay });
    window.location.reload(true);
  }

  return (
    <div>
      {/* <div>{accounts}</div> */}
      {products.map((item, index) => (
        <div className="card" key={index}>
          <div className="header">
            <div className="content">
              <img className="img" src={`https://picsum.photos/id/${parseInt(item.index) + 100}/300/200`} alt="" />
              <div className="info1">
                <span className="title">{item._identifier}</span>
                <div className="title"> {item._itemPrice} Wei</div>
              </div>
              <p className="message">Item Address : {item._item}</p>
              {item._owner ? <p className="message">Owner Address : {item._owner}</p> : <span></span>}
              <div className="unbox">
                <span className="unboxState">State : {switchT(item._state)}</span>
                {item._state === "1"  && accounts[0] === item._owner
                ? <button type="button" onClick={() => handleTrigg(item.index)} className="unboxBtn btn">Triggle</button> 
                : <span></span> }
              </div>
              {item._state === "0" && accounts[0] !== item._owner
              ?  <div>
                 <input className="inp" onChange={(e) => setPay(e.target.value)}
            type="text" placeholder={item[2]} />
            <button type="button" onClick={() => handleBuy(item.index)} className="unboxBtn btn">Buy It</button> 
              </div>
              : <span></span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contract;
