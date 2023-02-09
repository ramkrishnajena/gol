import React from "react";
import PackageCard from "../elements/PackageCard";
import PackageName from "../elements/PackageName";
import packimg1 from "../assets/pack-img.svg";
import packimg2 from "../assets/pack-img2.svg";
import packimg3 from "../assets/pack-img3.svg";

const Package = () => {
  return (
    <div className="package">
      <div className="package__head">
        <h3 className="head">Best Package For You</h3>
        <p>
          This is a unique experience on ship, sea and land, exploring different
          coral islands of Lakshadweep.
        </p>
      </div>
      <div className="package__options">
        <PackageName selected name="Maldives" />
        <PackageName name="Samudram" />
        <PackageName name="Cordelia" />
        <PackageName name="Agatti" />
        <PackageName name="More" />
      </div>
      <div className="package__card">
        <PackageCard
          img={packimg1}
          title="Indonesia"
          desc="Explore the Beauty of the island for 3 days
and 2 nights with our travel agency..."
          rating="4.5"
        />
        <PackageCard
          img={packimg2}
          title="Indonesia"
          desc="Explore the Beauty of the island for 3 days
          and 2 nights with our travel agency..."
          rating="4.5"
        />
        <PackageCard
          img={packimg3}
          title="Indonesia"
          desc="Explore the Beauty of the island for 3 days
          and 2 nights with our travel agency..."
          rating="4.5"
        />
      </div>
    </div>
  );
};

export default Package;
