/* eslint-disable array-callback-return */
import modules from './Column.module.css';

const Column = ({ rowCount, colCount, startIndex, colName, students }) => {
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
										<div className={modules.seat} id="text-overflow">
											{student?.name}
										</div>
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
