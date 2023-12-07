import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    country: ''
  })
  const [responseError, setResponseError] = React.useState('')

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [e.target.id]: e.target.value,
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('auth/register', {
        ...userDetails,
      })
    } catch (err) {
      // If there's an error from the backend, update the responseError state with the error message.
      if (err.response && err.response.data && err.response.data.error) {
        setResponseError(err.response.data.error);
      } else {
        // If the error is not coming from the backend response, log it to the console for further investigation.
        console.log("An unexpected error occurred:", err);
      }
    }
  }


  return (
    <section className="login">
      <div className="first-section">
        <h2>Create an account</h2>
        <p>Enter your crendtials to register your account</p>
        <form
          action=""
          style={{
            display: "grid",
            rowGap: "1.5rem",
            width: "70%",
            marginTop: "1.5rem",
          }}
          onSubmit={handleSubmit}
        >
          <div className="form-element">
            <label htmlFor="text">Full Name</label>
            <input type="text" name="username" id="username" onChange={handleChange} placeholder="Enter your name" />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} className="" placeholder="kobe@gmail.com" />
          </div>
          <div className="form-element">
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={handleChange} id="password" className="" />
          </div>
          <div className="form-element">
            <label htmlFor="">Telephone</label>
            <input type="tel" name="phone" onChange={handleChange} id="phone"  />
          </div>
          <div className="form-element">
            <label htmlFor="">City</label>
            <input type="text" name="city" onChange={handleChange} id="city" className="" />
          </div>
          <div className="form-element">
            <label htmlFor="">Country</label>
            <input type="country" name="country" onChange={handleChange} id="country" className="" />
          </div>

          <button type="submit" className="btn signin-btn">Sign In</button>
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "blueviolet", fontWeight: "900" }} className="link">
              Sign In
            </Link>
          </p>
        </form>
      </div>

      <div className="second-section">
        <img
          src="https://images.unsplash.com/photo-1653485046387-267fca244b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="form-image"
        />
      </div>
    </section>
  );
};

export default Register;
