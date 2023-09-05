import { FC } from "react";
import Seat from "./Seat";
import { Student } from "../types";

const Column: FC<{
  rowCount: number;
  colCount: number;
  colName: string;
  startIndex: number;
  students: Student[];
  searchText: string;
}> = ({ rowCount, colCount, startIndex, colName, students, searchText }) => {
  const rows = Array.apply(null, Array(rowCount)).map(function () {});
  const cols = Array.apply(null, Array(colCount)).map(function () {});
  let startId = startIndex;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-purple-300 text-3xl font-bold text-center">
        {colName}
      </h2>

      <div className="gap-8 flex flex-col">
        {rows.map((_, idxRow) => {
          return (
            <div className="flex gap-4" key={idxRow}>
              {cols.map((_, idx) => {
                const student = students[startId++];
                return (
                  <div key={idx}>
                    <Seat student={student} searchText={searchText} key={idx} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Column;
