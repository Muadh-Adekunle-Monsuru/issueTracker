import prisma from '@/prisma/client';
import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function IssuesSumary() {
	const issues = await prisma.issue.findMany({
		orderBy: { createdAt: 'desc' },
		take: 5,
	});
	return (
		<Card className='min-w-[20rem] shadow-sm border'>
			<CardHeader>
				<CardTitle>Latest Issues</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid divide-y-2'>
					{issues.map((issue) => (
						<Link
							className='py-3 hover:bg-gray-100'
							href={`/issues/${issue.id}`}
							key={issue.id}
						>
							<p>{issue.title}</p>
							<p
								className={cn(
									'lowercase rounded-md font-medium  max-w-20 text-center text-sm',
									issue.status == 'OPEN' && 'text-green-700 bg-green-100 ',
									issue.status == 'CLOSED' && 'text-gray-700 bg-gray-100',
									issue.status == 'IN_PROGRESS' &&
										'text-yellow-700 bg-yellow-100'
								)}
							>
								{issue.status}
							</p>
						</Link>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
