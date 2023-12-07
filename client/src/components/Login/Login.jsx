import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { user, loading, error, dispatchAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatchAuth({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", userData);
      dispatchAuth({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatchAuth({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };

  console.log(user);

  return (
    <section className="login">
      <div className="first-section">
        <Link to="/">Back to Home</Link>
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
          onSubmit={handleClick}
        >
          <div className="form-element">
            <label htmlFor="text">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className=""
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className=""
              onChange={handleChange}
            />
          </div>

          <div className="form-password">
            <div className="check">
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>

            <p>Forget Password?</p>
          </div>

          <button type="submit" className="btn signin-btn">
            Sign In
          </button>
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "blueviolet", fontWeight: "900" }}
            >
              Register here
            </Link>
          </p>
          {error && <span>{error.message}</span>}
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
