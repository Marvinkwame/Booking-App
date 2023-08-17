import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="first-section">
        <h2>Login into your account</h2>
        <p>Enter your crendtials to access your account</p>
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
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" className="" />
          </div>
          <div className="form-element">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" className="" />
          </div>

          <div className="form-password">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>

            <p>Forget Password?</p>
          </div>

          <button className="btn signin-btn">Sign In</button>
          <p style={{ textAlign: "center" }}>
            Don't have an account? <Link to="/register" style={{ color: "blueviolet", fontWeight: "900" }}>Register here</Link>
          </p>
        </form>
      </div>

      <div className="second-section">
        <img
          src="
            https://images.unsplash.com/photo-1671663606495-58ed774680f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="form-image"
        />
      </div>
    </section>
  );
};

export default Login;
