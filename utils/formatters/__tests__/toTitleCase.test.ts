import { describe, expect, test, vi } from 'vitest';
import toTitleCase from '@/utils/formatters/toTitleCase';

describe('test the util function, toTitleCase', () => {
	// passing all lowercase
	test('converts all lowercase string to title case', () => {
		expect(toTitleCase('hello world')).toBe('Hello World');
	});

	// passing all uppercase
	test('converts all uppercase string to title case', () => {
		expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
	});

	// passing empty string
	test('returns empty string if input is empty', () => {
		expect(toTitleCase('')).toBe('');
	});

	// passing numbers
	test('returns input string if it contains numbers', () => {
		expect(toTitleCase('12345')).toBe('12345');
	});

	// passing random upper and lowercase characters
	test('converts random upper and lowercase characters to title case', () => {
		expect(toTitleCase('rAndOm teXT')).toBe('Random Text');
	});
});
