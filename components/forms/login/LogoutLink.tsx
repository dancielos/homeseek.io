import LogoutButton from '@/components/client/admin/LogoutButton';
import { getSession } from '@/utils/server-actions/auth';

export default async function LogoutLink() {
	const session = await getSession();
	return <>{session ? <LogoutButton /> : ''}</>;
}
