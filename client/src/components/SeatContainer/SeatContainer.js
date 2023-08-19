import React from "react";
import modules from "./SeatContainer.module.css";
import Column from "../Column/Column";
import { structure } from "../../util/data";

const SeatContainer = ({ data, searchText }) => {
  return (
    <div className={modules.container}>
      <div className={modules.blocks}>
        {structure.map((column) => {
          return <Column {...column} students={data} searchText={searchText} />;
        })}
      </div>
    </div>
  );
};

export default SeatContainer;
