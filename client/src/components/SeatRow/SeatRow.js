import React from "react";
import modules from "./SeatRow.module.css";
import { rowData } from "../../util/data";
import Seat from "../Seat/Seat";

const SeatRow = ({ row }) => {
  return (
    <div className={modules.row}>
      {row.map((student) => {
        return (
          <div>
            <Seat data={student} />
          </div>
        );
      })}
    </div>
  );
};

export default SeatRow;
