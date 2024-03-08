import { PROPERTY_TYPE } from '@/data/types';

export default function validatePropertyType(input: string): boolean {
	return input in PROPERTY_TYPE;
}
