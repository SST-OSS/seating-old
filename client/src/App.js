import './App.css';
import getStudent from './util/getStudent';
import generateNewArray from './util/generateNewArray';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import SeatContainer from './components/SeatContainer/SeatContainer';
import ScreenBox from './components/UI/ScreenBox';

function App() {
	const [studentData, setStudentData] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		(async () => {
			const data = await getStudent();
			const newData = generateNewArray(data.data);
			setStudentData(newData);
		})();
	}, []);

	if (studentData.length === 0) {
		return <div>Loading...</div>;
	}

	const captureSearchInput = (input) => {
		setSearchInput(input);
	};

	return (
		<div className="App">
			<Header value={searchInput} onCaptureInput={captureSearchInput} />
			<SeatContainer data={studentData} searchText={searchInput} />
		</div>
	);
}

export default App;
