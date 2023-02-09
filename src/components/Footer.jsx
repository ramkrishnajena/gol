import React from "react";
import SocialIcon from "../elements/SocialIcon";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import footelogo from "../assets/footer_logo.svg";
import "../footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__one">
          <img src={footelogo} alt="logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
          <div className="footer__one--icons">
            <SocialIcon img={fb} alt="facebook" />
            <SocialIcon img={twitter} alt="twitter" />
            <SocialIcon img={linkedin} alt="linkedin" />
            <SocialIcon img={instagram} alt="instagram" />
          </div>
        </div>
        <div className="footer__two">
          <div className="ul--one">
            <p>Company</p>
            <ul>
              <li>Events</li>
              <li>Blogs</li>
              <li>FAQ</li>
              <li>Join US</li>
            </ul>
          </div>
          <div className="ul--two">
            <p>About</p>
            <ul className="ul--two">
              <li>Project</li>
              <li>Lorem</li>
              <li>Services</li>
              <li>Our Story</li>
            </ul>
          </div>
        </div>
        <div className="footer__three">
          <p>Contact Us</p>
          <p>abc@lorem.com</p>
          <p>India</p>
        </div>
      </div>
      <div className="footer__four">
        <hr />
        <p>
          Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
