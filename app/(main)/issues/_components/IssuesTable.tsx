'use client';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Issue } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function IssuesTable({
	searchParams,
	issues,
}: {
	searchParams: any;
	issues: Issue[];
}) {
	const [sort, setSort] = useState({ column: '', direction: true });
	const router = useRouter();
	const columnHeaders = [
		{ label: 'Issues', value: 'title', className: 'w-[200px]' },
		{
			label: 'Description',
			value: 'description',
			className: 'hidden md:table-cell',
		},
		{
			label: 'Status',
			value: 'status',
			className: 'w-[150px] hidden md:table-cell',
		},
		{
			label: 'createdAt',
			value: 'createdAt',
			className: 'hidden md:table-cell',
		},
	];
	return (
		<Table className='border rounded-lg'>
			<TableHeader>
				<TableRow className='bg-gray-100 '>
					{columnHeaders.map((column, index) => (
						<TableHead
							className={column.className}
							key={index}
							onClick={() => {
								const obj = sort;
								obj.column = column.value;
								sort.column == column.value
									? (obj.direction = !obj.direction)
									: '';

								setSort(obj);
							}}
						>
							<Link
								href={{
									query: {
										...searchParams,
										orderBy: column.value,
										asc: sort.direction,
									},
								}}
							>
								{column.label}
								{column.value == searchParams.orderBy ? (
									sort.direction ? (
										<ChevronUp className='inline size-4 ml-2' />
									) : (
										<ChevronDown className='inline size-4 ml-2' />
									)
								) : (
									''
								)}
							</Link>
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{issues.reverse().map((issue) => (
					<TableRow
						key={issue.id}
						className=' cursor-pointer'
						onClick={() => router.push(`/issues/${issue.id}`)}
					>
						<TableCell className='font-medium hover:text-gray-500 transition duration-300 text-lg md:text-sm'>
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
	);
}
