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
	it('should render the crucial parts of the homepage', () => {
		cy.visit('http://localhost:3000');
		cy.get('section').should('have.length', '4');
		cy.get('input#search-input').should('exist');
		cy.get('input[type="submit"]').should('exist');
	});
	// IN THE FUTURE:
	// it('should NOT have Lorem or dummy values', () => {
	// 	cy.visit('http://localhost:3000');
	// 	cy.contains('Lorem').should('not.exist');
	// });
});
