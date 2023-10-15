import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Hotels.css";

const Hotels = (props) => {
  return (
    <section className="padding-block-900">
      <div className="container hotel-group">
        <div className="hotels">
          {/* Single Hotel */}

          {props.item && (
            <div className="hotel">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
                }}
              >
                <div className="icon">
                  <BiSolidStar />
                  <span>5</span>
                </div>
              </div>

              <div>
                <div className="top-details">
                  <div>
                    <h2
                      style={{
                        display: "flex",
                        gap: ".5rem",
                        alignItems: "center",
                      }}
                    >
                      {props.item.name}

                      <span>
                        {" "}
                        <BsPatchCheckFill
                          style={{ color: "green", fontSize: ".95rem" }}
                        />
                      </span>
                    </h2>
                    <p style={{ color: "green" }}>Kasoa, Los Angeles</p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "green",
                        fontWeight: "800",
                        textAlign: "right",
                      }}
                    ></p>
                    <p>200 reviews</p>
                  </div>
                </div>

                {/* additional details */}
                <div className="middle-details">
                  <div style={{ width: "75%", marginLeft: "-1.5rem" }}>
                    <ul>
                      <li>In high demand - only 6 rooms left!</li>
                      <li>
                        Reservations possible without a credit card. FREE
                        cancellation.
                      </li>
                    </ul>
                  </div>

                  <p
                    style={{
                      color: "green",
                      fontSize: "2rem",
                      fontWeight: "800",
                    }}
                  >
                    $3,003
                  </p>
                </div>

                <div className="bottom-details">
                  <p>Booked 2 times in the last hour</p>

                  <Link to={`/hotel/${props.item._id}`}>
                    <button className="btn book-btn">See availability</button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {!props.item < 1 && <p>{}</p> }

          {/* second hotel */}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
