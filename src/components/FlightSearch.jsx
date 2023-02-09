import React from "react";
import direction from "../assets/from-to.svg";
import downarrow from "../assets/Vector.svg";
import showFlight from "../assets/show-flight.svg";

const FlightSearch = () => {
  return (
    <>
      <div className="flight--search">
        <div className="flight--search__container">
          <div className="flight--serach__heading">
            <h3>Where are you flying?</h3>
          </div>
          <div className="input--lables">
            <lable className="ft__lable lable">From-To</lable>
            <label className="trip__lable">Trip</label>
            <label className="travel__lable">Depart-Return</label>
            <label className="class__lable">Passenger-Class</label>
          </div>
          <div className="flight--search__input">
            <div className="input__box destination">
              <input type="text" value="Mumbai" name="from" id="from" />
              <input type="text" value="Lakshadweep" name="" id="to" />
              <img src={direction} alt="from-to-icon" />
            </div>
            <div className="trip__box trip">
              <select id="type" name="traveltype">
                <option value="Return">Return</option>
                <option value="One-Way">One-Way</option>
              </select>
            </div>
            <div className="input__box traveldate">
              <input type="date" name="from-date" id="from-date" />
              <input type="date" name="to-date" id="to-date" />
            </div>
            <div className="input__box passenger class">
              <input type="text" value="1 Passenger" name="passenger" id="" />
              <input type="text" value="Economy" name="class" id="" />
            </div>
          </div>
        </div>
        <div className="show--btn">
          <div className="add__code">
            <p>+ Add Promo Code</p>
          </div>
          <div className="show__flight">
            <button>
              <img src={showFlight} alt="button" />
              <p>Show Flight</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
