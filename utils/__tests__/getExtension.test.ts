import { describe, expect, test } from 'vitest';
import getFileExtension from '../getExtension';

describe('test the util function, getFileExtension', () => {
	// Empty filename
	test('returns null for empty filename', () => {
		expect(getFileExtension('')).toBe(null);
	});

	// Single dot filename
	test('returns correct extension for filename with single dot', () => {
		expect(getFileExtension('file.txt')).toBe('txt');
		expect(getFileExtension('image.jpg')).toBe('jpg');
		expect(getFileExtension('document.pdf')).toBe('pdf');
	});

	// Multiple dots filename
	test('returns correct extension for filename with multiple dots', () => {
		expect(getFileExtension('file.with.multiple.dots.txt')).toBe('txt');
		expect(getFileExtension('image.with.multiple.dots.jpg')).toBe('jpg');
		expect(getFileExtension('document.with.multiple.dots.pdf')).toBe('pdf');
	});

	// Filename without extension
	test('returns null for filename without extension', () => {
		expect(getFileExtension('filename')).toBe(null);
		expect(getFileExtension('filename_without_extension')).toBe(null);
	});

	// Filename with leading dots
	test('returns correct extension for filename with leading dots', () => {
		expect(getFileExtension('.hidden_file.txt')).toBe('txt');
		expect(getFileExtension('.hidden_image.jpg')).toBe('jpg');
		expect(getFileExtension('.hidden_document.pdf')).toBe('pdf');
	});

	// Filename with leading dots and no extension
	test('returns null for filename with leading dots and no extension', () => {
		expect(getFileExtension('.hidden_filename')).toBe(null);
		expect(getFileExtension('.hidden_filename_without_extension')).toBe(null);
	});

	// Filename with spaces
	test('returns correct extension for filename with spaces', () => {
		expect(getFileExtension('file with spaces.txt')).toBe('txt');
		expect(getFileExtension('image with spaces.jpg')).toBe('jpg');
		expect(getFileExtension('document with spaces.pdf')).toBe('pdf');
	});

	// Filename with commas
	test('returns correct extension for filename with commas', () => {
		expect(getFileExtension('file,with,commas.txt')).toBe('txt');
		expect(getFileExtension('image,with,commas.jpg')).toBe('jpg');
		expect(getFileExtension('document,with,commas.pdf')).toBe('pdf');
	});
});
