import { Button } from '@/components/ui/button';
import prisma from '@/prisma/client';
import { Status } from '@prisma/client';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import FilterIssues from './_components/FilterIssues';
import IssuesTable from './_components/IssuesTable';
import Pagination from './Pagination';

export default async function IssuesPage({
	searchParams,
}: {
	searchParams: { search: Status; orderBy: string; asc: string; page: string };
}) {
	const statuses = Object.values(Status);

	const page = parseInt(searchParams.page) || 1;
	const pageSize = 5;

	const status = statuses.includes(searchParams.search)
		? searchParams.search
		: undefined;
	const orderBy = searchParams.orderBy
		? { [searchParams.orderBy]: searchParams.asc == 'true' ? 'asc' : 'desc' }
		: undefined;

	const issues = await prisma.issue.findMany({
		where: { status },
		orderBy,
		skip: (page - 1) * pageSize,
		take: pageSize,
	});

	const issueCount = await prisma.issue.count({
		where: { status },
	});
	return (
		<div className='lg:mx-20 flex flex-col gap-5 px-5'>
			<h1 className='text-xl py-5'>Issues List</h1>
			<div className='flex justify-between'>
				<FilterIssues />
				<Button asChild className='max-w-32'>
					<Link href={'/issues/new'} className='flex items-center gap-3'>
						<span>New Issue</span>
						<span>
							<PlusCircle className='size-4' />
						</span>
					</Link>
				</Button>
			</div>
			<IssuesTable issues={issues} searchParams={searchParams} />
			<Pagination
				itemCount={issueCount}
				pageSize={pageSize}
				currentPage={page}
			/>
		</div>
	);
}
