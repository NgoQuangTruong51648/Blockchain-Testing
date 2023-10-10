import React from 'react'
import styles from "./NewsItem.module.css"

export default function NewsItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxItem}>
        <div className={styles.img}>
          <img className={styles.image} src="http://134.209.110.122:1337/uploads/news_2_2bd481277a.jpg" alt="" />
          <div className={styles.type}>Tip & Tricks</div>
        </div>
        <div className={styles.text}>
          <div className={styles.dayTime}>04/10/2022 10:25AM</div>
          <h2 className={styles.title}>The next big trend in crypto</h2>
          <div className={styles.subName}>Quis sunt quis do laboris eiusmod in sint dolore sit pariatur consequat commodo aliqua nulla ad dolor aliquip incididunt voluptate est...</div>
          <button className="btn">Read more</button>
        </div>
      </div>
    </div>
  )
}
