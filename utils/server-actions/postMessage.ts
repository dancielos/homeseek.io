'use server';

import MessageModel from '@/models/Message';
import connectDB from '../db';

export default async function postMessage() {
	const DUMMY_MESSAGE = {
		name: 'Hello',
		phone: 123456,
		email: 'hello@world.com',
		message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum condimentum suscipit. Maecenas id fringilla nisi. Aliquam aliquam at nulla eu molestie. Duis sed libero id nisl bibendum bibendum non vitae tortor. Maecenas consequat, arcu a interdum mollis, ante massa consequat tellus, ac consectetur ex elit vitae nibh. Integer molestie vestibulum dui, at tristique diam tincidunt cursus. In ligula urna, viverra eget enim quis, convallis fringilla orci. Cras faucibus mollis mattis. Pellentesque ultricies nisi at pellentesque scelerisque.`,
	};

	try {
		await connectDB();

		const newMessage = await MessageModel.create(DUMMY_MESSAGE);

		console.log('Message sent successfully');
		return newMessage;
	} catch (error) {
		console.error('Error posting message: ', error);
		return;
	}
}
