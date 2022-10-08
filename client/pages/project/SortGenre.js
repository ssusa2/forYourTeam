/** @format */
import { useState } from 'react';

function SortGenre({
	genre,
	// queryGerne,
	btnActive,
	setBtnActive,
	setGenreValue,
}) {
	const toggleActive = (e) => {
		setBtnActive(e.target.value);
	};

	let regex = / /gi;

	return (
		<>
			{genre.map((item, idx) => {
				const { value } = item;
				return (
					<button
						key={item.id}
						value={value}
						onClick={(e) => {
							toggleActive(e);
							// queryGerne(e.target.value);
							setGenreValue(e.target.value);
						}}
						className={
							value == btnActive
								? 'main-color  block mb-2 h-fit	 mr-2 py-1 px-3 rounded-full border-2 border-green-700 font-semibold	 hover:bg-slate-50 hover:text-green'
								: 'mr-2 py-1 mb-2  px-3 h-fit	 rounded-full border border-slate-300 font-semibold	 hover:bg-slate-100 hover:text-slate-600'
						}
					>
						{item.value.replace(regex, '')}
					</button>
				);
			})}
		</>
	);
}

export default SortGenre;
