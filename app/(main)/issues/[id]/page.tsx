import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import prisma from '@/prisma/client';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { DeleteButton } from '../_components/DeleteButton';
import { Metadata } from 'next';
import { Issue } from '@prisma/client';
import { cache } from 'react';

const fetchUser = cache((issueId: string) =>
	prisma.issue.findUnique({
		where: {
			id: issueId,
		},
	})
);

export default async function page({ params }: { params: { id: string } }) {
	const issue = await fetchUser(params.id);
	if (!issue) notFound();
	return (
		<div className='lg:px-20 px-4 py-4 flex flex-col md:flex-row gap-y-9'>
			<div className='flex-1'>
				<h1 className='text-3xl font-semibold pt-3'>{issue?.title}</h1>
				<div className='flex items-center gap-3 text-sm py-2'>
					<p
						className={cn(
							' rounded-md font-medium text-center p-1',
							issue?.status == 'OPEN' && 'text-green-700 bg-green-100 ',
							issue?.status == 'CLOSED' && 'text-gray-700 bg-gray-100',
							issue?.status == 'IN_PROGRESS' && 'text-yellow-700 bg-yellow-100'
						)}
					>
						{issue?.status}
					</p>
					<p>{issue?.createdAt.toDateString()}</p>
				</div>
				<p className='font-medium py-2'>Description:</p>
				<ReactMarkdown className='border p-4 prose rounded-lg'>
					{issue?.description}
				</ReactMarkdown>
			</div>
			<div className='lg:w-1/4 flex flex-col gap-y-5'>
				<Button className='lg:max-w-32 mt-5' asChild>
					<Link href={`/issues/${params.id}/edit`}>
						<Edit className='size-4 mr-2' />
						Edit Issue
					</Link>
				</Button>
				<DeleteButton issueId={issue.id} />
			</div>
		</div>
	);
}

export async function generateMetadata({ params }: { params: { id: string } }) {
	const issue = await fetchUser(params.id);
	return {
		title: issue?.title,
	};
}
