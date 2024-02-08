import concatPathQuery from '@/utils/concatPathQuery';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { describe, expect, test, vi } from 'vitest';

import hasThemeCache from '@/utils/hasThemeCache';

// in order to save time and to be more efficient
// I will only test components with Cypress
// and it makes more sense too, considering that's how users
// will actually interact with the app

// The unit tests will be used for functions (not behaviour)
// for instance, if I write a function that will
// compute something
// that's where unit tests will come in

// For now, I made a dummy util function

describe('hasThemeCache function', () => {
	test('returns the correct value from localStorage when theme is set to dark', () => {
		const localStorageMock = {
			getItem: vi.fn().mockReturnValue('dark'),
		};
		Object.defineProperty(window, 'localStorage', {
			value: localStorageMock,
			writable: true,
		});

		expect(hasThemeCache()).toBe('dark');
		expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
	});

	test('returns the correct value from localStorage when theme is set to light', () => {
		const localStorageMock = {
			getItem: vi.fn().mockReturnValue('light'),
		};
		Object.defineProperty(window, 'localStorage', {
			value: localStorageMock,
			writable: true,
		});

		expect(hasThemeCache()).toBe('light');
		expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
	});

	test('returns null when localStorage does not have the theme item', () => {
		const localStorageMock = {
			getItem: vi.fn().mockReturnValue(null),
		};
		Object.defineProperty(window, 'localStorage', {
			value: localStorageMock,
			writable: true,
		});

		expect(hasThemeCache()).toBe(null);
		expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
	});
});
