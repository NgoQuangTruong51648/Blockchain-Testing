import React from 'react'
import styles from "./TopSeller.module.css"
import { hotItem } from "../../data";

export default function TopSeller() {
  return (
    <div className={styles.topSeller}>
        <h2 className="mainTitle">Top Seller</h2>
        <div className='line'></div>
        <ol className={styles.authorList} >
            {hotItem.map((item) => (
                <li key={item.id} className={styles.authorItem}>
                    <div className="avatarBox">
                        <img
                        className="avatar"
                        src={item.avatar}
                        alt=""
                        />
                        <i className={`fa fa-check stick`}></i>
                    </div>
                    <div className={styles.authorItemInfo}>
                        <div className="name">Jimmy Wright</div>
                        <div className="subName">1.9ETH</div>
                    </div>
                </li>
            ))}
        </ol>
    </div>
  )
}