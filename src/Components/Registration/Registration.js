import React, { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import classes from "./Registration.module.css";
import { useHistory } from "react-router-dom";
import { validActions } from "../../Store/Validation";

const Registration = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const pwdRef = useRef();
  const goToLogin = () => {
    setIsLogin(true);
  };
  const goToSignup = () => {
    setIsLogin(false);
  };
  const submitHandler = useCallback(async (e) => {
    e.preventDefault();
    const inputEmail = emailRef.current.value;
    const inputPassword = pwdRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoL4ZKC5SdyILPGSrKYjlzYFbQjNQDBfg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoL4ZKC5SdyILPGSrKYjlzYFbQjNQDBfg";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const emailIds = data.email;
      // const emailExpiry = data.expiresIn;
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      const expiredTime = expirationTime.toISOString();
      const calculateRemainingTime = (expiredTime) => {
        const currentTime = new Date().getTime();
        const adjExpirationTime = new Date(expiredTime).getTime();

        const remainingDuration = adjExpirationTime - currentTime;
        return remainingDuration;
      };
      const remainingTime = calculateRemainingTime(expiredTime);
      const token = data.idToken;
      // console.log(token);
      if (response.ok) {
        history.replace("/expense");
        // dispatch(validActions.login());
        dispatch(validActions.loginHandler({ token }));

        dispatch(validActions.emailData({ emailIds }));
        setTimeout(() => {
          dispatch(validActions.logoutHandler());
        }, remainingTime);
        // console.log(data.email);
        // console.log(emailIds);
        // console.log(emailExpiry);
      }
      if (!response.ok) {
        throw new Error(data.error.message);
      }
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  });
  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <div className={classes.email}>
          <label>Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.password}>
          <label>Password</label>
          <input type="password" id="password" required ref={pwdRef} />
        </div>
        <div className={classes.btn}>
          {!isLoading && (
            <button type="submit">{!isLogin ? "SignUp" : "Login"}</button>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>{isError}</p>}
        </div>
        {!isLogin && (
          <button type="button" className={classes.goBtn} onClick={goToLogin}>
            Already Sign Up? Login
          </button>
        )}
        {isLogin && (
          <button type="button" className={classes.goBtn} onClick={goToSignup}>
            New User? Sign Up
          </button>
        )}
      </form>
    </>
  );
};

export default Registration;
