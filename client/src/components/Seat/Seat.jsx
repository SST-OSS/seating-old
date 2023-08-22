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
      <div className="w-[56px] h-[56px] bg-gray-600 rounded-md cursor-pointer shadow-md p-2 text-lg text-center">
        <p
          className={`${
            highlight ? "text-black bg-yellow-200" : "text-white"
          } capitalize text-ellipsis overflow-hidden`}
        >
          {student?.name.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Seat;
