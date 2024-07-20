import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import Spinner from '../../_components/Spinner';

export default function loading() {
	return (
		<div className='lg:px-20 max-w-xl'>
			<h1 className='text-3xl font-semibold pt-3'>
				<Skeleton />
			</h1>
			<div className='flex items-center gap-3 text-sm py-2'>
				<p>
					<Skeleton width={'5rem'} />
				</p>
				<p>
					<Skeleton width={'8rem'} />
				</p>
			</div>
			<p className='font-medium py-2'>Description:</p>
			<div className='border p-4 prose rounded-lg h-52'>
				<Skeleton width={'8rem'} />
				<Skeleton width={'18rem'} />
				<Skeleton width={'10rem'} />
				<Skeleton width={'10rem'} />
				<Skeleton width={'10rem'} />
				<Skeleton width={'8rem'} />
			</div>
		</div>
	);
}
