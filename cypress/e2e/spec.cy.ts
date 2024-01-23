// describe('template spec', () => {
// 	it('passes', () => {
// 		cy.visit('http://localhost:3000');
// 	});
// });

describe('HomeSeek Homepage', () => {
	// it('must have ')
	it('has hello world in the body', () => {
		cy.visit('http://localhost:3000');
		cy.get('h1').should('exist', 'Hello World!');
	});
});
