import Column from "../Column/Column";
import { structure } from "../../util/data";
import { FC } from "react";
import { Student } from "../../types";

const SeatContainer: FC<{ data: Student[]; searchText: string }> = ({
  data,
  searchText,
}) => {
  return (
    <div className="flex items-start gap-20 overflow-x-scroll  p-6 mt-[150px]  md:mt-[170px]">
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
