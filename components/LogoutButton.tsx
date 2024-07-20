import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from './ui/button';

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<Button
			variant={'destructive'}
			onClick={() =>
				logout({ logoutParams: { returnTo: 'http://localhost:3000/' } })
			}
		>
			Log Out
		</Button>
	);
};

export default LogoutButton;
