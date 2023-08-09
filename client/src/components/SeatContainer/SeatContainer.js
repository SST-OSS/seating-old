import React from "react";
import modules from "./SeatContainer.module.css";
import Column from "../Column/Column";

const SeatContainer = ({ data }) => {
  const structure = [
    { rowCount: 9, colCount: 3, colName: "G", startIndex: 0 },
    { rowCount: 9, colCount: 4, colName: "F", startIndex: 27 },
    { rowCount: 8, colCount: 3, colName: "E", startIndex: 63 },
    { rowCount: 9, colCount: 3, colName: "D", startIndex: 87 },
    { rowCount: 9, colCount: 3, colName: "C", startIndex: 114 },
    { rowCount: 9, colCount: 3, colName: "B", startIndex: 141 },
    { rowCount: 9, colCount: 4, colName: "A", startIndex: 167 },
  ];

  console.log({ students: data });

  return (
    <div className={modules.container}>
      <div className={modules.blocks}>
        {structure.map((column) => {
          return <Column {...column} students={data} />;
        })}
      </div>
    </div>
  );
};

export default SeatContainer;
