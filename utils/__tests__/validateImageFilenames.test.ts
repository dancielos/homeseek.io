import { describe, expect, test } from 'vitest';
import validateImageFilenames from '../validateImageFilenames';

describe('isValidImageFilename', () => {
	test('valid filenames', () => {
		expect(
			validateImageFilenames(['image.jpg', 'photo.jpeg', 'picture.png'])
		).toBe(true);
		expect(validateImageFilenames([])).toBe(true); // Empty array should return false
	});

	test('invalid filenames', () => {
		expect(validateImageFilenames(['logo.gif', 'icon.svg'])).toBe(false);
		expect(validateImageFilenames(['photo.png', 'image.pdf'])).toBe(false);
	});
});
