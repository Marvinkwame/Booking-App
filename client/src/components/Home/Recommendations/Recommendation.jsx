import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Recommendation.css";
import useFetch from "../../../hooks/useFetch";

const Recommendation = () => {
  const { data, isLoading, error } = useFetch("/hotels?featured=true");

  const generateRandomNumber = () => {
    const randomNumber = (Math.random() + 4).toFixed(1); // Generate a random number between 0 and 1, add 4, and round to three decimal places
    return parseFloat(randomNumber); // Parse the result back to a float
  };

  

  
  console.log(data);
  return (
    <section className="padding-block-900 recommedation">
      <div className="container">
        <h2 className="recommendation-title">Travel Recommendations</h2>
        <p className="recommendation-text">
          The best travel recommendations from around the world
        </p>

        <div className="recommendation-places">
          {isLoading ? (
            "Loading"
          ) : (
            <>
              {data.map((item) => {
                return (
                  <div className="place" key={item._id}>
                    <img
                      src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
                      className="place-img"
                      alt=""
                    />
                    <div className="place-details">
                      <div className="top">
                        <h3>{item.name}</h3>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <AiFillStar style={{ color: "orange" }} />
                          {generateRandomNumber()} / 5
                        </span>
                      </div>
                      <p style={{ padding: ".5rem" }}>
                        Tour package 3 days 2 nights with a good and friendly
                        tour guide.
                      </p>
                      <div className="bottom">
                        <p>${item.cheapestPrice}</p>
                        <button className="btn book-btn">Book Now</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
