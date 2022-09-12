/** @format */

function Genre({ genre, key, btnActive, idx, toggleActive }) {
	// console.log('Genre', genre);
	console.log(toggleActive);
	return (
		<button
			key={key}
			className={
				idx == btnActive
					? ' main-color mr-2 py-1 px-3 rounded-full border border-slate-300 font-semibold	 hover:bg-slate-300 hover:text-white'
					: 'mr-2 py-1 px-3 rounded-full border border-slate-300 font-semibold	 hover:bg-slate-300 hover:text-white'
			}
		>
			{genre}
		</button>
	);
}

export default Genre;
