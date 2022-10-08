/** @format */
import Select from 'react-select';
import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';

function SelectGenre({ setInfo, info, genreRef }) {
	const [genre, setGenre] = useState([]);

	const fetchGenre = async (Intro) => {
		const genreRef = doc(db, 'genre', 'appStore');
		const genreSnap = await getDoc(genreRef);
		// console.log(Intro);
		// const data = projectSnap.data();
		if (genreSnap.exists()) {
			// console.log('Document data:', projectSnap.data());
			setGenre(genreSnap.data());
		} else {
			console.log('No such document!');
		}
	};

	useEffect(() => {
		fetchGenre();
	}, []);

	let genre_options = [];
	let a = Object.entries(genre);

	for (let i = 0; i < a?.length; i++) {
		// for (let j = 0; j < a?.length; j++) {
		let op = {};
		op.value = a[i][0];
		op.id = a[i][1];
		op.label = a[i][0];
		genre_options.push(op);
	}
	let matchNumber = '';

	for (let i = 0; i < genre_options.length; i++) {
		if (genre_options[i].value == info.project_info.genre) {
			matchNumber = i;
			break;
		}
	}

	return (
		<>
			<Select
				value={genre_options[matchNumber]}
				// ref={(el) => (genreRef.current[2] = el)}
				ref={(elem) => (genreRef.current[2] = elem)}
				className='mt-1'
				placeholder='장르를 선택하세요'
				onChange={(e) => {
					setInfo((prev) => {
						return {
							...prev,
							project_info: {
								...info.project_info,
								genre: e.value,
							},
						};
					});
				}}
				options={genre_options}
			/>
		</>
	);
}

export default SelectGenre;
