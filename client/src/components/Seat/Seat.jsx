import React, { useEffect, useState } from "react";

const Seat = ({ student, searchText }) => {
  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    if (searchText.length === 0) {
      setHighlight(false);
    }
    if (
      searchText.length >= 3 &&
      student?.name.toLowerCase().startsWith(searchText.toLowerCase())
    ) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [searchText, student]);

  const highlightClass = highlight ? `seatHigh` : "seatNormal";

  return (
    <div>
      <div
        className={`w-[56px] h-[56px] bg-slate-100 rounded-md cursor-pointer shadow-md p-2 text-lg text-center ${
          highlight && "bg-purple-300"
        }`}
      >
        <p className={"text-black capitalize text-ellipsis overflow-hidden"}>
          {student?.name.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Seat;
