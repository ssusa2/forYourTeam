/** @format */
import { useState } from 'react';
import { replaceBrTag } from '../../util/utils';

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
					<div className=' flex item-center' key={item.id[0]}>
						<button
							type='button'
							key={item.id[0]}
							value={value}
							onClick={(e) => {
								toggleActive(e);
								setGenreValue(e.target.value);
							}}
							className={
								value == btnActive
									? 'mb-2 mr-2 py-1 px-3 main-color w-max flex  rounded-full border-2 border-green-700 font-semibold	 hover:bg-slate-50 hover:text-green'
									: 'mr-2 py-1 mb-2 px-3  w-max flex rounded-full border border-slate-300 font-semibold	 hover:bg-slate-100 hover:text-slate-600'
							}
						>
							<span
								className='w-[20px] h-[20px] pt-[0.1rem] mr-1 stroke-2'
								dangerouslySetInnerHTML={replaceBrTag(item?.id?.[1])}
							/>
							{item.value}
						</button>
					</div>
				);
			})}
		</>
	);
}

export default SortGenre;
