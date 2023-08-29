const { getFirestore, setDoc, doc } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');
const { config } = require('dotenv');
config();
const fs = require('fs');
const firebaseConfig = {
	apiKey: process.env.VITE_apiKey,
	authDomain: process.env.VITE_authDomain,
	projectId: process.env.VITE_projectId,
	storageBucket: process.env.VITE_storageBucket,
	messagingSenderId: process.env.VITE_messagingSenderId,
	appId: process.env.VITE_appId,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const batches = [];

const data = fs.readFileSync('batch1.txt');
const batch1 = data.toString().split('\n');
batch1.forEach((name) => {
	batches.push({ name, batch: 'A' });
});

const data2 = fs.readFileSync('batch2.txt');
const batch2 = data2.toString().split('\n');
batch2.forEach((name) => {
	batches.push({ name, batch: 'B' });
});

const data3 = fs.readFileSync('batch3.txt');
const batch3 = data3.toString().split('\n');
batch3.forEach((name) => {
	console.log({ name });
	batches.push({ name, batch: 'C' });
});

(async () => {
	await setDoc(doc(db, 'students', '1Xb39GEv03AIggNNcJYC'), { data: batches });
})();
