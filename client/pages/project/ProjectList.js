/** @format */
import Link from 'next/link';
import { useRouter } from 'next/router';

const products = [
	{
		id: 1,
		name: 'My View',
		made: 'myteam',
		href: '#',
		genre: 'movie',
		logo: '',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		imageAlt:
			'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		name: 'Nomad Tumbler',
		made: 'myteam',
		href: '#',
		genre: 'movie',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		imageAlt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: 3,
		name: 'Focus Paper Refill',
		made: 'myteam',
		href: '#',
		genre: 'book',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		imageAlt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 4,
		name: 'Machined Mechanical Pencil',
		made: 'myteam',
		href: '#',
		genre: 'ebook',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	{
		id: 5,
		name: 'Machined Mechanical Pencil',
		made: 'myteam',
		href: '#',
		genre: 'solution',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	// More products...
];

function ProjectList() {
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-16 sm:py-24  lg:max-w-7xl'>
					<h2 className='sr-only'>Products</h2>
					<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{products.map((product) => (
							<div key={product.id} className='group'>
								<Link href='/project/[intro]' as={`/project/${product.id}`}>
									<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
										<img
											src={product.imageSrc}
											alt={product.imageAlt}
											className='h-full w-full object-cover object-center group-hover:opacity-75'
										/>
									</div>
								</Link>
								<div className=' mt-4 flex justify-between items-center	'>
									<h3 className=' text-lg font-bold text-gray-700'>
										{product.name}
									</h3>
									<p className=' text-sm  text-gray-900'>{product.genre}</p>
								</div>
								<p>{product.made}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectList;
