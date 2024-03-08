import { describe, expect, test } from 'vitest';
import formatDate from '@/utils/formatters/formatDate';

describe('test the util function, formatDate', () => {
	const locale = 'en-CA';

	// Test with a specific date and default dateStyle ('short')
	test('formats a specific date with default dateStyle to the expected format', () => {
		const date = new Date('2022-01-15T12:34:56Z');
		expect(formatDate(date, undefined)).toBe('2022-01-15');
	});

	// Test with a specific date and 'full' dateStyle
	test('formats a specific date with "full" dateStyle to the expected format', () => {
		const date = new Date('2022-01-15T12:34:56Z');
		expect(formatDate(date, 'full')).toBe('Saturday, January 15, 2022');
	});

	// Test with a specific date and 'long' dateStyle
	test('formats a specific date with "long" dateStyle to the expected format', () => {
		const date = new Date('2022-01-15T12:34:56Z');
		expect(formatDate(date, 'long')).toBe('January 15, 2022');
	});

	// Test with a specific date and 'medium' dateStyle
	test('formats a specific date with "medium" dateStyle to the expected format', () => {
		const date = new Date('2022-01-15T12:34:56Z');
		expect(formatDate(date, 'medium')).toBe('Jan 15, 2022');
	});

	// Test with a specific date and 'short' dateStyle
	test('formats a specific date with "short" dateStyle to the expected format', () => {
		const date = new Date('2022-01-15T12:34:56Z');
		expect(formatDate(date, 'short')).toBe('2022-01-15');
	});

	// Test with current date and default dateStyle ('short')
	test('formats the current date with default dateStyle to the expected format', () => {
		const currentDate = new Date();
		const formattedDate = new Intl.DateTimeFormat(locale, {
			dateStyle: 'short',
		}).format(currentDate);
		expect(formatDate(currentDate)).toBe(formattedDate);
	});

	// Test with current date and 'full' dateStyle
	test('formats the current date with "full" dateStyle to the expected format', () => {
		const currentDate = new Date();
		const formattedDate = new Intl.DateTimeFormat(locale, {
			dateStyle: 'full',
		}).format(currentDate);
		expect(formatDate(currentDate, 'full')).toBe(formattedDate);
	});

	// Test with a future date and default dateStyle ('short')
	test('formats a future date with default dateStyle to the expected format', () => {
		const futureDate = new Date('2025-12-31T23:59:59Z');
		expect(formatDate(futureDate)).toBe('2025-12-31');
	});

	// Test with a past date and default dateStyle ('short')
	test('formats a past date with default dateStyle to the expected format', () => {
		const pastDate = new Date('1999-12-31T23:59:59Z');
		expect(formatDate(pastDate)).toBe('1999-12-31');
	});

	// Test with a date of type number (Date.now()) and default dateStyle ('short')
	test('formats a date of type number with default dateStyle to the expected format', () => {
		const currentDate = Date.now();
		const formattedDate = new Intl.DateTimeFormat(locale, {
			dateStyle: 'short',
		}).format(currentDate);
		expect(formatDate(currentDate)).toBe(formattedDate);
	});
});
