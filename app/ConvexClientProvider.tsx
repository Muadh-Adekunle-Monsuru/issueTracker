'use client';

import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ReactNode } from 'react';
import { ConvexProviderWithAuth0 } from 'convex/react-auth0';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const convex = new ConvexReactClient('https://clever-buffalo-669.convex.cloud');

export function ConvexClientProvider({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { isAuthenticated, isLoading } = useAuth0();
	if (!isAuthenticated && !isLoading) {
		router.replace('http://localhost:3000/');
		toast.error('Please log in!');
	}
	return (
		<Auth0Provider
			domain='dev-qo7fji7x5tan0hse.us.auth0.com'
			clientId='o9daqrZOTWzLqXIAp4GlYmAKYTGGvgYE'
			authorizationParams={{
				redirect_uri: 'http://localhost:3000/',
			}}
			useRefreshTokens={true}
			cacheLocation='localstorage'
		>
			<ConvexProviderWithAuth0 client={convex}>
				{children}
			</ConvexProviderWithAuth0>
		</Auth0Provider>
	);
}
