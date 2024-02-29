import Box from '@mui/material/Box';
import DataGridMessages from '@/components/client/admin/DataGridMessages';
import { MessagesRow } from '@/data/types';
import getMessages from '@/utils/server-actions/getMessages';

const rows: MessagesRow[] = [
	{
		id: '1',
		date: new Date(Date.now()).toString(),
		name: 'John Doe',
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		// actions: '',
		phoneNumber: '+1234567890',
		emailAddress: 'john.doe@example.com',
	},
];

export default async function Messages() {
	const messages = (await getMessages()) as MessagesRow[];
	console.log(messages);
	const messages2 = messages.map((m) => ({
		...m,
		actions: 'test',
	}));
	console.log(messages2);
	return (
		<>
			<Box sx={{ overflow: 'auto' }}>
				<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
					<DataGridMessages rows={messages} />
				</Box>
			</Box>
		</>
	);
}
