'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '@/components/LoginButton';
import { Landingpage } from '@/components/component/landingpage';

export default function Home() {
	const { isAuthenticated } = useAuth0();
	return (
		<>
			<Landingpage />
		</>
	);
}
