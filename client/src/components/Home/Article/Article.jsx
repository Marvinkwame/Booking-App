import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <section className="padding-block-900">
      <div className="container">
        <h2 className="article-title">Our lastest articles about travel</h2>
        <p className="article-text">Know the lastest about travelling</p>

        <div className="articles">
          <div className="article">
            <img
              src="https://media.istockphoto.com/id/1319453433/photo/modern-luxury-house-with-private-infinity-pool-in-dusk.webp?b=1&s=170667a&w=0&k=20&c=rf0aZXhy20e04Puwy-fRvsmZDTNWd7eZq_WUJfnu0w4="
              alt=""
              className="article-img"
            />
            <div className="article-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>

          <div className="article">
            <img
              src="https://media.istockphoto.com/id/525408989/photo/family-with-suitcases-passing-by-fountain-in-tourist-resort.webp?b=1&s=170667a&w=0&k=20&c=6sjO5s66Cg5_4sXkQahhHi6SDJIr98t8uu-vzuN92TQ="
              alt=""
              className="article-img"
            />
            <div className="article-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>

          <div className="article">
            <img
              src="https://media.istockphoto.com/id/1213840216/photo/luxury-travel-romantic-couple-in-beach-hotel.webp?b=1&s=170667a&w=0&k=20&c=cDLUrdGBo0I9rnlviYFT-7IP32Rq2y249cCrQeHGFLY="
              alt=""
              className="article-img"
            />
            <div className="article-detail">
              <p>New York</p>
              <p>3 Days, 2 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
