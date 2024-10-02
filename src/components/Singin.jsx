import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    getAuth,
    fetchSignInMethodsForEmail,
  } from "firebase/auth";
  import { useState } from "react";
  import { auth as firebaseAuth, provider } from "./Audifikatsiya";
  import Hom from "./Home/Hom";
  import google from "../assets/20221203181232!Google__G__logo.svg";
  import "../assets/style/Singin.scss";
  
  const Singin = () => {
    const [userEmail, setUserEmail] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const loginWithGoogle = () => {
      signInWithPopup(firebaseAuth, provider)
        .then((data) => {
          setUserEmail(data.user.email);
        })
        .catch((error) => {
          console.error("Google bilan tizimga kirishda xato:", error);
        });
    };
  
    const handleLogin = async () => {
      if (inputEmail && password) {
        const auth = getAuth();
        try {
          await signInWithEmailAndPassword(auth, inputEmail, password);
          setUserEmail(inputEmail);
        } catch (error) {
          console.error("Login xatosi:", error);
          alert("Loginda xato. Iltimos, email va parolni tekshiring.");
        }
      } else {
        alert("Iltimos, email va parolni kiriting.");
      }
    };
  
    const handlePasswordReset = async () => {
      const auth = getAuth();
      if (inputEmail) {
        try {
          await sendPasswordResetEmail(auth, inputEmail);
          alert("Parolni tiklash xabari yuborildi!");
        } catch (error) {
          console.error("Parolni tiklashda xato:", error);
          alert("Parolni tiklashda xato. Iltimos, emailni tekshiring.");
        }
      } else {
        alert("Iltimos, emailni kiriting.");
      }
    };
  
    return (
      <div className="container">
        {!userEmail ? (
          <div className="usersingin">
            <input
              autoComplete="on"
              type="text"
              placeholder="user email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <input
              autoComplete="on"
              type="password"
              placeholder="user password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Kirish</button>
            <button onClick={loginWithGoogle}>
              <img src={google} alt="Google logo" /> Google orqali kirish
            </button>
            <button onClick={handlePasswordReset}>
              Parolni tiklash
            </button>
          </div>
        ) : (
          <Hom userEmail={userEmail} />
        )}
      </div>
    );
  };
  
  export default Singin;
  