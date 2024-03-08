import { MessagesRow } from '@/data/types';
import connectDB from '../db';
import MessageModel, { Message } from '@/models/Message';
import formatDate from '../formatters/formatDate';

export default async function getMessages(): Promise<MessagesRow[]> {
	try {
		await connectDB();

		const messages: Message[] = await MessageModel.find().exec();
		const formattedMessages: MessagesRow[] = messages.map((m) => ({
			id: m._id.toString(),
			date: formatDate(m.date),
			name: m.name,
			listingId: m.listingId.toString(),
			listing: m.address,
			message: m.message,
			phoneNumber: m.phone,
			emailAddress: m.email,
		}));
		return formattedMessages;
	} catch (error) {
		console.error('Something went wrong when retrieving messages', error);
		return [] as MessagesRow[];
	}
}
