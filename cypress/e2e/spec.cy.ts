// describe('template spec', () => {
// 	it('passes', () => {
// 		cy.visit('http://localhost:3000');
// 	});
// });

describe('Hello World test', () => {
	it('has hello world in the body', () => {
		cy.visit('http://localhost:3000');
		cy.get('h1').should('exist', 'Hello World!');
	});
});
