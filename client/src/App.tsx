import getStudent from "./util/getStudent";
import generateNewArray from "./util/generateNewArray";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SeatContainer from "./components/SeatContainer";
import { Student } from "./types";
import SearchContextProvider from "./contexts/SearchContextProvider";

function App() {
  const [studentData, setStudentData] = useState<Student[]>([]);

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

  return (
    <div className="flex flex-col overflow-hidden bg-stone-900 h-screen">
      <SearchContextProvider>
        <Header />
        <SeatContainer data={studentData} />
      </SearchContextProvider>
    </div>
  );
}

export default App;
