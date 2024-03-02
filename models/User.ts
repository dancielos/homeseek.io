import { Schema, Types, model, models } from 'mongoose';

export interface User {
	name: string;
	email: string;
	password: string;
	role: number;
}

const userSchema = new Schema<User>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: Number, required: true },
});

const UserModel = models.user || model<User>('user', userSchema);

export default UserModel;
