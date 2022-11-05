/** @format */
import Project from './ProjectItem';

function ProjectList({ projects }) {
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-8 sm:py-8  lg:max-w-7xl'>
					<h2 className='sr-only'>Products</h2>
					<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{projects.map((project) => {
							return <Project key={project.id} project={project} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectList;
