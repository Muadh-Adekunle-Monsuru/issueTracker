'use client';
import { Button } from '@/components/ui/button';
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react';
import React from 'react';
import page from './[id]/page';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
interface Props {
	itemCount: number;
	pageSize: number;
	currentPage: number;
}
export default function Pagination({
	itemCount,
	pageSize,
	currentPage,
}: Props) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pageCount = Math.ceil(itemCount / pageSize);

	const changePage = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', page.toString());
		router.push('?' + params.toString());
	};

	if (pageCount <= 1) return null;

	return (
		<div className='flex items-center gap-2 mx-auto pb-5'>
			<Button
				variant={'ghost'}
				className='border'
				disabled={currentPage == 1}
				onClick={() => changePage(1)}
			>
				<ChevronsLeft className='w-4' />
			</Button>
			<Button
				variant={'ghost'}
				className='border'
				disabled={currentPage == 1}
				onClick={() => changePage(currentPage - 1)}
			>
				<ChevronLeft className='w-4' />
			</Button>
			<p className='text-xs'>
				Page {currentPage} of {pageCount}
			</p>
			<Button
				variant={'ghost'}
				className='border'
				disabled={currentPage == pageCount}
				onClick={() => changePage(currentPage + 1)}
			>
				<ChevronRight className='w-4' />
			</Button>
			<Button
				variant={'ghost'}
				className='border'
				disabled={currentPage == pageCount}
				onClick={() => changePage(pageCount)}
			>
				<ChevronsRight className='w-4' />
			</Button>
		</div>
	);
}
