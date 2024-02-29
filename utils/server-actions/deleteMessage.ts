'use server';

import { revalidatePath } from 'next/cache';
import connectDB from '../db';
import MessageModel from '@/models/Message';

export default async function deleteMessage(
	id: string
): Promise<{ success: string } | { error: string }> {
	try {
		await connectDB();

		// Find the message by its ID and delete it
		// throw Error('test');
		const deletedMessage = await MessageModel.findByIdAndDelete(id);

		if (!deletedMessage) {
			// Handle case where message with the given ID is not found
			console.error('Message not found');
			return { error: 'Message not found' };
		}

		// Return the deleted message
		revalidatePath('/(admin)/messages', 'page');
		return { success: 'Message deleted' };
	} catch (error) {
		// Handle error
		console.error('Error deleting message:', error);
		return { error: 'Something went wrong. Please try again later.' };
	}
}
