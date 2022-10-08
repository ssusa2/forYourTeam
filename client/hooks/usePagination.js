/** @format */

import { db } from '../pages/firebase';
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
	collectionGroup,
	where,
} from 'firebase/firestore';
import { useEffect, useState, useCallback } from 'react';

// collectionName -> 컬렉션 이름,
// limitCount -> 총 몇개의 데이터를 끊어서 요청할건지,
// target -> 교차 요소 (요소의 ref 전달)

export const usePagination = (
	collectionName,
	limitCount,
	target,
	GenreValue
) => {
	const [data, setData] = useState([]); // 불러온 문서들 상태
	const [loading, setLoading] = useState(false); // 로딩 상태
	const [loadingMore, setLoadingMore] = useState(false); // 추가 요청시 로딩 상태
	const [key, setKey] = useState(null); // 마지막으로 불러온 스냅샷 상태
	const [noMore, setNoMore] = useState(false); // 추가로 요청할 데이터 없다는 flag

	console.log('GenreValue 후후훅', GenreValue);
	// 첫번째 페이지 요청 함수

	console.log(GenreValue);
	const getFirstPage = useCallback(async () => {
		let queryRef = '';
		if (GenreValue == null) {
			queryRef = query(
				collectionGroup(db, collectionName),
				orderBy('joined', 'desc'), // 최신 작성순으로 정렬
				where('shallowSaving', '==', false),
				limit(limitCount)
			);
			console.log('1');
		} else if (GenreValue !== null) {
			queryRef = query(
				collectionGroup(db, collectionName),
				orderBy('joined', 'desc'), // 최신 작성순으로 정렬
				where('shallowSaving', '==', false),
				where('genre', '==', GenreValue),
				limit(limitCount)
			);
			console.log('2');
		}

		try {
			setLoading(true);

			const snap = await getDocs(queryRef);
			console.log('snap', snap);
			const docsArray = snap.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			// 문서 저장
			setData(docsArray);

			// 커서로 사용할 마지막 문서 스냅샷 저장
			setKey(snap.docs[snap.docs.length - 1]);
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	}, [collectionName, limitCount, GenreValue]);

	// 추가 요청 함수
	const loadMore = useCallback(
		async (loadCount) => {
			let queryRef = '';
			if (GenreValue == null) {
				queryRef = query(
					collectionGroup(db, collectionName),
					orderBy('joined', 'desc'),
					where('shallowSaving', '==', false),
					startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
					limit(loadCount)
				);
				console.log('1');
			} else if (GenreValue !== null) {
				queryRef = query(
					collectionGroup(db, collectionName),
					orderBy('joined', 'desc'),
					where('shallowSaving', '==', false),
					where('genre', '==', GenreValue),
					startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
					limit(loadCount)
				);
				console.log('2');
			}
			// const queryRef = query(
			// 	collectionGroup(db, collectionName),
			// 	orderBy('joined', 'desc'),
			// 	where('shallowSaving', '==', false),
			// 	GenreValue !== '' && where('genre', '==', GenreValue),
			// 	startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
			// 	limit(loadCount)
			// );
			try {
				const snap = await getDocs(queryRef);
				snap.empty === 0
					? setNoMore(true) // 만약 스냅샷이 존재 하지 않는다면 더이상 불러올수 없다는 flag 설정
					: setKey(snap.docs[snap.docs.length - 1]); // 존재한다면 처음과 마찬가지고 마지막 커서 저장
				const docsArray = snap.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData([...data, ...docsArray]); // 기존 데이터와 합쳐서 상태 저장
			} catch (err) {
				console.log(err);
			}
		},
		[collectionName, data, key]
	);

	// 지정된 요소가 화면에 보일때 실행할 콜백함수
	const onIntersect = useCallback(
		async ([entry], observer) => {
			// 만약에 지정한 요소가 화면에 보이거나 현재 데이터를 더 불러오는 상황이 아닐경우,
			// 기존 요소의 주시를 해체하고 추가로 3개의 문서를 더 불러오도록 설정
			if (entry.isIntersecting && !loadingMore) {
				observer.unobserve(entry.target);
				setLoadingMore(true);
				key && (await loadMore(4));
				setLoadingMore(false);
			}
		},
		[loadMore, loadingMore]
	);

	// 처음 화면이 랜더링 되었을때 첫번째 페이지를 문서를 가져오도록 설정
	useEffect(() => {
		getFirstPage();
	}, [getFirstPage, GenreValue]);

	// target 요소의 ref가 전달되었을때 해당 요소를 주시할수 있도록 observer 인스턴스 생성후 전달
	useEffect(() => {
		let observer;
		if (target && !noMore) {
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0,
			});
			observer.observe(target);
		}
		// 메모리 해제 작업
		return () => {
			setLoading(false);
			setLoadingMore(false);
			observer && observer.disconnect();
		};
	}, [target, onIntersect, noMore]);

	return { data, loading, loadingMore, noMore };
};

// export const useGenrePagination = (
// 	collectionName,
// 	limitCount,
// 	target,
// 	GenreValue
// ) => {
// 	const [genreData, setGenreData] = useState([]); // 불러온 문서들 상태
// 	const [loading, setLoading] = useState(false); // 로딩 상태
// 	const [loadingMore, setLoadingMore] = useState(false); // 추가 요청시 로딩 상태
// 	const [key, setKey] = useState(null); // 마지막으로 불러온 스냅샷 상태
// 	const [noMore, setNoMore] = useState(false); // 추가로 요청할 데이터 없다는 flag

// 	// 첫번째 페이지 요청 함수
// 	const getFirstPage = useCallback(async () => {
// 		const queryRef = query(
// 			collectionGroup(db, collectionName),
// 			orderBy('joined', 'desc'), // 최신 작성순으로 정렬
// 			where('shallowSaving', '==', false),
// 			where('genre', '==', GenreValue),
// 			limit(limitCount)
// 		);
// 		try {
// 			setLoading(true);

// 			const snap = await getDocs(queryRef);
// 			const docsArray = snap.docs.map((doc) => ({
// 				id: doc.id,
// 				...doc.data(),
// 			}));

// 			// 문서 저장
// 			setGenreData(docsArray);

// 			// 커서로 사용할 마지막 문서 스냅샷 저장
// 			setKey(snap.docs[snap.docs.length - 1]);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 		setLoading(false);
// 	}, [collectionName, limitCount]);

// 	// 추가 요청 함수
// 	const loadMore = useCallback(
// 		async (loadCount) => {
// 			const queryRef = query(
// 				collectionGroup(db, collectionName),
// 				orderBy('joined', 'desc'),
// 				where('shallowSaving', '==', false),
// 				where('genre', '==', GenreValue),
// 				startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
// 				limit(loadCount)
// 			);
// 			try {
// 				const snap = await getDocs(queryRef);
// 				snap.empty === 0
// 					? setNoMore(true) // 만약 스냅샷이 존재 하지 않는다면 더이상 불러올수 없다는 flag 설정
// 					: setKey(snap.docs[snap.docs.length - 1]); // 존재한다면 처음과 마찬가지고 마지막 커서 저장
// 				const docsArray = snap.docs.map((doc) => ({
// 					id: doc.id,
// 					...doc.data(),
// 				}));
// 				setGenreData([...genreData, ...docsArray]); // 기존 데이터와 합쳐서 상태 저장
// 			} catch (err) {
// 				console.log(err);
// 			}
// 		},
// 		[collectionName, genreData, key]
// 	);

// 	// 지정된 요소가 화면에 보일때 실행할 콜백함수
// 	const onIntersect = useCallback(
// 		async ([entry], observer) => {
// 			// 만약에 지정한 요소가 화면에 보이거나 현재 데이터를 더 불러오는 상황이 아닐경우,
// 			// 기존 요소의 주시를 해체하고 추가로 3개의 문서를 더 불러오도록 설정
// 			if (entry.isIntersecting && !loadingMore) {
// 				observer.unobserve(entry.target);
// 				setLoadingMore(true);
// 				key && (await loadMore(4));
// 				setLoadingMore(false);
// 			}
// 		},
// 		[loadMore, loadingMore]
// 	);

// 	// 처음 화면이 랜더링 되었을때 첫번째 페이지를 문서를 가져오도록 설정
// 	useEffect(() => {
// 		getFirstPage();
// 	}, [getFirstPage]);

// 	// target 요소의 ref가 전달되었을때 해당 요소를 주시할수 있도록 observer 인스턴스 생성후 전달
// 	useEffect(() => {
// 		let observer;
// 		if (target && !noMore) {
// 			observer = new IntersectionObserver(onIntersect, {
// 				threshold: 0,
// 			});
// 			observer.observe(target);
// 		}
// 		// 메모리 해제 작업
// 		return () => {
// 			setLoading(false);
// 			setLoadingMore(false);
// 			observer && observer.disconnect();
// 		};
// 	}, [target, onIntersect, noMore]);

// 	return { genreData, loading, loadingMore, noMore };
// };
