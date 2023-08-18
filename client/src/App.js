import "./App.css";
import getStudent from "./util/getStudent";
import generateNewArray from "./util/generateNewArray";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SeatContainer from "./components/SeatContainer/SeatContainer";
import ScreenBox from "./components/UI/ScreenBox";

const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getStudent();
      const newData = generateNewArray(data.data);
      console.log(newData);
      setStudentData(newData);
    })();
  }, []);

  if (studentData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <ScreenBox />
      <SeatContainer data={studentData} />
    </div>
  );
}

export default App;
