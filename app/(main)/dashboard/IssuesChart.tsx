'use client';

import { TrendingUp } from 'lucide-react';
import { LabelList, Pie, PieChart } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
	open: {
		label: 'Open',
		color: '#22c55e',
	},
	closed: {
		label: 'Closed',
		color: '#6b7280',
	},
	inProgress: {
		label: 'In-Progress',
		color: '#facc15',
	},
} satisfies ChartConfig;

export function IssuesChart({
	open,
	closed,
	inProgress,
}: {
	open: number;
	closed: number;
	inProgress: number;
}) {
	const data = [
		{ label: 'Open', value: open, fill: 'var(--color-open)' },
		{ label: 'Closed', value: closed, fill: 'var(--color-closed)' },
		{
			label: 'In-progress',
			value: inProgress,
			fill: 'var(--color-inProgress)',
		},
	];
	return (
		<Card className='flex flex-col max-w-xl'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Issues</CardTitle>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
				>
					<PieChart>
						<ChartTooltip
							content={<ChartTooltipContent nameKey='label' hideLabel />}
						/>
						<Pie data={data} dataKey='value' label nameKey='label'>
							<LabelList
								dataKey='label'
								className='fill-background'
								stroke='none'
								fontSize={12}
								formatter={(value: keyof typeof chartConfig) =>
									chartConfig[value]?.label
								}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
