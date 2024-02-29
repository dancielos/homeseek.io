import { Schema, Types, model, models } from 'mongoose';

export type Message = {
	name: string;
	phone: string;
	email: string;
	message: string;
};

const messageSchema = new Schema<Message>({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

const MessageModel = models.message || model<Message>('message', messageSchema);

export default MessageModel;
