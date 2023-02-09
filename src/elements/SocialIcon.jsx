import React from "react";

const SocialIcon = ({ img, alt }) => {
  return (
    <div className="footer_icons">
      <img src={img} alt={alt} />
    </div>
  );
};

export default SocialIcon;
