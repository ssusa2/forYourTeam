/** @format */

import { useRouter } from 'next/router';
import { FirebaseAuth } from '../../pages/firebase';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function LogOut({ name, profileImg }) {
	const router = useRouter();
	const LogOutClick = () => {
		FirebaseAuth.signOut();
		router.push('/login');
	};
	// console.log(name.slice(-2));
	return (
		<>
			<Menu
				as='div'
				className='inline-block h-10 w-10 rounded-full ring-2 ring-white relative'
			>
				<div>
					<Menu.Button
						className='inline-block bg-green-700 h-10 w-10 rounded-full ring-2 ring-white drop-shadow-md

'
					>
						{profileImg ? (
							<img
								className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
								src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
								alt=''
							/>
						) : (
							<p className='text-white font-bold'>{name?.slice(-2)}</p>
						)}

						{/* <ChevronDownIcon
							className='-mr-1 ml-2 h-5 w-5'
							aria-hidden='true'
						/> */}
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute -right-6 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
						<div className='py-1'>
							<Menu.Item>
								{({ active }) => (
									<a
										href='#'
										onClick={LogOutClick}
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm font-bold'
										)}
									>
										Log-out
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href='#'
										onClick={() => router.push('/mypage')}
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm font-bold'
										)}
									>
										MyPage
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href='#'
										onClick={() => router.push('/project')}
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm font-bold'
										)}
									>
										Projects
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	);
}

export default LogOut;
