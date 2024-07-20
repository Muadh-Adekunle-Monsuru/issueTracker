import React, { PropsWithChildren } from 'react';

export default function ErrorMessage({ children }: PropsWithChildren) {
	if (!children) return null;
	return <p className='text-xs text-red-600 '>{children}</p>;
}
