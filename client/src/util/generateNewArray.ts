import seedRandom from "seedrandom";
import { Student } from "../types";

const generateNewArray = (studentData: Student[]) => {
  const dateOfMonth = new Date().getDate();
  let newArray: Student[] = [];

  let batchA = shuffleArray(
    studentData.slice().filter((student) => student.batch === "A"),
    dateOfMonth
  );
  let batchB = shuffleArray(
    studentData.slice().filter((student) => student.batch === "B"),
    dateOfMonth
  );
  let batchC = shuffleArray(
    studentData.slice().filter((student) => student.batch === "C"),
    dateOfMonth
  );

  const empty12 = [
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "BSM", batch: "" },
  ];
  const empty3 = [
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "", batch: "" },
    { name: "BSM", batch: "" },
  ];

  const empty2 = [
    { name: "", batch: "" },
    { name: "", batch: "" },
  ];

  const empty1 = [{ name: "BSM", batch: "" }];

  if (dateOfMonth > 0 && dateOfMonth <= 10) {
    newArray = [
      ...batchA,
      ...empty2,
      ...empty12,
      ...batchB,
      ...empty1,
      ...batchC,
      ...empty3,
    ];
  } else if (dateOfMonth > 10 && dateOfMonth <= 20) {
    newArray = [
      ...batchC,
      ...empty12,
      ...batchA,
      ...empty2,
      ...empty1,
      ...batchB,
      ...empty3,
    ];
  } else if (dateOfMonth > 20 && dateOfMonth <= 31) {
    newArray = [
      ...batchB,
      ...empty12,
      ...batchC,
      ...empty1,
      ...batchA,
      ...empty2,
      ...empty3,
    ];
  }
  return newArray;
};

const shuffleArray = (array: any[], dateOfMonth: number) => {
  const generator = seedRandom(dateOfMonth.toString());
  const randomNumber = generator();
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(randomNumber * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default generateNewArray;
