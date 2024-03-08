import { describe, expect, test } from 'vitest';
import validateEmail from '@/utils/validators/validateEmail';

describe('test the util function, validateEmail', () => {
	// Empty email
	test('returns false for empty email', () => {
		expect(validateEmail('')).toBe(false);
	});

	// Valid email format
	test('returns true for valid email format', () => {
		expect(validateEmail('test@example.com')).toBe(true);
		expect(validateEmail('user123@test.co')).toBe(true);
		expect(validateEmail('john.doe@test.org')).toBe(true);
	});

	// Invalid email format
	test('returns false for invalid email format', () => {
		expect(validateEmail('test@example')).toBe(false); // Missing top-level domain
		expect(validateEmail('test@example.')).toBe(false); // Missing top-level domain
		expect(validateEmail('test.example.com')).toBe(false); // Missing @ symbol
		expect(validateEmail('test.example@com')).toBe(false); // Missing top-level domain
		expect(validateEmail('@example.com')).toBe(false); // Missing local part
	});
});
