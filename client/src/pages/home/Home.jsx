import React from 'react'
import Header from '../../components/header/Header'
import TopBar from '../../components/topbar/TopBar'
import HotCollections from '../../components/hotcllections/HotCollections'
import NewItem from '../../components/newitem/NewItem'
import styles from "./Home.module.css"
import TopSeller from '../../components/topseller/TopSeller'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'

export default function home() {
  return (
    <div className={styles.background}>
      <div className={styles.home}>
          <TopBar />
          <Header />
          <HotCollections />
          <NewItem />
          <TopSeller />
          <Category />
          <Footer />
      </div>
    </div>
  )
}