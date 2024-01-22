import hello from '@/utils/dummy';
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

describe('Unit tests', () => {
	test('The dummy function should return hello world', () => {
		expect(hello()).toBe('Hello World');
	});
});
