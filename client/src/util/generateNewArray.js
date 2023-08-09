import seedRandom from "seedrandom";

const generateNewArray = (studentData) => {
  const dateOfMonth = new Date().getDate();
  let newArray = [];

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

  if (dateOfMonth > 0 && dateOfMonth <= 10) {
    newArray = [...batchA, ...batchB, ...batchC];
  } else if (dateOfMonth > 10 && dateOfMonth <= 20) {
    newArray = [...batchC, ...batchA, ...batchB];
  } else if (dateOfMonth > 20 && dateOfMonth <= 31) {
    newArray = [...batchB, ...batchC, ...batchA];
  }

  console.log(newArray);
  return newArray;
};

const shuffleArray = (array, dateOfMonth) => {
  
  const generator = seedRandom(dateOfMonth);
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
