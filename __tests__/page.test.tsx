import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

test('Hello World', () => {
	render(<Page />);
	expect(
		screen.getByRole('heading', { level: 1, name: 'Hello World!' })
	).toBeDefined();
});
