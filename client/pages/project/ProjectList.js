/** @format */

import Link from 'next/link';
import { useRouter } from 'next/router';

function ProjectList({ projects }) {
	const router = useRouter();
	console.log('projects', projects);
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-16 sm:py-24  lg:max-w-7xl'>
					<h2 className='sr-only'>Products</h2>
					<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{projects.map((project) => {
							const {
								id,
								info: {
									project_info: { name, genre, logo_image },
								},
								teamInfo,
							} = project;
							// console.log(project_info);
							return (
								<div key={id} className='group relative'>
									<button
										onClick={() => router.push(`/introduce/${name}`)}
										className='absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-50'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={2}
											stroke='currentColor'
											className='w-4 h-4'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
											/>
										</svg>
									</button>
									<Link href='/project/[intro]' as={`/project/${name}`}>
										<div className=' aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
											{logo_image ? (
												<img
													src={logo_image}
													alt={logo_image}
													className='w-full aspect-video object-cover object-center group-hover:opacity-75'
												/>
											) : (
												<p className=' font-extrabold  w-full aspect-video group-hover:opacity-75'>
													{name}
												</p>
											)}
										</div>
									</Link>

									<div className=' mt-4 flex justify-between items-center	'>
										<h3 className=' text-lg font-bold text-gray-700'>{name}</h3>
										<p className=' text-sm  text-gray-900'>{genre}</p>
									</div>
									<p>{teamInfo.intro.name}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectList;
