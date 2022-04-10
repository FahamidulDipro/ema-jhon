import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCPassword] = useState('');
    const [error,setError] = useState('');

    const handleEmailBLur = (e)=>{
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePassBLur = (e)=>{
        setPassword(e.target.value);
        console.log(password);
    }
    const handleCPassBLur = (e)=>{
        setCPassword(e.target.value);
        console.log(cpassword);
    }

    return (
        <div>
             <section>
      <div className="login-container">
        <h1 className="login-heading">Signup</h1>
        <form>
          <div className="input-group">
          
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Enter your email" required onBlur={handleEmailBLur}/>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" required onBlur={handlePassBLur}/>
            <br />
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input type="password" placeholder="Confirm password" required onBlur={handleCPassBLur}/>
            <br />
            <input type="submit" value="Register" className="login-btn" />
          </div>
        </form>
        <p>
         Already have an account?
          <Link to={"/login"}>
            {" "}
            <span className="form-link">Signin</span>
          </Link>{" "}
          now!
        </p>
        
      </div>
    </section>
        </div>
    );
};

export default Signup;