'use client';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export default function FilterIssues() {
	const router = useRouter();
	const issues = [
		{ label: 'All', value: '' },
		{ label: 'Open', value: 'OPEN' },
		{ label: 'In Progress', value: 'IN_PROGRESS' },
		{ label: 'Close', value: 'CLOSED' },
	];
	return (
		<select
			className='border rounded-md p-2'
			onChange={(e) => router.push(`/issues?search=${e.target.value}`)}
		>
			{issues.map((issue, index) => (
				<option key={index} value={issue.value}>
					{issue.label}
				</option>
			))}
		</select>
	);
}
