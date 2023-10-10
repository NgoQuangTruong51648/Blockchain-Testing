import React from 'react'
import styles from "./Card.module.css"
import useEth from "../../contexts/EthContext/useEth";
import axios from 'axios';

export default function Card({card, isOnSale}) {
  const { state: { contract, accounts } } = useEth();

  const handleTrigg = async () => {
    await contract.methods.confirmDelivery(parseInt(card.indexItem)).send({ from: accounts[0] });
    const exchange = {
      state : "2",
      owner: card.buyer,
    };
    try {
      await axios.put(
        `http://localhost:8000/api/product/${card._id}`,
        exchange
      );
      window.location.reload(true);
    } catch (err) {}
  }
  const PF = process.env.REACT_APP_IMAGES

  return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
              <div className="avatarBox">
                {console.log(isOnSale)}
                <img
                  className="avatar"
                  src={card.owner?.avatar}
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src={PF + card?.photo}
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>{card.title}</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>{(card.price/10**18).toFixed(8)} ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  {parseInt(card.state) === 1 ? <div onClick={handleTrigg} className="btn">Payment Confirmation</div> : ""}
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>{card.like.length}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}