'use client';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';

export default function LoginButton() {
	const { loginWithRedirect } = useAuth0();
	return <Button onClick={() => loginWithRedirect()}>Log in</Button>;
}
