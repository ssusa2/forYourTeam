/** @format */

import Link from 'next/link';
import { useRouter } from 'next/router';

function ProjectList({ projects }) {
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
								<div key={id} className='group'>
									<Link href='/project/[intro]' as={`/project/${name}`}>
										<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
											<img
												src={logo_image}
												alt={logo_image}
												className='h-full w-full object-cover object-center group-hover:opacity-75'
											/>
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
