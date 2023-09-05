import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const getStudent = async () => {
  let data;
  const docRef = doc(db, "students", "1Xb39GEv03AIggNNcJYC");
  let docSnap;
  try {
    docSnap = await getDoc(docRef);
  } catch {
    console.log("An error occurred while fetching the data");
  }

  if (typeof docSnap !== "undefined" && docSnap.exists()) {
    data = docSnap.data();
  }
  return data;
};

export default getStudent;
