import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import "./Value.css"

const Value = () => {
  return (
    <section className="padding-block-900">
      <div className="container">
        <h2 className="value-title">
          Top Value From Us For <span>You</span>
        </h2>
        <p className="value-text">Try a variety of services when using our services</p>

        <div className="values">
          <div className="value">
            <div className="icon-box">
              <FaGlobeAfrica style={{ fontSize: '3.5rem' }} />
            </div>
            <h3 className="value-detail">Lots Of Choice</h3>
            <p style={{ width: '50%', marginInline: 'auto'}}>Top 500 Destinations that we work with</p>
          </div>

          <div className="value" style={{ boxShadow: "10px 10px 22px -4px rgba(0,0,0,0.75)", width: "300px", borderRadius: '1rem' }}>
            <div className="icon-box">
              <FaGlobeAfrica style={{ fontSize: '3.5rem' }} />
            </div>
            <h3 className="value-detail">Best Tour Guide</h3>
            <p style={{ width: '50%', marginInline: 'auto'}}>Our Tour guide with 10+ years experience</p>
          </div>

          <div className="value">
            <div className="icon-box">
              <FaGlobeAfrica style={{ fontSize: '3.5rem' }} />
            </div>
            <h3 className="value-detail">Easy Booking</h3>
            <p style={{ width: '50%', marginInline: 'auto'}}>With an easy and fast ticket purchase process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
