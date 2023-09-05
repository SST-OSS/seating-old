import Column from "./Column";
import { structure } from "../util/data";

const SeatContainer = () => {
  return (
    <div className="flex items-start gap-20 overflow-x-scroll  p-6 mt-[150px]  md:mt-[170px]">
      {structure.map((column, idx) => {
        return <Column {...column} key={idx} />;
      })}
    </div>
  );
};

export default SeatContainer;
