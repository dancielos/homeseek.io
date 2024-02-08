import { Schema, model, models } from 'mongoose';

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
