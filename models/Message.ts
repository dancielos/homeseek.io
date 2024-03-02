import { Schema, Types, model, models } from 'mongoose';
import { Listing } from './Listing';

export type Message = {
	_id: string;
	name: string;
	phone: string;
	email: string;
	message: string;
	listingId: Types.ObjectId | Listing;
	address: string;
	date: Date;
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
		ref: 'Listing',
	},
	address: {
		type: String,
		required: true,
	},
	date: {
		type: Schema.Types.Date,
		default: Date.now,
		required: true,
	},
});

const MessageModel = models.message || model<Message>('message', messageSchema);

export default MessageModel;
