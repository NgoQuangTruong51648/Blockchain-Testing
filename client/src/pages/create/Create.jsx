import React, { useContext, useState } from "react";
import styles from "./Create.module.css";
import TopBar from "../../components/topbar/TopBar";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import axios from "axios";
import { BigNumber } from 'bignumber.js';
import useEth from "../../contexts/EthContext/useEth";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { state: { contract, accounts } } = useEth();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState(null);
  const { user } = useContext(AuthContext);
  const navagate = useNavigate()
  const handleCreate = async (e) => {
    e.preventDefault();
    const s = await contract.methods.createItem(title, new BigNumber(parseInt(price) * 10**18)).send({ from: accounts[0] });
    const product = {
      title,
      desc,
      price: new BigNumber(parseInt(price) * 10**18),
      indexItem : s.events.ItemCreated.returnValues[0],
      state : s.events.ItemCreated.returnValues.state,
      itemAdd: s.events.ItemCreated.address,
      author: user._id,
      owner: user._id,
    };
    if (photo) {
      const data = new FormData();
      const filename = Date.now() + photo.name;
      data.append("name", filename);
      data.append("file", photo);
      product.photo = filename;
      try {
        await axios.post("http://localhost:8000/api/upload/", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("http://localhost:8000/api/product/", product);
      navagate(`/itemdetail/${res.data._id}`) 
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <TopBar />
      <div className={styles.create}>
        <h1 className={styles.title}>Create</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <form className={styles.form} onSubmit={handleCreate}>
              <div className={styles.field}>
                <h5>Upload File</h5>
                <div className={styles.boxUploadFile}>
                  <div className={styles.type}>
                    {photo ? `${photo.name}` : "PNG, JPG, GIF, WEBP or MP4. Max 200mb."}
                  </div>
                  <input
                    id="upLoadPhoto"
                    className={styles.upLoadFile}
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                  <label htmlFor="upLoadPhoto" className="btn">
                    Browser
                  </label>
                </div>
              </div>
              <div className={styles.field}>
                <h5>Title</h5>
                <input
                  className={styles.input}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g. Crypto Funk"
                />
              </div>
              <div className={styles.field}>
                <h5>Description</h5>
                <textarea
                  className={styles.inputDesc}
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="e.g. This is very limited item"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <div className={styles.field}>
                <h5>Price</h5>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="enter price for one item (WEI) ex : 1ETH = 10^18 WEI"
                />
              </div>
              <div className={styles.field}>
                <h5>Atrribule</h5>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Attri"
                />
              </div>
              <div className={styles.field}>
                <h5>Royalties</h5>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="suggest 0, 10%, 20%, ... Maxium is 70% "
                />
              </div>
              <button className="btn" type="submit">
                Create Item
              </button>
            </form>
          </div>
          {photo && (
            <div className={styles.right}>
              <h5>Preview item</h5>
              <div className={styles.preview}>
                <div className={styles.box}>
                  <div className="avatarBox">
                    <img className="avatar" src={user?.avatar} alt="" />
                    <i className={`fa fa-check stick`}></i>
                  </div>
                  <div className={styles.img}>
                    <img
                      className={styles.imgNFT}
                      src={URL.createObjectURL(photo)}
                      alt=""
                    />
                  </div>
                  <div className={styles.bottomBoxItem}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.priceBox}>
                      <div className={styles.price}>{price}</div>
                      <div className={styles.quantity}>1/20</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}