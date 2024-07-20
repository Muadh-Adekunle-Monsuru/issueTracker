import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { ConvexReactClient } from 'convex/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConvexClientProvider } from './ConvexClientProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Issue Tracker',
	description: 'An issue tracker',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					inter.variable
				)}
			>
				<ConvexClientProvider>{children}</ConvexClientProvider>
				<Toaster position='top-right' />
			</body>
		</html>
	);
}
