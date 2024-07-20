import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import prisma from '@/prisma/client';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
export default async function IssuesPage() {
	const issues = await prisma.issue.findMany();
	return (
		<div className='lg:mx-20 flex flex-col gap-5'>
			<h1>Issues Page</h1>
			<Button asChild className='max-w-32'>
				<Link href={'/issues/new'} className='flex items-center gap-3'>
					<span>New Issue</span>
					<span>
						<PlusCircle className='size-4' />
					</span>
				</Link>
			</Button>
			<Table className='border rounded-lg '>
				<TableHeader>
					<TableRow className='bg-gray-100 '>
						<TableHead className='w-[200px]'>Issue</TableHead>
						<TableHead className='hidden md:table-cell '>Description</TableHead>
						<TableHead className='w-[150px] hidden md:table-cell'>
							Status
						</TableHead>
						<TableHead className='hidden md:table-cell'>Created</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{issues.reverse().map((issue) => (
						<TableRow key={issue.id}>
							<TableCell className='font-medium'>
								<Link
									href={`/issues/${issue.id}`}
									className='hover:text-gray-500 transition duration-300 w-full text-lg md:text-sm'
								>
									{issue.title}
									<div
										className={cn(
											'block md:hidden lowercase rounded-md font-medium max-w-24 text-center py-1 text-sm',
											issue.status == 'OPEN' && 'text-green-700 bg-green-100 ',
											issue.status == 'CLOSED' && 'text-gray-700 bg-gray-100',
											issue.status == 'IN_PROGRESS' &&
												'text-yellow-700 bg-yellow-100'
										)}
									>
										{issue.status}
									</div>
								</Link>
							</TableCell>
							<TableCell className='hidden md:table-cell'>
								<p className='truncate w-[300px]'>{issue.description}</p>
							</TableCell>
							<TableCell className='lowercase hidden md:table-cell'>
								<p
									className={cn(
										'rounded-md font-medium text-center',
										issue.status == 'OPEN' && 'text-green-700 bg-green-100 ',
										issue.status == 'CLOSED' && 'text-gray-700 bg-gray-100',
										issue.status == 'IN_PROGRESS' &&
											'text-yellow-700 bg-yellow-100'
									)}
								>
									{issue.status}
								</p>
							</TableCell>
							<TableCell className='hidden md:table-cell'>
								{issue.createdAt.toDateString()}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export const dynamic = 'force-dynamic';
