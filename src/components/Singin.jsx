import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import { auth as firebaseAuth, provider } from "./Audifikatsiya";
import Hom from "./Home/Hom";
import google from "../assets/20221203181232!Google__G__logo.svg";
import "../assets/style/Singin.scss";

const Singin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Yangi state qo'shildi

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          {/* <input
            autoComplete="on"
            type="text"
            placeholder="user email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          /> */}
          <FormControl variant="filled">
            <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
            <OutlinedInput
              type="text"
              id="filled-adornment-email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </FormControl>

          <FormControl variant="filled">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Stack spacing={2} direction="row">
            <Button
              className="button"
              variant="contained"
              onClick={handleLogin}
            >
              Kirish
            </Button>
          </Stack>
          <Button variant="outlined" onClick={loginWithGoogle}>
            <img src={google} alt="Google logo" /> Google orqali kirish
          </Button>
          <Button variant="outlined" onClick={handlePasswordReset}>
            Parolni tiklash
          </Button>
        </div>
      ) : (
        <Hom userEmail={userEmail} />
      )}
    </div>
  );
};

export default Singin;
