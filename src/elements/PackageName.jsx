import React from "react";

const PackageName = ({ name, selected }) => {
  return (
    <p className={`package__options--opt option ${selected ? "selected" : ""}`}>
      {name}
    </p>
  );
};

export default PackageName;
