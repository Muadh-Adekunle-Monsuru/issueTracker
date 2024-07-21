import React from 'react';
import IssuesSumary from './IssuesSumary';
import IssueSummaryDetails from './IssueSummaryDetails';
import prisma from '@/prisma/client';
import { IssuesChart } from './IssuesChart';
import { Metadata } from 'next';

export default async function Dashboard() {
	const open = await prisma.issue.count({
		where: {
			status: 'OPEN',
		},
	});
	const closed = await prisma.issue.count({
		where: {
			status: 'CLOSED',
		},
	});
	const inProgress = await prisma.issue.count({
		where: {
			status: 'IN_PROGRESS',
		},
	});
	return (
		<div className='lg:mx-20 px-2'>
			<h1 className='text-xl py-5'>Staff Dashboard</h1>
			<div className='flex flex-col lg:flex-row justify-between gap-5'>
				<div className='flex-1 space-y-6'>
					<IssueSummaryDetails
						open={open}
						closed={closed}
						inProgress={inProgress}
					/>
					<IssuesChart open={open} closed={closed} inProgress={inProgress} />
				</div>
				<IssuesSumary />
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'View summary of project issues',
};
