import { describe, expect, test } from 'vitest';
import hashFilename from '@/utils/hashFilename';

describe('hashFilename function', () => {
	test('returns a hashed filename with extension', () => {
		expect(typeof hashFilename('example.txt', 0)).toBe('string');
		expect(typeof hashFilename('example.jpg', 1)).toBe('string');
		expect(typeof hashFilename('example.png', 2)).toBe('string');
	});

	test('returns a filename with correct hash and extension', () => {
		expect(hashFilename('example.txt', 0)).toMatch(/^[\da-fA-F]+-1\.txt$/);
		expect(hashFilename('example.jpg', 1)).toMatch(/^[\da-fA-F]+-2\.jpg$/);
		expect(hashFilename('example.png', 2)).toMatch(/^[\da-fA-F]+-3\.png$/);
	});
	test('returns a filename with correct hash length', () => {
		expect(hashFilename('example.txt', 0).length).toBeGreaterThan(12);
		expect(hashFilename('example.jpg', 1).length).toBeGreaterThan(12);
		expect(hashFilename('example.png', 2).length).toBeGreaterThan(12);
	});
});
