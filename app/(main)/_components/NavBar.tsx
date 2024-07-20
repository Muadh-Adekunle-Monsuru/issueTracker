'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import LoginButton from '@/components/LoginButton';
import LogoutButton from '@/components/LogoutButton';
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react';
import { useAuth0 } from '@auth0/auth0-react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import UserButton from '@/components/UserButton';

const links = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Issues', href: '/issues' },
];

export default function NavBar() {
	const pathname = usePathname();
	const { user, isAuthenticated } = useAuth0();

	return (
		<nav className='flex py-3 px-5 lg:px-20 border-b border-gray-400 items-center justify-between'>
			<div className='flex  items-center gap-10'>
				<div className='size-5'>
					<Link href={'/'}>
						<Image
							src={'/bug.svg'}
							alt='logo'
							width={'10'}
							height={'10'}
							className=' size-5 object-contain'
						/>
					</Link>
				</div>
				<div className='flex gap-4 font-regular text-lg'>
					{links.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								'text-muted-foreground hover:text-gray-800 transition',
								pathname == item.href && 'text-black'
							)}
						>
							{item.label}
						</Link>
					))}
				</div>
			</div>
			<div>
				{isAuthenticated && (
					<>
						<UserButton />
					</>
				)}
				{!isAuthenticated && (
					<>
						<LoginButton />
					</>
				)}
			</div>
		</nav>
	);
}
