import React from 'react';
import Spinner from '../../_components/Spinner';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function loading() {
	return (
		<div className='lg:px-20 px-4 max-w-xl'>
			<Skeleton height={'2rem'} />
			<Skeleton height={'20rem'} />
		</div>
	);
}
