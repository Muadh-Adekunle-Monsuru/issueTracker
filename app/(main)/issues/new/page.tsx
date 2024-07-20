import React from 'react';
import IssueForm from '../_components/IssueForm';

export default function page() {
	return (
		<div>
			<h1 className='font-semibold text-3xl lg:px-20 px-4 py-5'>
				Create new issue
			</h1>
			<IssueForm />
		</div>
	);
}
