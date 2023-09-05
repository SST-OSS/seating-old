import { FC, useContext } from "react";
import Seat from "./Seat";
import { StudentContext } from "../contexts/StudentContextProvider";

const Column: FC<{
  rowCount: number;
  colCount: number;
  colName: string;
  startIndex: number;
}> = ({ rowCount, colCount, startIndex, colName }) => {
  const { students } = useContext(StudentContext);
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
                    <Seat student={student} key={idx} />
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
