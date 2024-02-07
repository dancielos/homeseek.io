describe('Admin pages should render the crucial components', () => {
	it('should render the dashboard page properly', () => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.get('header').should('exist');
		cy.get('[data-testid=admin-drawer]').should('exist');
	});

	it('should render the messages page properly', () => {
		cy.visit(`${Cypress.config().baseUrl}/messages`);
		cy.get('header').should('exist');
		cy.get('[data-testid=admin-drawer]').should('exist');
	});

	it('should render the properties page properly', () => {
		cy.visit(`${Cypress.config().baseUrl}/properties`);
		cy.get('header').should('exist');
		cy.get('[data-testid=admin-drawer]').should('exist');
	});

	it('should render the new properties page properly', () => {
		cy.visit(`${Cypress.config().baseUrl}/properties/new`);
		cy.get('header').should('exist');
		cy.get('[data-testid=admin-drawer]').should('exist');
		// TODO

		cy.get('form#new-property-form').should('exist');
		cy.get('form#new-property-form').get('[type=submit]').should('exist');
		// form should exist
		// submit button should exist
	});
});
