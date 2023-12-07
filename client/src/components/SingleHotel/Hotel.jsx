import React, { useContext, useState } from "react";
import { BiMap } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { CgLoadbar } from "react-icons/cg";
import { FaRegLightbulb } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { LuSpeaker } from "react-icons/lu";
import useFetch from "../../hooks/useFetch";
import "./Hotel.css";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, isLoading, error } = useFetch(`/hotels/find/${id}`);
  const [openModal, setOpenModal] = useState(false);
  const [openImages, setOpenImages] = useState(false);
  const [slideNum, setSlideNum] = useState(0);
  const { dates, options } = useContext(SearchContext);
  console.log(data.photos);
  console.log(id);
  console.log(dates);


  const openImage = (i) => {
    setSlideNum(i);
    setOpenImages(true);
  };

  
 

  return (
    <section className="padding-block-900">
      {isLoading ? (
        "Loading"
      ) : ( 
        <div className="container hotel-section">
          {/* 
          {openImages && (
            <div className="slider">
              <AiOutlineClose className="close" onClick={() => setOpenImages(false)} />
              <AiOutlineLeft className="arrow" onClick={() => handleMove("l")} />
              <div className="slider-wrapper">
                <img src={data.photos[slideNum]} alt="hotel photo" className="slider-image"/>
              </div>
              <AiOutlineRight className="arrow" onClick={() => handleMove("r")} />
            </div>
          )} */}

           
          <div className="top">
            <h2>{data.name}</h2>
            <p></p>

            <button className="btn book-btn">Reserve</button>
            
          </div>
         
          <main className="testimonial-grid">
            <div className="grid-span-2 grid-row-span box">
              <img
                src=""
                alt=""
                className="box-img"
              />
            </div>
            <div className="grid-span-2 box">
              <img
                src=""
                alt=""
                className="box1-img"
              />
            </div>
            <div className="box">
              <img
                src=""
                alt=""
              />
            </div>
            <div className="box">
              <img
                src=""
                alt=""
                className=""
              />
            </div>
          </main>

          <div className="lists">
            <p className="list">Free WiFi</p>
            <p className="list">Washing machine</p>
            <p className="list">Balcony</p>
            <p className="list">Bathtub</p>
            <p className="list">Air conditioning</p>
            <p className="list">Heating</p>
          </div>

          <div className="location-details">
            <div className="location-detail">
              <BiMap style={{ fontSize: "1rem" }} />
              <div>
                <h3>International City</h3>
                <p>{data.city}</p>
              </div>
            </div>

            <div className="location-detail">
              <BsPeopleFill style={{ fontSize: "1rem" }} />
              <div>
                <h3>Capacity</h3>
                <p>+200 (1,500 sqm)</p>
              </div>
            </div>
          </div>

          <div className="desc-box">
            <h3 className="description">
              <CgLoadbar />
              Description
            </h3>

            <p className="desc-content">{data.description}</p>
          </div>

          <div className="amenities-box">
            <h3 className="description">
              <CgLoadbar />
              Amenities
            </h3>

            <div className="amenities">
              <div className="amenity-box">
                <FaRegLightbulb />
                <span>&nbsp;Smart Lighting</span>{" "}
              </div>
              <div className="amenity-box">
                <GiWaterDrop />
                <span>&nbsp;Free Water</span>{" "}
              </div>
              <div className="amenity-box">
                <LuSpeaker />
                <span>&nbsp;Speaker</span>{" "}
              </div>
              <div className="amenity-box">
                <FaRegLightbulb />
                <span>&nbsp;Smart Lighting</span>{" "}
              </div>
              <div className="amenity-box">
                <GiWaterDrop />
                <span>&nbsp;Free Water</span>{" "}
              </div>
              <div className="amenity-box">
                <LuSpeaker />
                <span>&nbsp;Speaker</span>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hotel;
