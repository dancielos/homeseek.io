'use server';

import { revalidatePath } from 'next/cache';
import connectDB from '../db';
import MessageModel from '@/models/Message';

type DeleteMessagePrompt =
	| { error: string }
	| { success: string }
	| null
	| undefined;

export default async function deleteMessage(
	prevState: DeleteMessagePrompt,
	formData: FormData
): Promise<DeleteMessagePrompt> {
	// console.log(messageId);
	// console.log('invoking deleteMessage server action');
	try {
		await connectDB();

		// Find the message by its ID and delete it
		// throw Error('test');
		const deletedMessage = await MessageModel.findByIdAndDelete(
			formData.get('id')
		);
		// const deletedMessage = '';

		if (!deletedMessage) {
			// Handle case where message with the given ID is not found
			console.error('Error: Message not found');
			return { error: 'Error: Message not found' };
		}

		// Return the deleted message
		revalidatePath('/(admin)/messages', 'page');
		return { success: 'Success: Message deleted' };
	} catch (error) {
		// Handle error
		console.error('Error deleting message:', error);
		return { error: 'Something went wrong. Please try again later.' };
	}
}
