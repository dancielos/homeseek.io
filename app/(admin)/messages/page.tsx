import Box from '@mui/material/Box';
import DataGridMessages from '@/pages/Messages/DataGrid';
import { MessagesRow } from '@/data/types';
import getMessages from '@/utils/server-actions/getMessages';
import InfoBox from '@/components/htmlElements/InfoBox';

export const revalidate = 0;

export default async function Messages() {
	const messages = (await getMessages()) as MessagesRow[];

	return (
		<>
			<Box sx={{ overflow: 'auto', minHeight: '80vh' }}>
				{messages.length > 0 ? (
					<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
						<DataGridMessages rows={messages} />
					</Box>
				) : (
					<InfoBox message='You have no new messages.' />
				)}
			</Box>
		</>
	);
}
