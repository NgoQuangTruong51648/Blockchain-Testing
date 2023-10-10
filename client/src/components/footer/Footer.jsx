import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={`${styles.footer} container`}>
        <div className={styles.topFooter}>
            <div className={styles.widget}>
                <div className={styles.title}>Marketplace</div>
                <ul className={styles.listWidget}>
                  <li className={styles.itemWidget}>All NFTs</li>
                  <li className={styles.itemWidget}>Art</li>
                  <li className={styles.itemWidget}>Music</li>
                  <li className={styles.itemWidget}>Domain Names</li>
                  <li className={styles.itemWidget}>Virtual World</li>
                  <li className={styles.itemWidget}>Collectibles</li>
                </ul>
            </div>
            <div className={styles.widget}>
                <div className={styles.title}>Resources</div>
                <ul className={styles.listWidget}>
                  <li className={styles.itemWidget}>Help Center</li>
                  <li className={styles.itemWidget}>Partners</li>
                  <li className={styles.itemWidget}>Suggestions</li>
                  <li className={styles.itemWidget}>Discord</li>
                  <li className={styles.itemWidget}>Docs</li>
                  <li className={styles.itemWidget}>Newsletter</li>
                </ul>
            </div>
            <div className={styles.widget}>
                <div className={styles.title}>Community</div>
                <ul className={styles.listWidget}>
                  <li className={styles.itemWidget}>Community</li>
                  <li className={styles.itemWidget}>Documentation</li>
                  <li className={styles.itemWidget}>Brand Assets</li>
                  <li className={styles.itemWidget}>Blog</li>
                  <li className={styles.itemWidget}>Forum</li>
                  <li className={styles.itemWidget}>Mailing List</li>
                </ul>
            </div>
            <div className={styles.widget}>
                <div className={styles.title}>Community</div>
                <div className={styles.itemWidget}>Signup for our newsletter to get the latest news in your inbox.</div>
                <div>
                  <input type="text" className={styles.inputFooter} />
                  <i className={`fa-solid fa-arrow-right-long ${styles.arrowInput}`}></i>
                </div>
                <div className={styles.itemWidget}>Your email is safe with us. We don't spam.</div>
            </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.logo}>
            <img src="http://gigaland.on3-step.com/img/logo.png" alt="" />
          </div>
          <div className={styles.itemWidget}>© Copyright 2021 - Gigaland by Designesia</div>
          <div className={styles.iconFooter}>
            <ul className={styles.listIcon}>
              <li className={styles.itemIcon}><i className={`fa-brands fa-facebook-f ${styles.iconMedia}`}></i></li>
              <li className={styles.itemIcon}><i className={`fa-brands fa-twitter ${styles.iconMedia}`}></i></li>
              <li className={styles.itemIcon}><i className={`fa-brands fa-linkedin-in ${styles.iconMedia}`}></i></li>
              <li className={styles.itemIcon}><i className={`fa-brands fa-pinterest-p ${styles.iconMedia}`}></i></li>
              <li className={styles.itemIcon}><i className={`fa-solid fa-wifi ${styles.iconMedia}`}></i></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
