import NavBar from './_components/NavBar';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className=''>
			<NavBar />
			{children}
		</main>
	);
}
