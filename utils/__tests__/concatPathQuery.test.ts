import concatPathQuery from '@/utils/concatPathQuery';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { describe, expect, test } from 'vitest';

class MockReadonlyURLSearchParams {
	constructor(private params: [string, string][]) {}
	entries() {
		return this.params[Symbol.iterator]();
	}
}

describe('Unit test for concatPathQuery', () => {
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
