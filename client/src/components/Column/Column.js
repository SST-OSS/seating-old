import Seat from '../Seat/Seat';
import modules from './Column.module.css';

const Column = ({
	rowCount,
	colCount,
	startIndex,
	colName,
	students,
	searchText,
}) => {
	const rows = Array.apply(null, Array(rowCount)).map(function () {});
	const cols = Array.apply(null, Array(colCount)).map(function () {});
	let startId = startIndex;

	return (
		<div className={modules.block}>
			<h2 className={modules.blockName}>{colName}</h2>

			<div className={modules.rows}>
				{rows.map((row) => {
					return (
						<div className={modules.row}>
							{cols.map((col) => {
								const student = students[startId++];
								return (
									<div className={modules.columns}>
										<Seat student={student} searchText={searchText} />
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Column;
