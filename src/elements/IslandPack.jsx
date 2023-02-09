import React from "react";
import star from "../assets/rating.svg";
import "../island.css";

const IslandPack = ({ img, title, desc, rating, review }) => {
  return (
    <div className="island__pack">
      <img src={img} alt={title} />
      <div className="island__pack--details">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <div className="island__pack--rating">
        <img src={star} alt="rating" />
        <p>
          {rating}
          <span>({review} Reviews)</span>
        </p>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default IslandPack;
