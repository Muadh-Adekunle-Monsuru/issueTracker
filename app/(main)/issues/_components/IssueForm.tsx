'use client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { bodyValidation } from '@/components/validation/issuevalidation';
import ErrorMessage from '../../_components/ErrorMessage';
import { useRouter } from 'next/navigation';
import Spinner from '../../_components/Spinner';
import { Issue } from '@prisma/client';

interface IssueForm {
	title: string;
	description: string;
	status?: string;
}
export default function IssueForm({ issue }: { issue?: Issue }) {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<IssueForm>({
		resolver: zodResolver(bodyValidation),
	});
	const [error, setError] = useState('');

	const handleSubmition = async (data: any) => {
		if (issue) {
			const response = await axios
				.patch(`/api/issues/${issue.id}`, data)
				.then((res) => {
					toast.success('Issue updated!');
					router.push(`/issues/${issue.id}`);
					router.refresh();
				})
				.catch((e) => console.log(e));
		} else {
			const promise = await axios
				.post('/api/issues', data)
				.then((res) => {
					toast('Issue created');
					router.push('/issues');
					router.refresh();
				})
				.catch((e) => {
					console.log('error creating issue', e);
					toast.error('Error creating issue');
					setError('Error creating issue, try again.');
				});
		}
	};

	return (
		<main className='lg:px-20 px-4 pb-10'>
			<form
				className='flex flex-col gap-5  max-w-xl'
				onSubmit={handleSubmit(handleSubmition)}
			>
				<p className='h-2 text-xs font-medium text-red-600'>{error}</p>
				<div className='grid gap-1.5'>
					<label>Issue</label>

					<ErrorMessage>{errors?.title?.message}</ErrorMessage>
					<Input
						placeholder='Issue'
						className='px-2 border'
						{...register('title')}
						defaultValue={issue?.title}
					/>
				</div>
				{issue && (
					<div className='grid gap-1.5'>
						<label>Status</label>

						<ErrorMessage>{errors?.status?.message}</ErrorMessage>
						<select
							defaultValue={issue?.status}
							className='max-w-32 border p-2  rounded-md'
							{...register('status')}
						>
							<option value={'OPEN'}>Open</option>
							<option value={'IN_PROGRESS'}>In Progress</option>
							<option value={'CLOSED'}>Closed</option>
						</select>
					</div>
				)}

				<div>
					<label>Description</label>

					<ErrorMessage>{errors?.description?.message}</ErrorMessage>
					<Controller
						name='description'
						control={control}
						defaultValue={issue?.description}
						render={({ field }) => (
							<SimpleMDE placeholder='Description' {...field} />
						)}
					/>
				</div>
				<Button type='submit' className='max-w-32' disabled={isSubmitting}>
					<span className='mr-2'>{issue ? 'Update' : 'Submit'}</span>
					{isSubmitting && <Spinner />}
				</Button>
			</form>
		</main>
	);
}
