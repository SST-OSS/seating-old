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

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    data = docSnap.data();
  } else {
    console.log("No such document!");
  }
  return data;
};

export default getStudent;
