import { describe, expect, test } from 'vitest';
import validatePropertyType from '../validatePropertyType';

describe('validatePropertyType', () => {
	test('valid property types', () => {
		expect(validatePropertyType('HOUSE')).toBe(true);
		expect(validatePropertyType('CONDO_APARTMENT')).toBe(true);
		expect(validatePropertyType('ROW_TOWNHOUSE')).toBe(true);
		expect(validatePropertyType('DUPLEX_TRIPLEX')).toBe(true);
		expect(validatePropertyType('MOBILE')).toBe(true);
		expect(validatePropertyType('MULTIFAMILY')).toBe(true);
	});

	test('invalid property type', () => {
		expect(validatePropertyType('House')).toBe(false);
		expect(validatePropertyType('condo/apartment')).toBe(false);
		expect(validatePropertyType('Row/Townhouse')).toBe(false);
		expect(validatePropertyType('Duplex/Triplex')).toBe(false);
		expect(validatePropertyType('Mobile')).toBe(false);
		expect(validatePropertyType('Multi-family')).toBe(false);
		expect(validatePropertyType('Office')).toBe(false);
		expect(validatePropertyType('123')).toBe(false);
		expect(validatePropertyType('')).toBe(false);
	});
});
