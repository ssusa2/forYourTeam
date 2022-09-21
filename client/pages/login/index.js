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

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [newAccount, setNewAccount] = useState(true);
	const [error, setError] = useState('');

	const onChange = (event) => {
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
			console.log(data);
		} catch (error) {
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
	};
	return (
		<>
			<div className='my-container'>
				<form onSubmit={onSubmit}>
					<input
						value={email}
						name='email'
						type='text'
						placeholder='Email'
						onChange={onChange}
						required
					/>
					<input
						name='password'
						value={password}
						type='password'
						placeholder='Password'
						required
						onChange={onChange}
					/>
					<input
						type='submit'
						value={newAccount ? 'Create Account' : 'Sign In'}
					/>
					<span className='ml-3 bg-green-50' onClick={toggleAccount}>
						{newAccount ? 'Sign In' : 'Create Account'}
					</span>
					{error}
				</form>
				<button onClick={onSocialClick} name='google'>
					Continue with Google
				</button>
				<button onClick={onSocialClick} name='github'>
					Continue with Github
				</button>
			</div>
		</>
	);
}

export default Login;
