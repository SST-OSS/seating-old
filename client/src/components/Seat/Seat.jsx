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

  return (
    <div>
      <div
        className={`w-[70px] h-[56px] rounded-md cursor-pointer shadow-md p-2 text-xl text-center ${
          highlight ? "bg-purple-300" : "bg-slate-100"
        }`}
      >
        <p
          className={`text-black capitalize text-ellipsis overflow-hidden ${
            highlight && "font-bold"
          }`}
        >
          {student?.name.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Seat;
