import React from 'react'
import styles from "./Category.module.css"

export default function Category() {
  return (
    <div className={styles.category}>
        <h2 className="mainTitle">Browse by category</h2>
        <div className='line'></div>
        <div className={styles.categoryList}>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-image'></i>
                    <span>Art</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-music'></i>
                    <span>Music</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-search'></i>
                    <span>Domain Name</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-globe'></i>
                    <span>Virtual Worlds</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-vcard'></i>
                    <span>Tranding Cards</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-th'></i>
                    <span>Collectibles</span>
                </a>
            </div>
        </div>
    </div>
  )
}
