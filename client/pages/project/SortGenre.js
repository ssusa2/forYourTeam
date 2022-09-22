/** @format */
import { useState } from 'react';

import Genre from './Genre';

function SortGenre({ genre }) {
	const [btnActive, setBtnActive] = useState('');

	const toggleActive = (e) => {
		setBtnActive((prev) => {
			return e?.target.value;
		});
	};

	let data = [1, 2, 3, 4, 5];
	return (
		<>
			{genre.map((item, idx) => {
				const { genre, id } = item;
				return (
					<button
						value={idx}
						onClick={toggleActive}
						className={
							idx == btnActive
								? 'mt-3 main-color  mr-2 py-1 px-3 rounded-full border-2 border-green-700 font-semibold	 hover:bg-slate-50 hover:text-green'
								: 'mr-2 py-1 px-3 rounded-full border border-slate-300 font-semibold	 hover:bg-slate-100 hover:text-slate-600'
						}
					>
						{genre}
					</button>
				);
			})}
		</>
	);
}

export default SortGenre;
