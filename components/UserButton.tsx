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
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

export default function UserButton() {
	const { user } = useAuth0();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<img
					src={user?.picture}
					alt={user?.name}
					className='size-7 rounded-full border'
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuLabel className='text-xs font-light'>
					{user?.email}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogoutButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
