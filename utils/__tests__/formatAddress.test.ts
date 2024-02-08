import { describe, expect, test, vi } from 'vitest';
import formatAddress from '@/utils/formatAddress';

describe('test the util function, formatAddress', () => {
	// Passing all lowercase
	test('converts all lowercase string to title case, postal code is capitalized', () => {
		expect(
			formatAddress('150 peter herner bay', 'winnipeg', 'manitoba', 'r2v 4w5')
		).toBe('150 Peter Herner Bay, Winnipeg, Manitoba, R2V 4W5');
	});

	// Passing all uppercase
	test('converts all uppercase string to title case, postal code is capitalized', () => {
		expect(
			formatAddress('150 PETER HERNER BAY', 'WINNIPEG', 'MANITOBA', 'R2V 4W5')
		).toBe('150 Peter Herner Bay, Winnipeg, Manitoba, R2V 4W5');
	});

	// Passing nothing
	test('returns empty string if all arguments are empty', () => {
		expect(formatAddress('', '', '', '')).toBe('');
	});

	// Postal code is empty
	test('returns formatted address with empty postal code, last element is not a comma', () => {
		expect(
			formatAddress('150 Peter Herner Bay', 'Winnipeg', 'Manitoba', '')
		).toBe('150 Peter Herner Bay, Winnipeg, Manitoba');
	});

	// Province and postal code are empty
	test('returns formatted address with empty province and postal code, last element is not a comma', () => {
		expect(formatAddress('150 Peter Herner Bay', 'Winnipeg', '', '')).toBe(
			'150 Peter Herner Bay, Winnipeg'
		);
	});
});
