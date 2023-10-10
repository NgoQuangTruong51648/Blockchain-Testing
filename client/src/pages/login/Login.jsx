import React from "react";
import styles from "./Login.module.css";
import TopBar from "../../components/topbar/TopBar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import {loginCall} from "../../apiCall"
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function Login() {
  const email = useRef()
  const password = useRef()
  const {dispatch} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    loginCall({email : email.current.value, password : password.current.value}, dispatch)
  }
  return (
    <div className="container">
      <TopBar />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.title}>Create, sell or collect digital items.</p>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.loginBox}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.titleForm}>Sign in</div>
              <div className={styles.loginRegister}>
                Login using an existing account or create a new account <Link className="link" to="/register"><span>here</span></Link>.
              </div>
              <input
                className={styles.input}
                type="email"
                ref={email}
                placeholder="Email ..."
              />
              <input
                className={styles.input}
                type="password"
                ref={password}
                placeholder="Password ..."
              />
              <button className="btn" type="submit">Login</button>
              <div className={styles.loginWith}>
                  Login With
                <span>Facebook</span>
                <span>Google</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}