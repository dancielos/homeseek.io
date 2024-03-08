import { describe, expect, test } from 'vitest';
import validatePostalCode from '../validatePostalCode';

describe('validatePostalCode', () => {
	test('valid Canadian postal codes', () => {
		expect(validatePostalCode('K1A 0B1')).toBe(true);
		expect(validatePostalCode('H2X 3Y7')).toBe(true);
		expect(validatePostalCode('M5G 2C9')).toBe(true);
		expect(validatePostalCode('V6B 2W6')).toBe(true);
	});

	test('valid Canadian postal codes without space', () => {
		expect(validatePostalCode('K1A0B1')).toBe(true);
		expect(validatePostalCode('H2X3Y7')).toBe(true);
		expect(validatePostalCode('M5G2C9')).toBe(true);
		expect(validatePostalCode('V6B2W6')).toBe(true);
	});

	test('invalid Canadian postal codes', () => {
		expect(validatePostalCode('123 456')).toBe(false); // Invalid format
		expect(validatePostalCode('A1A')).toBe(false); // Too short
		expect(validatePostalCode('A1A 1A1A')).toBe(false); // Too long
		expect(validatePostalCode('A1A-1A1')).toBe(false); // Invalid separator
		expect(validatePostalCode('12345')).toBe(false); // Invalid format
	});
});
