import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <section>
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Enter your email" required />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" required />
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
