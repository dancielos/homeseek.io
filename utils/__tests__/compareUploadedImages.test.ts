import { describe, expect, test } from 'vitest';
import compareUploadedImages from '../compareUploadedImages';

describe('compareUploadedImages', () => {
	test('should return the correct ComparedImages object', () => {
		const oldImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
		const newImages = ['image2.jpg', 'image3.jpg'];

		const result = compareUploadedImages(oldImages, newImages);

		expect(result.isTheSame).toBe(false);
		expect(result.toDelete).toEqual(['image1.jpg']);
	});

	test('should return true for empty arrays', () => {
		const oldImages: string[] = [];
		const newImages: string[] = [];

		const result = compareUploadedImages(oldImages, newImages);

		expect(result.isTheSame).toBe(true);
		expect(result.toDelete).toEqual([]);
	});

	test('should return true when oldImages and newImages have the same elements', () => {
		const oldImages = ['image1.jpg', 'image2.jpg'];
		const newImages = ['image1.jpg', 'image2.jpg'];

		const result = compareUploadedImages(oldImages, newImages);

		expect(result.isTheSame).toBe(true);
		expect(result.toDelete).toEqual([]);
	});

	test('should return true when oldImages is empty and newImages is not', () => {
		const oldImages: string[] = [];
		const newImages: string[] = ['image1.jpg', 'image2.jpg'];

		const result = compareUploadedImages(oldImages, newImages);

		expect(result.isTheSame).toBe(false);
		expect(result.toDelete).toEqual([]);
	});

	test('should return false when newImages is empty and oldImages is not', () => {
		const oldImages: string[] = ['image1.jpg', 'image2.jpg'];
		const newImages: string[] = [];

		const result = compareUploadedImages(oldImages, newImages);

		expect(result.isTheSame).toBe(false);
		expect(result.toDelete).toEqual(oldImages);
	});
});
