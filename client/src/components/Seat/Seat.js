import React from "react";
import modules from "./Seat.module.css";

const Seat = ({ data }) => {
  return (
    <div className="seat">
      <p className={modules.name}>{data.name}</p>
    </div>
  );
};

export default Seat;
