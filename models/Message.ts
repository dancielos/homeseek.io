import { Schema, Types, model, models } from 'mongoose';

export type Message = {
	name: string;
	phone: string;
	email: string;
	message: string;
	listingId: Types.ObjectId;
	address: string;
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
	listingId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
});

const MessageModel = models.message || model<Message>('message', messageSchema);

export default MessageModel;
