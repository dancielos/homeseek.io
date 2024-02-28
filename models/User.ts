import { Schema, model, Document, models } from 'mongoose';

export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	role: number;
}

const userSchema = new Schema<User>({
	id: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: Number, required: true },
});

const UserModel = models.user || model<User>('user', userSchema);

export default UserModel;
