import React from 'react';
import IssueForm from '../../_components/IssueForm';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Edit } from 'lucide-react';

export default async function page({ params }: { params: { id: string } }) {
	const issue = await prisma.issue.findUnique({
		where: { id: params.id },
	});

	if (!issue) notFound();
	return (
		<div>
			<h1 className='font-semibold text-3xl lg:px-20 px-4 py-5'>
				<Edit className='inline size-7 mr-3' />
				Edit issue
			</h1>
			<IssueForm issue={issue} />
		</div>
	);
}
