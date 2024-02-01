import concatPathQuery from '@/utils/concatPathQuery';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { describe, expect, test } from 'vitest';

// in order to save time and to be more efficient
// I will only test components with Cypress
// and it makes more sense too, considering that's how users
// will actually interact with the app

// The unit tests will be used for functions (not behaviour)
// for instance, if I write a function that will
// compute something
// that's where unit tests will come in

// For now, I made a dummy util function

class MockReadonlyURLSearchParams {
	constructor(private params: [string, string][]) {}
	entries() {
		return this.params[Symbol.iterator]();
	}
}

describe('Unit tests for utility functions', () => {
	// test('the concatenation of pathname and query (search params)', () => {
	// 	expect(concatPathQuery())
	// });
	const path = '/example';

	test('should concatenate path and search params correctly', () => {
		const searchParams: ReadonlyURLSearchParams | null =
			new MockReadonlyURLSearchParams([
				['param1', 'value1'],
				['param2', 'value2'],
			]) as any;

		const result: string = concatPathQuery({
			path,
			searchParams,
		});

		// Assert the expected output
		expect(result).toBe('/example?param1=value1&param2=value2');
	});

	test('should concatenate path and searchParams(1) correctly, no "&"', () => {
		const searchParams: ReadonlyURLSearchParams | null =
			new MockReadonlyURLSearchParams([['param1', 'value1']]) as any;
		const result: string = concatPathQuery({
			path,
			searchParams,
		});
		expect(result).toBe('/example?param1=value1');
		expect(result.includes('&')).toBe(false);
	});

	test('should return only path if searchParams are null', () => {
		const result: string = concatPathQuery({ path, searchParams: null });

		// Assert the expected output
		expect(result).toBe('/example');
		expect(result.includes('?')).toBe(false);

		// const searchParams: ReadonlyURLSearchParams | null =
		// 	new MockReadonlyURLSearchParams([]) as any;

		// const result2: string = concatPathQuery({ path, searchParams });
		// expect(result2).toBe('/example');
		// expect(result2.includes('?')).toBe(false);
	});

	test('should return default / if both path and searchParams are null or empty', () => {
		const result: string = concatPathQuery({ path: null, searchParams: null });

		expect(result).toBe('/');
	});
});
