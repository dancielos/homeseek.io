import Box from '@mui/material/Box';
import DataGridMessages from '@/pages/Messages/DataGridMessages';
import { MessagesRow } from '@/data/types';
import getMessages from '@/utils/server-actions/getMessages';

export const revalidate = 0;

export default async function Messages() {
	const messages = (await getMessages()) as MessagesRow[];

	return (
		<>
			<Box sx={{ overflow: 'auto', minHeight: '80vh' }}>
				<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
					<DataGridMessages rows={messages} />
				</Box>
			</Box>
		</>
	);
}
