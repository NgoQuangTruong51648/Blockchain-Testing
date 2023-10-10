import React, {useRef} from "react";
import styles from "./Register.module.css";
import TopBar from "../../components/topbar/TopBar";
import Footer from "../../components/footer/Footer";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password.current.value !== passwordAgain.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match!")
    }else{
      const user = {
        username : username.current.value,
        email : email.current.value,
        password : password.current.value
      }
      try{
        await axios.post("http://localhost:8000/api/auth/register", user)
        navigate("/login")
      }catch(err){
        console.log(err)
      }
    }
  }
  return (
    <div className="container">
      <TopBar />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.title}>Don't have an account? Register now.</p>
          <p className={styles.subTitle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.registerBox}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.titleForm}>Register</div>
              <input
                className={styles.input}
                type="text"
                ref={username}
                placeholder="Username ..."
              />
              <input
                className={styles.input}
                type="email"
                ref={email}
                placeholder="Email Adress ..."
              />
              <input
                className={styles.input}
                type="password"
                ref={password}
                placeholder="Password ..."
              />
              <input
                className={styles.input}
                type="password"
                ref={passwordAgain}
                placeholder="Re-enter Password ..."
              />
              <button type="submit" className="btn">Register Now</button>
              <div className={styles.loginWith}>
                  Login With
                <span>Facebook</span>
                <span>Google</span>
                <span>Account</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
