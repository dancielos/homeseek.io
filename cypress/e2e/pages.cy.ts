describe('Pages should render the crucial components', () => {
	const URL = 'http://localhost:3000';

	// it('must have ')
	it('should render the homepage properly', () => {
		cy.visit(`${URL}`);
		cy.get('header').should('exist');
		cy.get('footer').should('exist').should('have.length', '1');
		cy.get('section').should('have.length', '4');
		cy.get('input[type=search]').should('exist');
		cy.get('[type=submit]').should('exist');
	});
	it('should render the search page successfully', () => {
		cy.visit(`${URL}/search/toronto`);
		cy.get('header').should('exist');
		cy.get('footer').should('exist').should('have.length', '1');

		cy.get('form#search-form')
			.should('exist')
			.contains('input[type=search]')
			.contains('[type=submit]');
		cy.get('[data-testid=filters-container]').should('be.visible');
	});
	it('should render the details page successfully', () => {
		cy.visit(`${URL}/listing/toronto`);
		cy.get('header').should('exist');
		cy.get('footer').should('exist').should('have.length', '1');
		cy.get('main')
			.get('header')
			.should('contain', 'button[data-testid=go-back]')
			.should('have', 'h1');
		cy.get('main').get('section').should('have.length.at.least', '4');
		cy.get('form[data-testid=contact-listing]')
			.should('exist')
			.contains('input', 'name', { matchCase: false });
		cy.get('form[data-testid=contact-listing]').contains('[type=submit]');
	});
	// IN THE FUTURE:
	// it('should NOT have Lorem or dummy values', () => {
	// 	cy.visit('http://localhost:3000');
	// 	cy.contains('Lorem').should('not.exist');
	// });
});
