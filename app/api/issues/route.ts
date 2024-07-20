import { v4 as uuidv4 } from 'uuid';
import { NextResponse, NextRequest } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';
import { bodyValidation } from '@/components/validation/issuevalidation';

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = bodyValidation.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.format() },
			{ status: 400 }
		);

	const data = await prisma.issue.create({
		data: {
			id: uuidv4(),
			title: body.title,
			description: body.description,
		},
	});

	if (!data)
		return NextResponse.json(
			{ error: 'Unable to create issue' },
			{ status: 403 }
		);

	return NextResponse.json({ data }, { status: 201 });
}
