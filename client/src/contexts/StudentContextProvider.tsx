import {
  createContext,
  useState,
  type Dispatch,
  SetStateAction,
  FC,
  ReactNode,
  useEffect,
} from "react";
import { Student } from "../types";
import getStudent from "../util/getStudent";
import generateNewArray from "../util/generateNewArray";

type studentContext = {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>;
};

export const StudentContext = createContext<studentContext>({
  students: [],
  setStudents: () => {},
});

const StudentContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    (async () => {
      const data = (await getStudent()) as { data: Student[] | undefined };
      if (data.data) {
        const newData = generateNewArray(data.data);
        setStudents(newData);
      }
    })();
  }, []);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
