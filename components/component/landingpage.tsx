'use client';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import LoginButton from '../LoginButton';

export function Landingpage() {
	const { isAuthenticated } = useAuth0();
	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<header className='px-4 lg:px-6 h-14 flex items-center lg:mt-5'>
				<Link
					href='#'
					className='flex items-center justify-center '
					prefetch={false}
				>
					<Image
						src={'/bug.svg'}
						alt='logo'
						width={'15'}
						height={'15'}
						className=' size-14 object-contain'
					/>
					<span className='sr-only'>Issue Tracker</span>
				</Link>
			</header>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-24 xl:py-24'>
					<div className='container px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										Streamline Your Issue Tracking with Our SaaS
									</h1>
									<p className='max-w-[600px] text-muted-foreground md:text-xl'>
										Our powerful SaaS platform helps you efficiently manage and
										resolve issues in your system. Powered by the latest
										technologies, including Next.js, MongoDB, Prisma, Auth0,
										Sentry, and shadcn-ui.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									{isAuthenticated && (
										<Button asChild>
											<Link
												href={'/dashboard'}
												className='flex gap-3 items-center group'
											>
												Dashbord
												<ArrowRight className='size-5 group-hover:translate-x-4 transition duration-300 ease-in-out' />
											</Link>
										</Button>
									)}
									{!isAuthenticated && <LoginButton />}
								</div>
							</div>
							<img
								src='/error.png'
								width='500'
								height='310'
								alt='Hero'
								className='hidden md:block mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last'
							/>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
									Key Features
								</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Streamline Your Workflow
								</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our SaaS platform offers a comprehensive set of features to
									help you efficiently manage and resolve issues in your system.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4'>
								<ul className='grid gap-6'>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>
												Intuitive Issue Tracking
											</h3>
											<p className='text-muted-foreground'>
												Easily log, manage, and track issues with our
												user-friendly interface.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>
												Collaborative Workflow
											</h3>
											<p className='text-muted-foreground'>
												Streamline your teams collaboration with built-in
												features like comments, notifications, and assignments.
											</p>
										</div>
									</li>
									<li>
										<div className='grid gap-1'>
											<h3 className='text-xl font-bold'>
												Powerful Integrations
											</h3>
											<p className='text-muted-foreground'>
												Seamlessly integrate our SaaS with your existing tools
												and services, including Sentry for error tracking.
											</p>
										</div>
									</li>
								</ul>
							</div>
							<img
								src='/streamline.png'
								width='550'
								height='310'
								alt='Image'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last'
							/>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 border-t'>
					<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
						<div className='space-y-3'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
								Powered by the Latest Technologies
							</h2>
							<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Our SaaS platform is built using the most advanced technologies,
								ensuring a robust, scalable, and secure solution.
							</p>
						</div>
						<div className='divide-y rounded-lg border'>
							<div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-6'>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg'
										width='140'
										height='70'
										alt='Next.js'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyRmieFYEx56pJ4SVB4N1QWY0-NNBNs1WKw&s'
										width='140'
										height='70'
										alt='MongoDB'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXricGuUabn2TtEPPBuaHu4AOPNvqgHRUfA&s'
										width='140'
										height='70'
										alt='Prisma'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_de_Auth0.svg'
										width='140'
										height='70'
										alt='Auth0'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtnUpRmydy5VHr6PKIcPwG-xt-I580FAoQQ&s'
										width='140'
										height='70'
										alt='Sentry'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviiHgE_zAVZ6ivucXW-GiW62gw6Z3HjVMSw&s'
										width='140'
										height='70'
										alt='shadcn-ui'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
							</div>
							<div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-6'>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
										width='140'
										height='70'
										alt='TypeScript'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png'
										width='140'
										height='70'
										alt='Tailwind CSS'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
								<div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-cSr3s_B-fQrAuCXvyNfVZTirOOsgtuXIw&s'
										width='140'
										height='70'
										alt='Tailwind CSS'
										className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-muted-foreground'>
					&copy; 2024 Issue Tracker. All rights reserved.
				</p>
				<Button variant={'ghost'}>
					<Link href={'https://github.com/Muadh-Adekunle-Monsuru/issueTracker'}>
						View Github
					</Link>
				</Button>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<p className='text-xs hover:underline underline-offset-4'>
						Terms of Service
					</p>
					<p className='text-xs hover:underline underline-offset-4'>Privacy</p>
				</nav>
			</footer>
		</div>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m8 3 4 8 5-5 5 15H2L8 3z' />
		</svg>
	);
}

function XIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</svg>
	);
}
