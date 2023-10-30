import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { CgLoadbar } from "react-icons/cg";
import { FaRegLightbulb } from 'react-icons/fa';
import { GiWaterDrop } from "react-icons/gi";
import { LuSpeaker } from "react-icons/lu";
import useFetch from "../../hooks/useFetch";
import "./Hotel.css";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, isLoading, error } = useFetch(`/hotels/find/${id}`);
  const [openModal, setOpenModal] = useState(false);
  console.log(data);
  console.log(id);


  return (
    <section className="padding-block-900">
      {isLoading ? ( "Loading" ) : (
        <div className="container hotel-section">
        <div className="top">
          <h2>{data.name}</h2>

          <button className="btn book-btn">Reserve</button>
        </div>
        <main className="testimonial-grid">
          <div className="grid-span-2 grid-row-span box">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="box-img"
            />
          </div>
          <div className="grid-span-2 box">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="box1-img"
            />
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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

          <p className="desc-content">
            {data.description}
          </p>
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
