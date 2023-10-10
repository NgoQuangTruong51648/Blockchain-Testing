import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import TopBar from '../../components/topbar/TopBar'
import styles from "./Category.module.css"

export default function Category() {
  return (
    <div className={styles.category}>
        <TopBar />
        <Categories />
        <Footer />
    </div>
  )
}
