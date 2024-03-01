'use server';

import { revalidatePath } from 'next/cache';
import connectDB from '../db';
import MessageModel from '@/models/Message';

export default async function deleteMessage(
	messageId: string
): Promise<{ success: string } | { error: string }> {
	// console.log(messageId);
	// console.log('invoking deleteMessage server action');
	try {
		await connectDB();

		// Find the message by its ID and delete it
		// throw Error('test');
		const deletedMessage = await MessageModel.findByIdAndDelete(messageId);
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
