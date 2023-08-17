import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="padding-block-900">
      <div className="container">
        <h2 className="subscribe-title">
          Subscribe To Get The Lastest News About Us
        </h2>
        <p className="subscribe-text">
          We recommend you to subscribe, drop your email below to get daily
          update about us
        </p>

        <div className="subscribe-section">
          <form  className="subscribe">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <div className="subscribe-box">
              <AiOutlineMail style={{ color: "brown", fontSize: "2rem" }} />
              <input
                type="email"
                name=""
                className="email-input"
                placeholder="Enter Your Email Address"
                id=""
              />
            </div>
            <button type="submit" className="btn subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
