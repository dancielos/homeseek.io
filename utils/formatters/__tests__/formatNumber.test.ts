import { describe, expect, test } from 'vitest';
import formatNumber from '@/utils/formatters/formatNumber';

describe('test the util function, formatNumber', () => {
	// Test with a number less than 1000
	test('formats a number less than 1000 to the expected format', () => {
		expect(formatNumber(1000)).toBe('1,000');
	});

	// Test with a number greater than 1000
	test('formats a number greater than 1000 to the expected format', () => {
		expect(formatNumber(1234)).toBe('1,234');
	});

	// Test with a large number
	test('formats a large number to the expected format', () => {
		expect(formatNumber(123456)).toBe('123,456');
	});

	// Test with a larger number
	test('formats a large number to the expected format', () => {
		expect(formatNumber(1234567890)).toBe('1,234,567,890');
	});
});
