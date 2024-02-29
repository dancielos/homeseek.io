'use server';

import UserModel from '@/models/User';
import connectDB from '../db';
import bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const key = new TextEncoder().encode(process.env.HOMESEEK_SECRET);

export async function encrypt(payload: any) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('1h')
		.sign(key);
}

export async function decrypt(input: string): Promise<any> {
	const { payload } = await jwtVerify(input, key, {
		algorithms: ['HS256'],
	});
	return payload;
}

async function validateCredentials(email: string, password: string) {
	await connectDB();

	const userData = await UserModel.findOne({
		email,
	}).exec();

	let isValid = false;

	if (userData) {
		const match = await bcrypt.compare(password, userData.password);
		if (match) isValid = true;
	}

	if (isValid)
		return {
			id: userData._id.toString(),
			role: userData.role,
			email: userData.email,
			name: userData.name,
		};
	return null;
}

export async function login(
	prevState: { error: string } | null | undefined,
	formData: FormData
) {
	// await new Promise<void>((resolve) => {
	// 	setTimeout(() => {
	// 		console.log('3 seconds passed');
	// 		resolve();
	// 	}, 3000);
	// });

	const credentials = {
		email: (formData.get('email') as string).trim(),
		password: formData.get('password') as string,
	};

	const user = await validateCredentials(
		credentials.email,
		credentials.password
	);

	if (!user) return { error: 'Failed to login. Please try again.' };

	const expires = new Date(Date.now() + 60 * 60 * 1000);
	const session = await encrypt({ user, expires });

	cookies().set('session', session, { expires, httpOnly: true });

	redirect('/dashboard');
}

export async function logout() {
	// Destroy the session

	cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
	const session = cookies().get('session')?.value;
	if (!session) return null;
	return await decrypt(session);
}
