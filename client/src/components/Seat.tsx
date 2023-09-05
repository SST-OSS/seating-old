import { FC, useContext, useEffect, useState } from "react";
import { Student } from "../types";
import { SearchContext } from "../contexts/SearchContextProvider";

const Seat: FC<{ student: Student }> = ({ student }) => {
  const { searchInput } = useContext(SearchContext);

  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    if (searchInput.length === 0) {
      setHighlight(false);
    }
    if (
      searchInput.length >= 3 &&
      student?.name.toLowerCase().startsWith(searchInput.toLowerCase())
    ) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [searchInput, student]);

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
