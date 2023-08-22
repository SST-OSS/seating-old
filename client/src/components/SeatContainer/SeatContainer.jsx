import React from 'react';
import Column from '../Column/Column';
import { structure } from '../../util/data';

const SeatContainer = ({ data, searchText }) => {
	return (
		<div className="gap-20 p-4" id="seat-container">
			<div className="flex items-start gap-20">
				{structure.map((column, idx) => {
					return (
						<Column {...column} students={data} searchText={searchText} key={idx} />
					);
				})}
			</div>
		</div>
	);
};

export default SeatContainer;
