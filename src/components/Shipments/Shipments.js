 
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
 

const Shipments = () => {
  const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

     
 
    const handleNameBlur = (e) => {
        setName(e.target.value);
        console.log(name);
      };
      const handleAddressBlur = (e) => {
        setAddress(e.target.value);
        console.log(address);
      };
      const handlePhoneBlur = (e) => {
        setPhone(e.target.value);
        console.log(phone);
      };
      const handleCreateUser = (e) => {
        e.preventDefault();
       
      };
    
    
    return (
        <div>
            <section>
        <div className="login-container">
          <h1 className="login-heading">Shipping Form</h1>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                required
                onBlur={handleNameBlur}
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                
              
                value={user?.email}
              />
              <br />
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Address"
                required
                onBlur={handleAddressBlur}
              />
              <br />
              <label htmlFor="cpassword">Phone Number</label>
              <br />
              <input
                type="text"
                placeholder="Phone Number"
                required
                onBlur={handlePhoneBlur}
              />
             
              

              <br />
              <input type="submit" value="Add Shipping" className="login-btn" />
            </div>
          </form>
          
        </div>
      </section>
        </div>
    );
};

export default Shipments;