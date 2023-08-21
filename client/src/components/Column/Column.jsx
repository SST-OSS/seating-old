import Seat from "../Seat/Seat";

const Column = ({
  rowCount,
  colCount,
  startIndex,
  colName,
  students,
  searchText,
}) => {
  const rows = Array.apply(null, Array(rowCount)).map(function () {});
  const cols = Array.apply(null, Array(colCount)).map(function () {});
  let startId = startIndex;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-purple-300 text-3xl font-bold text-center">
        {colName}
      </h2>

      <div className="gap-8 flex flex-col">
        {rows.map((row, idxRow) => {
          return (
            <div className="flex gap-4" key={idxRow}>
              {cols.map((col, idx) => {
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
