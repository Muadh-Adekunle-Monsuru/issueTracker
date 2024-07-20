'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '@/components/LoginButton';

export default function Home() {
	const { isAuthenticated } = useAuth0();
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-10 '>
			<h1 className='text-7xl font-semibold'>
				Welcome to{' '}
				<span className='underline hover:italic transition-all hover:text-gray-500'>
					Issue Tracker
				</span>
			</h1>
			{isAuthenticated && (
				<Button asChild>
					<Link href={'/dashboard'} className='flex gap-3 items-center group'>
						Dashbord
						<ArrowRight className='size-5 group-hover:translate-x-4 transition duration-300 ease-in-out' />
					</Link>
				</Button>
			)}
			{!isAuthenticated && <LoginButton />}
		</main>
	);
}
