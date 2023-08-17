import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='padding-block-900'>
      <div className="container">
        <div className='footer-section'>
          <div>
            <h4>Marvin</h4>
            <div className='footer-socials'>
              <BsFacebook style={{ fontSize: '1.5rem' }} />
              <BsInstagram style={{ fontSize: '1.5rem' }} />
              <BsLinkedin style={{ fontSize: '1.5rem' }} />
              <BsTwitter style={{ fontSize: '1.5rem' }} />
            </div>
          </div>

          <div className=''>
            <h4>About</h4>
            <ul role="list" aria-label="Footer" className='footer-links'>
              <li>
               About Us
              </li>
              <li>
                Destinations
                </li>
              <li>
                Article
              </li>
            </ul>
          </div>

          <div>
            <h4>About</h4>
            <ul role="list" aria-label="Footer" className='footer-links'>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Destinations</a>
              </li>
              <li>
                <a href="">Article</a>
              </li>
            </ul>
          </div>

          <div className='footer-contact'>
            <h4>Contact us</h4>
            <p>ME@GMAIL.COM</p>
            <p>GET THE APP</p>
            <button className="btn">Downloads</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer