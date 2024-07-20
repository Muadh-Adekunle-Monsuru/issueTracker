import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function Loading() {
	const issues = [1, 2, 4, 5, 6];
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
			<Table className='border  '>
				<TableHeader>
					<TableRow className='bg-gray-100'>
						<TableHead className=''>Issue</TableHead>
						<TableHead className='hidden md:table-cell w-[300px]'>
							Description
						</TableHead>
						<TableHead className='w-[100px] hidden md:table-cell'>
							Status
						</TableHead>
						<TableHead className='hidden md:table-cell'>Created</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{issues.reverse().map((issue) => (
						<TableRow key={issue}>
							<TableCell className='font-medium truncate line-clamp-1'>
								<Skeleton />
								<div className='block md:hidden lowercase rounded-md font-medium'>
									<Skeleton />
								</div>
							</TableCell>
							<TableCell className=''>
								<p className='truncate w-[300px]'>
									<Skeleton />
								</p>
							</TableCell>
							<TableCell className='lowercase hidden md:table-cell'>
								<Skeleton />
							</TableCell>
							<TableCell className='hidden md:table-cell'>
								<Skeleton />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
