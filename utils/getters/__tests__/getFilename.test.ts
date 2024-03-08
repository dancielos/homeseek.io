import { describe, expect, test } from 'vitest';
import getFilename from '../getFilename';

describe('getFilename', () => {
	test('should return the filename from a given string', () => {
		expect(getFilename('tmp/filename.jpg')).toBe('filename.jpg');
		expect(getFilename('path/to/folder/another_filename.png')).toBe(
			'another_filename.png'
		);
	});

	test('should return an empty string if the input does not contain a filename', () => {
		expect(getFilename('')).toBe(null);
		expect(getFilename('/path/to/folder/')).toBe(null);
		expect(getFilename('/path/to/folder')).toBe(null);
	});
});
