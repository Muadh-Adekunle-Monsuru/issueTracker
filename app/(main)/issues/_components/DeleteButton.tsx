'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Spinner from '../../_components/Spinner';
import { useState } from 'react';

export function DeleteButton({ issueId }: { issueId: string }) {
	const router = useRouter();
	const [deleting, setDeleting] = useState(false);
	const handleDelete = async () => {
		setDeleting(true);
		await axios
			.delete(`/api/issues/${issueId}`)
			.then((res) => {
				console.log(res);
				setDeleting(false);
				toast.success('Issue deleted');
				router.push('/issues');
				router.refresh();
			})
			.catch((e) => {
				console.log(e);
				setDeleting(false);
			});
	};
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive' className='lg:max-w-32 '>
					Delete
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete the issue
						and remove it from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={() => handleDelete()} disabled={deleting}>
						Confirm
						{deleting && <Spinner />}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
