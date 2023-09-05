import Column from "./Column";
import { structure } from "../util/data";
import { FC, useContext } from "react";
import { Student } from "../types";
import { SearchContext } from "../contexts/SearchContextProvider";

const SeatContainer: FC<{ data: Student[] }> = ({ data }) => {
  const { searchInput } = useContext(SearchContext);

  return (
    <div className="flex items-start gap-20 overflow-x-scroll  p-6 mt-[150px]  md:mt-[170px]">
      {structure.map((column, idx) => {
        return (
          <Column
            {...column}
            students={data}
            searchText={searchInput}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default SeatContainer;
