'use server';

import MessageModel from '@/models/Message';
import connectDB from '../db';
import validateEmail from '../validateEmail';
import validatePhoneNumber from '../validatePhoneNumber';

type InputType = {
	error: string[];
	name: string;
	email: string;
	phone: string;
	message: string;
};

function validateInput(formData: FormData): InputType {
	const data: InputType = {
		error: [],
		name: '',
		email: '',
		phone: '',
		message: '',
	};
	const name = formData.get('name');
	if (!name) data.error.push('name');

	data.name = name as string;

	const email = formData.get('email');
	if (!email || !validateEmail(email as string)) data.error.push('email');

	data.email = email as string;

	const phone = formData.get('phone');
	if (!phone || !validatePhoneNumber(phone as string)) data.error.push('phone');

	data.phone = phone as string;

	const message = formData.get('message');
	if (!message) data.error.push('message');

	data.message = message as string;

	return data;
}

type MessagePrompt =
	| { error: string[] }
	| { success: string }
	| null
	| undefined;

export default async function postMessage(
	prevState: MessagePrompt,
	formData: FormData
): Promise<MessagePrompt> {
	const { error, name, email, phone, message } = validateInput(formData);
	if (error.length > 0) {
		return { error };
	}

	// Not necessary, just for the cool loading effect...
	await new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});

	try {
		await connectDB();

		await MessageModel.create({
			name,
			email,
			phone,
			message,
		});

		return { success: "Message successfully sent. We'll contact you soon." };
	} catch (error) {
		console.log('Error sending message: ', error);
	}
}
