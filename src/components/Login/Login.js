import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <section>
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        {error && <p style={{ color: "red" }}>{error?.message}</p>}
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              required
              onBlur={handleEmailBlur}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              required
              onBlur={handlePassBlur}
            />
            <br />
            <input type="submit" value="Login" className="login-btn" />
          </div>
        </form>
        <p>
          New to Ema-Jhon?
          <Link to={"/signup"}>
            {" "}
            <span className="form-link">Create an account</span>
          </Link>{" "}
          now!
        </p>
        <input
          type="submit"
          value="Continue With Google"
          className="google-login-btn"
        />
      </div>
    </section>
  );
};

export default Login;
