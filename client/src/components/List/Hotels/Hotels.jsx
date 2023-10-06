import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import "./Hotels.css";
import useFetch from "../../../hooks/useFetch";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, isLoading, error, reFetch } = useFetch(
    `/hotels?city=${destination}`
  );

  console.log(data);
  console.log(error);
  console.log(location);
  return (
    <section className="padding-block-900">
      <div className="container hotel-group">
        <div className="hotels">
          {/* Single Hotel */}
          {isLoading ? (
            "Loading"
          ) : (
            <>
              {data.map((item) => {
                return (
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
                            {item.name}{" "}
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
                          >
                            8.3/10
                          </p>
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

                        <button className="btn book-btn">
                          See availability
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* second hotel */}
          <div className="hotel">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
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
                    Kasoa Califonia{" "}
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
                  >
                    8.3/10
                  </p>
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

                <button className="btn book-btn">See availability</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
