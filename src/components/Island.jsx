import React from "react";
import IslandPack from "../elements/IslandPack";
import img1 from "../assets/island_1.svg";
import img2 from "../assets/island_2.svg";
import img3 from "../assets/island_3.svg";
import img4 from "../assets/island_4.svg";
import img5 from "../assets/island_5.svg";
import img6 from "../assets/island_6.svg";

const Island = () => {
  return (
    <div className="island">
      <h3 className="island__heading">Island Stays</h3>
      <p className="island__paragraph">
        One can choose from a variety of beautiful coral islands which offers
        different staying experiences from thatched huts to luxurious modern
        properties. Every island offers a wider range of water sports and beach
        activities for you to enjoy.
      </p>
      <IslandPack
        img={img1}
        title="Kavaratti"
        desc="Kavaratti is the capital of the Union Territory
of Lakshadweep having ..."
        rating="4.5"
        review="1.5K"
      />
      <IslandPack
        img={img2}
        title="Kavaratti"
        desc="Kavaratti is the capital of the Union Territory
of Lakshadweep having ..."
        rating="4.5"
        review="1.5K"
      />
      <IslandPack
        img={img3}
        title="Kavaratti"
        desc="Kavaratti is the capital of the Union Territory
of Lakshadweep having ..."
        rating="4.5"
        review="1.5K"
      />
      <IslandPack
        img={img4}
        title="Kavaratti"
        desc="Kavaratti is the capital of the Union Territory
of Lakshadweep having ..."
        rating="4.5"
        review="1.5K"
      />
      <IslandPack
        img={img5}
        title="Kavaratti"
        desc="Kavaratti is the capital of the Union Territory
of Lakshadweep having ..."
        rating="4.5"
        review="1.5K"
      />
      <IslandPack
        img={img6}
        title="Kavaratti"
        desc="Kavaratti is the capital of the Union Territory
of Lakshadweep having ..."
        rating="4.5"
        review="1.5K"
      />
    </div>
  );
};

export default Island;
