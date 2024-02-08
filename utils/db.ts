import { connect } from 'mongoose';

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

// export async function testDB() {
// 	try {
// 		await connectDB();
// 		const user = new User({
// 			name: 'Dan',
// 			email: 'iam@dancielos.com',
// 		});
// 		await user.save();
// 	} catch (err) {
// 		console.error('Something went wrong. ' + err);
// 	}
// }
