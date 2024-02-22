'use client';

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react';

export type TabContextType = {
	tabNumber: number;
	setTabNumber: Dispatch<SetStateAction<number>>;
};

export const TabContext = createContext<TabContextType | null>(null);

export default function TabContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [tabNumber, setTabNumber] = useState<number>(0);

	return (
		<TabContext.Provider value={{ tabNumber, setTabNumber }}>
			{children}
		</TabContext.Provider>
	);
}
