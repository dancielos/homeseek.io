'use server';

import { Schema, model, connect, models } from 'mongoose';

export default async function connectDB() {
	try {
		await connect(process.env.DB_URL);
		console.log('Successfully established database connection.');
		return true;
	} catch (err) {
		console.error('Database connection failed.' + err);
		return false;
	}
}

// 1. Create an interface representing a document in MongoDB.
interface IUser {
	name: string;
	email: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
	name: { type: String, required: true },
	email: { type: String, required: true },
});

// 3. Create a Model.
const User = models.User || model<IUser>('User', userSchema);

export async function testDB() {
	try {
		await connectDB();
		const user = new User({
			name: 'Dan',
			email: 'iam@dancielos.com',
		});
		await user.save();
	} catch (err) {
		console.error('Something went wrong. ' + err);
	}
}
