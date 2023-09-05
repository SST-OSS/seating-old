import { useContext } from "react";
import Header from "./components/Header";
import SeatContainer from "./components/SeatContainer";
import { StudentContext } from "./contexts/StudentContextProvider";
import SearchContextProvider from "./contexts/SearchContextProvider";

function App() {
  const { students } = useContext(StudentContext);

  if (students.length === 0) {
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
        <SeatContainer />
      </SearchContextProvider>
    </div>
  );
}

export default App;
