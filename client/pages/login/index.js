/** @format */
import { useState } from 'react';
import { FirebaseAuth, FirebaseInstance } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import styled from 'styled-components';
import { useRouter } from 'next/router';

function Login() {
	const route = useRouter();
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [newAccount, setNewAccount] = useState(true);
	const [error, setError] = useState('');

	const onChange = (event) => {
		console.log(event.target.value);
		const {
			target: { name, value },
		} = event;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			let data;
			if (newAccount) {
				const { user } = await createUserWithEmailAndPassword(
					FirebaseAuth,
					email,
					password
				);
			} else {
				const { user } = await signInWithEmailAndPassword(
					FirebaseAuth,
					email,
					password
				);
			}
			console.log('성공');
			alert('환영합니다.😀');
			router.push('/home');
		} catch (error) {
			console.log(error.message);

			setError(error.message);
		}
	};

	const toggleAccount = () => {
		setNewAccount((prev) => !prev);
	};

	const onSocialClick = async (event) => {
		const {
			target: { name },
		} = event;
		let provider;
		if (name === 'google') {
			provider = new GoogleAuthProvider();
		} else if (name === 'github') {
			provider = new GithubAuthProvider();
		}
		const data = await signInWithPopup(FirebaseAuth, provider);
		console.log(data);
		data.user.displayName && route.push('/home');
	};

	if (error == 'Firebase: Error (auth/email-already-in-use).') {
		setError('이미 사용중인 계정입니다.');
	} else if (error == 'Firebase: Error (auth/wrong-password).') {
		setError('잘못된 정보입니다.');
	} else if (error == 'Firebase: Error (auth/invalid-email).') {
		setError('올바르지 못한 이메일 주소입니다.');
	}
	return (
		<>
			<div className='my-container mx-auto'>
				<div className=' flex '>
					{/* 왼쪽 */}
					<div className='sm:w-1/2 w-full'>
						<div className='sm:w-2/3 w-full'>
							{newAccount ? (
								<h1 className='main-color middle-title text-start'>회원가입</h1>
							) : (
								<h1 className='main-color middle-title text-start'>로그인</h1>
							)}{' '}
							<form onSubmit={onSubmit}>
								<label className='small-title '>아이디</label>
								<input
									className=' base-form'
									value={email}
									name='email'
									type='text'
									placeholder='Email'
									onChange={onChange}
									// required
								/>
								<label className='small-title '>비밀번호</label>
								<input
									name='password'
									value={password}
									type='password'
									placeholder='Password'
									className=' base-form'
									onChange={onChange}
									// required
								/>
								<p className='text-red-600'>{error}</p>

								<input
									onClick={(e) => onSubmit(e)}
									className=' rounded-lg  px-4 py-2 text-xl font-semibold shadow-sm bg-green-700 transition duration-300 ease-in-out text-white border-green-700 hover:bg-green-800  sm:text-base w-full mt-3'
									type='submit'
									value={newAccount ? '계정 만들기' : '로그인 하기'}
								/>
							</form>
						</div>

						<div className='sm:w-2/3 w-full text-center'>
							<SNS>or Sign in with Social Login</SNS>
							<button
								className='round-button w-full  mt-3'
								onClick={onSocialClick}
								name='google'
							>
								Continue with Google
							</button>
							<button
								className='round-button w-full  mt-3'
								onClick={onSocialClick}
								name='github'
							>
								Continue with Github
							</button>
						</div>
					</div>

					<div className='hidden sm:block w-1/2  rounded-2xl py-4 px-4 text-center '>
						<h3 className='font-extrabold  text-3xl mb-3'>
							{newAccount ? '재방문하시나요? 🖐' : '처음 방문하시나요? 🖐'}
						</h3>

						{newAccount ? (
							<pre className='pre'>
								다시 만나서 반갑습니다! <br />
								ForMyTeam과 함께 여려분의 프로젝트를 소개해보세요.
							</pre>
						) : (
							<pre className='pre'>
								새로운 계정을 만들고 여러분의 소중한 프로젝트를 소개해보세요!
								<br />
								ForMyTeam과 함께하면 간단하게 프로젝트 소개를 할 수 있어요
							</pre>
						)}

						<div className='mt-3 flex justify-center'>
							<button
								className=' w-1/2 border-2 border-green-700 mt-3 rounded-lg  px-4 py-2 text-2xl font-extrabold shadow-sm transition duration-300 ease-in-out text-green-700 hover:bg-green-700 hover:text-white sm:text-base '
								onClick={toggleAccount}
							>
								{newAccount ? '로그인하기 ' : '회원가입 하기'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;

const SNS = styled.p`
	color: #bebebe;
	margin: 1rem 0 1rem 0;
	font-weight: 500;
	display: flex;
	align-items: center;
	--text-divider-gap: 1rem;

	::before {
		content: '';
		height: 1px;
		background-color: #bebebe;
		flex-grow: 1;
		margin-right: var(--text-divider-gap);
	}
	::after {
		content: '';
		height: 1px;
		background-color: #bebebe;
		flex-grow: 1;
		margin-left: var(--text-divider-gap);
	}
`;
