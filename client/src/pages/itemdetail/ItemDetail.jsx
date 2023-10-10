import React, { useEffect, useState, useContext } from "react";
import Footer from "../../components/footer/Footer";
import TopBar from "../../components/topbar/TopBar";
import styles from "./ItemDetail.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useEth from "../../contexts/EthContext/useEth";
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function ItemDetail() {
  const PF = process.env.REACT_APP_IMAGES
  const { state: { contract, accounts } } = useEth();
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [toggleState, setToggleState] = useState(1);
  const [product, setProduct] = useState({})
  const [pay, setPay] = useState(0)
  const [indexItem, setIndexItem] = useState(0)
  const { user } = useContext(AuthContext)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleBuy = async () => {
    await contract.methods.purchaseItem(parseInt(indexItem)).send({ from: accounts[0], value: pay });

    const exchange = {
      state : "1",
      buyer: user._id,
    };
    try {
      await axios.put(
        `http://localhost:8000/api/product/${product._id}`,
        exchange
      );
      window.location.reload(true);
    } catch (err) {}
  }

  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios.get(`http://localhost:8000/api/product/${path}`)
      setProduct(res.data)
      setIndexItem(res.data.indexItem)
      setPay(res.data.price)
    }
    fetchItem()
  }, [path])

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <TopBar />
      <div className={`${styles.itemdetail}`}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src={PF + product.photo}
            alt=""
          />
          {console.log(product)}
          <h1>{`${(parseInt(product.price) / 10**18).toFixed(8)} ETH`}</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.listInfoCount}>
            <div className={styles.itemInfoCount}>
              <i className={`fa fa-image ${styles.iconInfo}`}></i>
              <span className={styles.subInfo}>art</span>
            </div>
            <div className={styles.itemInfoCount}>
              <i className={`fa fa-eye ${styles.iconInfo}`}></i>
              <span className={styles.subInfo}>300</span>
            </div>
            <div className={styles.itemInfoCount}>
              <i className={`fa fa-heart ${styles.iconInfo}`}></i>
              <span className={styles.subInfo}>{product.like?.length}</span>
            </div>
          </div>
          <div className={styles.textDesc}>
            {product.desc}
          </div>
          <div className={styles.boxInfos}>
            <div className={styles.boxInfo}>
              <div className={styles.officer}>Author</div>
              <div className={styles.boxInfoDetail}>
                <div className="avatarBox">
                    <img
                    className="avatar"
                    src={product.author?.avatar}
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className="name">{product.author?.username}</div>
              </div>
            </div>
            <div className={styles.boxInfo}>
              <div className={styles.officer}>Owner</div>
              <div className={styles.boxInfoDetail}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src={product.owner?.avatar}
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className="name">{product.owner?.username}</div>
              </div>
            </div>
          </div>
          <div className={styles.blockTabs}>
            <button
              className={
                toggleState === 1
                  ? `${styles.btnTabs} ${styles.activeBtn}`
                  : `${styles.btnTabs}`
              }
              onClick={() => toggleTab(1)}
            >
              Details
            </button>
            <button
              className={
                toggleState === 2
                  ? `${styles.btnTabs} ${styles.activeBtn}`
                  : `${styles.btnTabs}`
              }
              onClick={() => toggleTab(2)}
            >
              Bids
            </button>
            <button
              className={
                toggleState === 3
                  ? `${styles.btnTabs} ${styles.activeBtn}`
                  : `${styles.btnTabs}`
              }
              onClick={() => toggleTab(3)}
            >
              History
            </button>
          </div>
          <div className={styles.contentTabs}>
            <div
              className={
                toggleState === 1
                  ? `${styles.content} ${styles.activeContent}`
                  : `${styles.content}`
              }
            >
              <div className={styles.listAtrri}>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Background</div>
                  <div className={styles.specAtrri}>Yellowish Sky</div>
                  <div className={styles.rateAtrri}>85% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Eyes</div>
                  <div className={styles.specAtrri}>Purple Eyes</div>
                  <div className={styles.rateAtrri}>14% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Nose</div>
                  <div className={styles.specAtrri}>Small Nose</div>
                  <div className={styles.rateAtrri}>45% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Mouth</div>
                  <div className={styles.specAtrri}>Smile Red Lip</div>
                  <div className={styles.rateAtrri}>61% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Neck</div>
                  <div className={styles.specAtrri}>Pink Ribbon</div>
                  <div className={styles.rateAtrri}>27% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Hair</div>
                  <div className={styles.specAtrri}>Pink Short</div>
                  <div className={styles.rateAtrri}>35% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Accessories</div>
                  <div className={styles.specAtrri}>Heart Necklace</div>
                  <div className={styles.rateAtrri}>33% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Hat</div>
                  <div className={styles.specAtrri}>Cute Panda</div>
                  <div className={styles.rateAtrri}>62% have this trait</div>
                </div>
                <div className={styles.itemAtrri}>
                  <div className={styles.nameAtrri}>Clothes</div>
                  <div className={styles.specAtrri}>Casual Purple</div>
                  <div className={styles.rateAtrri}>78% have this trait</div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2
                  ? `${styles.content} ${styles.activeContent}`
                  : `${styles.content}`
              }
            >
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3
                  ? `${styles.content} ${styles.activeContent}`
                  : `${styles.content}`
              }
            >
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
              <div className={styles.bidsItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.infoBidsItem}>
                    <div className={styles.subBid}>Bid <b>0.006 ETH</b></div>
                    <div className={styles.subBid}>by <b>Mamie Barnett</b> at 11/04/2021, 9:33 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomRight}>
            {console.log(user.username === product.owner?.username)}
          {(product.state === "0" && user.username !== product.owner?.username) || (product.isForSale === true && user.username !== product.owner?.username) ? <button onClick={handleBuy} className={styles.btn}>BUY NOW</button> :  <button className={styles.btnDisabled}>PAID</button>}
            <button className={styles.btn}>Place Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}