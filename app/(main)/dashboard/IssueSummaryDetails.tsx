import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export default function IssueSummaryDetails({
	open,
	closed,
	inProgress,
}: {
	open: number;
	closed: number;
	inProgress: number;
}) {
	const summary = [
		{ label: 'Open Issues', param: 'OPEN', value: open },
		{ label: 'In-progress Issues', param: 'IN_PROGRESS', value: inProgress },
		{ label: 'Closed Issues', param: 'CLOSED', value: closed },
	];
	return (
		<div>
			<div className='flex gap-7'>
				{summary.map((issue) => (
					<Link
						href={`/issues?search=${issue.param}`}
						className='border md:px-7 px-3 md:py-4 grid gap-1.5 rounded-lg'
						key={issue.label}
					>
						<h2 className='font-medium text-muted-foreground'>{issue.label}</h2>
						<p className='font-semibold text-lg'>{issue.value}</p>
					</Link>
				))}
				<h2></h2>
			</div>
		</div>
	);
}
