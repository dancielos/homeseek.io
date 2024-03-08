import { describe, expect, test, vi } from 'vitest';
import formatPrice from '@/utils/formatters/formatPrice';

describe('test the util function, formatPrice', () => {
	// Valid integer price
	test('formats a valid integer price to currency format', () => {
		expect(formatPrice(1500)).toBe('$1,500.00');
	});

	// Valid floating point price
	test('formats a valid floating point price to currency format', () => {
		expect(formatPrice(1500.5)).toBe('$1,500.50');
	});

	// Price is zero
	test('formats zero price to currency format', () => {
		expect(formatPrice(0)).toBe('$0.00');
	});

	// Price is negative
	test('formats negative price to currency format', () => {
		expect(formatPrice(-1500)).toBe('-$1,500.00');
	});
});
