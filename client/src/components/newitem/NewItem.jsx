import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./NewItem.module.css";
import { hotItem } from "../../data";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,

    };
    return (
      <div className={styles.newitems}>
        <h2 className="mainTitle">New Items</h2>
        <div className="line"></div>

        <Slider {...settings}>
          {hotItem.map((itenm) => (
            <div key={itenm.id} className={styles.wrapper}>
              <div className={styles.boxItem}>
                <div className="avatarBox">
                  <img
                    className="avatar"
                    src={itenm.avatar}
                    alt=""
                  />
                  <i className={`fa fa-check stick`}></i>
                </div>
                <div className={styles.clockdown}>00d 00h 00m 00s</div>
                <div className={styles.img}>
                  <img
                    className={styles.imgNFT}
                    src={itenm.img}
                    alt=""
                  />
                </div>
                <div className={styles.bottomBoxItem}>
                  <div className={styles.title}>The Truth</div>
                  <div className={styles.priceBox}>
                    <div className={styles.price}>0.08 ETH</div>
                    <div className={styles.quantity}>1/20</div>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.place}>Place a bid</div>
                    <div className={styles.like}>
                      <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}