import { describe, expect, test } from 'vitest';
import validatePhoneNumber from '@/utils/validators/validatePhoneNumber';

describe('test the util function, validatePhoneNumber', () => {
	// Empty phone number
	test('returns false for empty phone number', () => {
		expect(validatePhoneNumber('')).toBe(false);
	});

	// Valid phone number format
	test('returns true for valid phone number format', () => {
		expect(validatePhoneNumber('1234567890')).toBe(true);
		expect(validatePhoneNumber('2345678902')).toBe(true);
		expect(validatePhoneNumber('+13724908769')).toBe(true);
		expect(validatePhoneNumber('+1 (372) 490-8769')).toBe(true);
		expect(validatePhoneNumber('+1(372)490-8769')).toBe(true);
		expect(validatePhoneNumber('+1 372 490 8769')).toBe(true);
		expect(validatePhoneNumber('+1372-490-8769')).toBe(true);
		expect(validatePhoneNumber('9876543210')).toBe(true);
	});

	// Invalid phone number format
	test('returns false for invalid phone number format', () => {
		expect(validatePhoneNumber('12345678901')).toBe(false); // Too long
		expect(validatePhoneNumber('123456')).toBe(false); // Too short
		expect(validatePhoneNumber('98765432101')).toBe(false); // Too long
		expect(validatePhoneNumber('abcd')).toBe(false); // Non-numeric value
	});
});
