import React, { useEffect, useState } from "react";
import modules from "./Seat.module.css";

const Seat = ({ student, searchText }) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (searchText.length === 0) {
      setHighlight(false);
    }

    if (
      !student?.name.toLowerCase().includes(searchText.toLowerCase()) &&
      searchText.length !== 0
    ) {
      setHighlight(false);
    }

    if (
      student?.name.toLowerCase().includes(searchText.toLowerCase()) &&
      searchText.length >= 3
    ) {
      setHighlight(true);
    }
  }, [searchText, student]);

  const highlightClass = highlight ? `seatHigh` : "seatNormal";

  return (
    <div>
      <div className={modules.seat}>
        <p className={highlightClass}>{student?.name}</p>
      </div>
    </div>
  );
};

export default Seat;
