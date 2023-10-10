import React from 'react'
import styles from "./News.module.css"
import NewsItem from '../../components/newsItem/NewsItem'
import TopBar from "../../components/topbar/TopBar"
import Footer from "../../components/footer/Footer"

export default function News() {
  return (
    <div className='container'>
        <TopBar />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>News</h1>
          <div>Anim pariatur cliche reprehenderit</div>
          <div className={styles.blogList}>
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
          </div>
        </div>
        <Footer />
    </div>
  )
}
