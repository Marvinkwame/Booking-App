import React from "react";
import { BiMap } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { CgLoadbar } from "react-icons/cg";
import { FaRegLightbulb } from 'react-icons/fa';
import { GiWaterDrop } from "react-icons/gi";
import { LuSpeaker } from "react-icons/lu";
import "./Hotel.css";

const Hotel = () => {
  return (
    <section className="padding-block-900">
      <div className="container hotel-section">
        <div className="top">
          <h2>The KasoaBurj Khalifa</h2>

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
          <p className="list">Working Space</p>
          <p className="list">General Event</p>
          <p className="list">Cozy</p>
          <p className="list">Cozy</p>
          <p className="list">Cozy</p>
          <p className="list">Cozy</p>
        </div>

        <div className="location-details">
          <div className="location-detail">
            <BiMap style={{ fontSize: "1rem" }} />
            <div>
              <h3>International City</h3>
              <p>Dubai</p>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            impedit ab laborum et illum atque aspernatur esse illo similique
            ratione voluptate labore ducimus perferendis, qui vero reprehenderit
            quia sunt temporibus.
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

        <button className="btn book-btn">Book Now</button>
      </div>
    </section>
  );
};

export default Hotel;
