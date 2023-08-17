import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
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
        >
          <div className="form-element">
            <label htmlFor="email">Full Name</label>
            <input type="text" name="" id="" placeholder="Enter your name" />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" className="" placeholder="kobe@gmail.com" />
          </div>
          <div className="form-element">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" className="" />
          </div>

          <button className="btn signin-btn">Sign In</button>
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
