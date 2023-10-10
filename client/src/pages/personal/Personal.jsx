import React, { useState, useContext, useEffect } from 'react'
import styles from "./Personal.module.css"
import TopBar from "../../components/topbar/TopBar"
import Footer from "../../components/footer/Footer"
import Card from '../../components/card/Card'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import axios from "axios"
import Web3 from "web3";
import useEth from "../../contexts/EthContext/useEth";


export default function Personal() {
    const PF = process.env.REACT_APP_IMAGES
    const { state: { accounts } } = useEth();
    const [toggle, setToggle] = useState(1)
    const [cardsOnSale, setCardsOnSale] = useState([])
    const [cardsCreated, setCardsCreated] = useState([])
    const [cardsLiked, setCardsLiked] = useState([])
    const [balance, setBalance] = useState("");
    const handleToggle = (index) => {
        setToggle(index)
    }
    const { user } = useContext(AuthContext)

  

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                // Kết nối với MetaMask
                await window.ethereum.request({ method: "eth_requestAccounts" });
                // Tạo đối tượng Web3 từ provider của MetaMask
                const web3 = new Web3(window.ethereum);
                // Lấy địa chỉ tài khoản đã kết nối
                const accounts = await web3.eth.getAccounts();

                // Lấy số dư của tài khoản đã kết nối
                const balanceInWei = await web3.eth.getBalance(accounts[0]);
                const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
                setBalance(balanceInEther);
            }
        };

        loadWeb3();
    }, []);


    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios("http://localhost:8000/api/product/profile/o/" + user._id)
            setCardsOnSale(res.data)
        }
        fetchProducts()
    }, [user])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios("http://localhost:8000/api/product/profile/a/" + user._id)
            setCardsCreated(res.data)
        }
        fetchProducts()
    }, [user])


    useEffect(() => {
        const userId = user._id
        const fetchProducts = async () => {
            const res = await axios("http://localhost:8000/api/product/profile/liked/" + userId)
            setCardsLiked(res.data)
        }
        fetchProducts()
    }, [user])

    return (
        <div className='container'>
            <TopBar />
            <div className={styles.personal}>
                <div className={styles.wrapper}>
                    <img className={styles.imgBackground} src={user.coverAvatar === "" ? PF + "noCoverAvatar.jpg" : user.coverAvatar} alt="" />
                    <div className={styles.infoBox}>
                        <div className={styles.avatarBox}>
                            <img className={styles.avatar} src={user.avatar === "" ? PF + "noAvatar.png" : user.avatar} alt="" />
                            <i className={`${styles.stick} fa fa-check`}></i>
                        </div>
                        <div className={styles.subInfo}>
                            <div className={styles.name}>{user.username}</div>
                            <div className={styles.subName}>{`${balance} ETH`}</div>
                            <div className={styles.addInfo}>
                                <div className={styles.addWal}>{accounts}</div>
                                <button onClick={() =>  navigator.clipboard.writeText(accounts)} className={styles.copy}>Copy</button>
                            </div>
                        </div>
                        <div className={styles.follow}>
                            <div className={styles.followCount}>{user.followers.length} followers</div>
                            <button className='btn'>Follow</button>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomWrapper}>
                    <div className={styles.buttonTabs}>
                        <button className={toggle === 1 ? `${styles.btn} ${styles.activeBtn}` : `${styles.btn}`} onClick={() => handleToggle(1)}>On Sale</button>
                        <button className={toggle === 2 ? `${styles.btn} ${styles.activeBtn}` : `${styles.btn}`} onClick={() => handleToggle(2)}>Created</button>
                        <button className={toggle === 3 ? `${styles.btn} ${styles.activeBtn}` : `${styles.btn}`} onClick={() => handleToggle(3)}>Liked</button>
                    </div>
                    <div className={styles.contentTabs}>
                        <div className={toggle === 1 ? `${styles.content} ${styles.activeContent}` : `${styles.content}`} onClick={() => handleToggle(1)}>
                            {cardsOnSale.map((card) => (
                                <Card key={card._id} card={card} isOnSale={true} />
                            ))}
                        </div>
                        <div className={toggle === 2 ? `${styles.content} ${styles.activeContent}` : `${styles.content}`} onClick={() => handleToggle(2)}>
                            {cardsCreated.map((card) => (
                                <Card key={card._id} card={card} isOnSale={false} />
                            ))}
                        </div>
                        <div className={toggle === 3 ? `${styles.content} ${styles.activeContent}` : `${styles.content}`} onClick={() => handleToggle(3)}>
                            {cardsLiked.map((card) => (
                                <Card key={card._id} card={card} isOnSale={false}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}