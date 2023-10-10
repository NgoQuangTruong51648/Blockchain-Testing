import React, {useContext} from 'react'
import styles from "./Topbar.module.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function TopBar() {
    const {user} = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.replace("http://localhost:3000/")
    }
    
  return (
    <div className={`${styles.topbar} container`}>
        <Link to="/" className='link'>
            <div className="logo">
                <img src="http://gigaland.on3-step.com/img/logo.png" alt="" />
            </div>
        </Link>
        <div className={styles.search}>
            <input type="text" placeholder='searcch item here... ' className={styles.searchInput} />
        </div>
        <div className={styles.menu}>
            <Link to="/" className='link'>
                <div className={styles.menuItem}>Home <i className="fa-solid fa-caret-down"></i></div>
            </Link>
            <div className={styles.menuItem}>Explore <i className="fa-solid fa-caret-down"></i></div>
            <div className={styles.menuItem}>Resources <i className="fa-solid fa-caret-down"></i></div>
            <Link to="/create" className="link">
                <div className={styles.menuItem}>Create</div>
            </Link>
            <Link to="/personal/:id" className='link'>
                <div className={styles.menuItem}>Profile <i className="fa-solid fa-caret-down"></i></div>
            </Link>
        </div>
        <div className={styles.mainside}>
            {user ? <Link className='link' to={`/personal/${user._id}`}>
                <div className={styles.avatarBox}>
                    <img className={styles.avatar} src={user?.avatar} alt="" />
                    <span className={styles.name}>{user.username}</span>
                </div>
            </Link>
            : <Link className='link' to="/login">
                <div className={`${styles.connectWal} link`}>Connect Wallet</div>
            </Link>
            }
            {user ? <span onClick={handleLogout} className={styles.btn}>Log out</span> : <div></div>}
        </div>
    </div>
  )
}