import React from "react";
import local from "../assets/local.svg";
import rate from "../assets/rating.svg";

const PackageCard = ({ img, title, desc, rating }) => {
  return (
    <div className="package__card--one">
      <img src={img} alt="boat" />
      <div className="package__card--title">
        <img src={local} alt="location" className="location" />
        <h4>{title}</h4>
        <img src={rate} alt="rating" className="star" />
        <p>{rating}</p>
      </div>
      <p className="package__card--one__desc">{desc}</p>
      <button className="package__button">Book Now</button>
    </div>
  );
};

export default PackageCard;
