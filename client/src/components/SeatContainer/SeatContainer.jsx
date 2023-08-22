import React from "react";
import Column from "../Column/Column";
import { structure } from "../../util/data";

const SeatContainer = ({ data, searchText }) => {
  return (
    <div className="flex items-start gap-20 overflow-x-scroll overflow-y-hidden p-6">
      {structure.map((column, idx) => {
        return (
          <Column
            {...column}
            students={data}
            searchText={searchText}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default SeatContainer;
