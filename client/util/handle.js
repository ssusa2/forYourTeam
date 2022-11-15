/** @format */

import { db, storage, storageRef } from '../pages/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const handleFormChange = async (
	index,
	event,
	state,
	setState,
	folder,
	projectName,
	userID
) => {
	let data = [...state];
	try {
		let fileUrl = '';
		if (event.target.type == 'file') {
			if (event.target.value != '') {
				const fileRef = ref(
					storage,
					`${userID}/${projectName}/${folder}/${index}`
				);
				const uploadTask = await uploadBytes(
					fileRef,
					event.target.files[0]
				).then((snapshot) => {});

				fileUrl = await getDownloadURL(fileRef);
			}
			data[index][event.target.name] = fileUrl;
		} else {
			data[index][event.target.name] = event.target.value;
		}
		setState(data);
	} catch (err) {
		// console.error(err);
	}
};
export default handleFormChange;
