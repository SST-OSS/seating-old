import getStudent from "./util/getStudent";
import generateNewArray from "./util/generateNewArray";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SeatContainer from "./components/SeatContainer/SeatContainer";
import { Student } from "./types";

function App() {
  const [studentData, setStudentData] = useState<Student[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    (async () => {
      const data = (await getStudent()) as { data: Student[] | undefined };
      if (data.data) {
        const newData = generateNewArray(data.data);
        setStudentData(newData);
      }
    })();
  }, []);

  if (studentData.length === 0) {
    return (
      <div className="w-screen flex flex-col items-center justify-center text-white font-bold text-5xl h-screen">
        Loading...
      </div>
    );
  }

  const captureSearchInput = (input: string) => {
    setSearchInput(input);
  };

  return (
    <div className="flex flex-col overflow-hidden bg-stone-900 h-screen">
      <Header searchInput={searchInput} onCaptureInput={captureSearchInput} />
      <SeatContainer data={studentData} searchText={searchInput} />
    </div>
  );
}

export default App;
