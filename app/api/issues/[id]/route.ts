import { NextRequest, NextResponse } from 'next/server';
import { bodyValidation } from '@/components/validation/issuevalidation';
import prisma from '@/prisma/client';

export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const body = await request.json();
	const validation = bodyValidation.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.format(), { status: 400 });

	const issue = await prisma.issue.findUnique({
		where: { id: params.id },
	});

	if (!issue) return NextResponse.json({ error: 'Not found' }, { status: 400 });

	const updated = await prisma.issue.update({
		where: { id: params.id },
		data: {
			status: body.status,
			title: body.title,
			description: body.description,
		},
	});
	return NextResponse.json(updated);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const issue = await prisma.issue.findUnique({
		where: { id: params.id },
	});
	if (!issue) return NextResponse.json('Not Found', { status: 404 });

	await prisma.issue.delete({
		where: { id: params.id },
	});

	return NextResponse.json('deleted');
}
