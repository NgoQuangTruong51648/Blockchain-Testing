import styles from "./Header.module.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Header extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
    };

    return (
      <div className={styles.wrapper}>
        <Slider {...settings}>
          <div className={styles.header}>
            <div className={styles.slide}>
              <img
                className={styles.img}
                src="http://gigaland.on3-step.com/img/carousel/crs-9.jpg"
                alt=""
              />
              <div className={styles.desc}>
                <h1 className={styles.title}>The Island</h1>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <img
                      className={styles.authorLeft}
                      src="http://gigaland.on3-step.com/img/author/author-3.jpg"
                      alt=""
                    />
                    <i className={`fa-solid fa-circle-check ${styles.dot}`}></i>
                  </div>
                  <div className={styles.authorRight}>
                    <div className="name">Lori Hart</div>
                    <div className="subName">@Lori Hart</div>
                  </div>
                </div>
                <div className={styles.attri}>
                  <div className={styles.attriLeft}>
                    <h5>Current Bid</h5>
                    <h3>2.59 ETH</h3>
                    <h5>($8935,37)</h5>
                  </div>
                  <div className={styles.attriLine}></div>
                  <div className={styles.attriRight}>
                    <h5>Auction end in</h5>
                    <h3>00d 00h 00m 00s</h3>
                    <h5>(November 16, 2021)</h5>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <span className={styles.btn}>Place a bid</span>
                  <span className={styles.btn}>View artwork</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.slide}>
              <img
                className={styles.img}
                src="http://gigaland.on3-step.com/img/carousel/crs-7.jpg"
                alt=""
              />
              <div className={styles.desc}>
                <h1 className={styles.title}>The Island</h1>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <img
                      className={styles.authorLeft}
                      src="http://gigaland.on3-step.com/img/author/author-1.jpg"
                      alt=""
                    />
                    <i className={`fa-solid fa-circle-check ${styles.dot}`}></i>
                  </div>
                  <div className={styles.authorRight}>
                    <div className="name">Lori Hart</div>
                    <div className="subName">@Lori Hart</div>
                  </div>
                </div>
                <div className={styles.attri}>
                  <div className={styles.attriLeft}>
                    <h5>Current Bid</h5>
                    <h3>2.59 ETH</h3>
                    <h5>($8935,37)</h5>
                  </div>
                  <div className={styles.attriLine}></div>
                  <div className={styles.attriRight}>
                    <h5>Auction end in</h5>
                    <h3>00d 00h 00m 00s</h3>
                    <h5>(November 16, 2021)</h5>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <span className={styles.btn}>Place a bid</span>
                  <span className={styles.btn}>View artwork</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.slide}>
              <img
                className={styles.img}
                src="http://gigaland.on3-step.com/img/carousel/crs-9.jpg"
                alt=""
              />
              <div className={styles.desc}>
                <h1 className={styles.title}>The Island</h1>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <img
                      className={styles.authorLeft}
                      src="http://gigaland.on3-step.com/img/author/author-2.jpg"
                      alt=""
                    />
                    <i className={`fa-solid fa-circle-check ${styles.dot}`}></i>
                  </div>
                  <div className={styles.authorRight}>
                    <div className="name">Lori Hart</div>
                    <div className="subName">@Lori Hart</div>
                  </div>
                </div>
                <div className={styles.attri}>
                  <div className={styles.attriLeft}>
                    <h5>Current Bid</h5>
                    <h3>2.59 ETH</h3>
                    <h5>($8935,37)</h5>
                  </div>
                  <div className={styles.attriLine}></div>
                  <div className={styles.attriRight}>
                    <h5>Auction end in</h5>
                    <h3>00d 00h 00m 00s</h3>
                    <h5>(November 16, 2021)</h5>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <span
                    className={styles.btn}
                    onClick={() => console.log("123")}
                  >
                    Place a bid
                  </span>
                  <span className={styles.btn}>View artwork</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
