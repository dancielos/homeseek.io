import { describe, expect, test } from 'vitest';
import formatDate from '@/utils/formatDate';

describe('test the util function, formatDate', () => {
	// Test with a specific date
	test('formats a specific date to the expected format', () => {
		const date = new Date('2022-01-15T12:34:56Z');
		expect(formatDate(date)).toBe('2022-01-15');
	});

	// Test with current date
	test('formats the current date to the expected format', () => {
		const currentDate = new Date();
		const formattedDate = currentDate.toISOString().slice(0, 10); // Get YYYY-MM-DD format
		expect(formatDate(currentDate)).toBe(formattedDate);
	});

	// Test with a future date
	test('formats a future date to the expected format', () => {
		const futureDate = new Date('2025-12-31T23:59:59Z');
		expect(formatDate(futureDate)).toBe('2025-12-31');
	});

	// Test with a past date
	test('formats a past date to the expected format', () => {
		const pastDate = new Date('1999-12-31T23:59:59Z');
		expect(formatDate(pastDate)).toBe('1999-12-31');
	});
});
