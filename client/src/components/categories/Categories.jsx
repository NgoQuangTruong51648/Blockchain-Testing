import React from "react";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <div className={`container ${styles.categories}`}>
      <div className={styles.left}>
        <div className={styles.filter}>
          <div className={styles.title}>Select Categories</div>
          <div className={styles.listFilter}>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Art</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Music</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Domain Names</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Virtual World</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Trading Cards</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Collectibles</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Sports</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Utility</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div className={styles.title}>Status</div>
          <div className={styles.listFilter}>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Buy Now</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">On Auction</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Has Offers</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div className={styles.title}>Items Type</div>
          <div className={styles.listFilter}>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Single Items</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Bundles</span>
            </div>
          </div>
        </div>
        <div className={styles.filter}>
          <div className={styles.title}>Collections</div>
          <div className={styles.listFilter}>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Abstraction</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Patternlicious</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Skecthify</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Cartoonism</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Virtuland</span>
            </div>
            <div className={styles.itemFilter}>
              <input className={styles.checkBox} type="checkbox" />
              <span className="subName">Papercut</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/k6_762ec5d5ce.png"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/static_2_c9a727abe8.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_2_c6ff6b745e.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/big_1_5e0d3a105a.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_11_1ad2096db9.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/static_3_fffde34782.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_12_3202cef504.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/static_4_ccd42beea6.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_9_91a41bc22c.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/anim_4_0f6539826b.webp"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_3_1769046ae5.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/anim_2_fdd2e0f4d1.webp"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_5_a558aecf04.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/anim_3_8b6ded67ad.webp"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_3_1769046ae5.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/anim_1_2db0091b86.webp"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_12_3202cef504.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/anim_8_3b95944cfb.webp"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_9_91a41bc22c.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/crs_5_86f0d779bb.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_8_3bc062c072.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/anim_7_b0be11eee1.webp"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/author_7_3b6dc1483c.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/static_6_3b7902d4b7.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxItem}>
          <div className="avatarBox">
            <img
              className="avatar"
              src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
              alt=""
            />
            <i className={`fa fa-check stick`}></i>
          </div>
          <div className={styles.clockdown}>00d 00h 00m 00s</div>
          <div className={styles.img}>
            <img
              className={styles.imgNFT}
              src="http://134.209.110.122:1337/uploads/music_2_e30565f237.jpg"
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
              <div className={styles.place}>Buy Now</div>
              <div className={styles.like}>
                <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
