describe('Links should direct the user to correct pages', () => {
	const homepageRegex = new RegExp('^' + Cypress.config().baseUrl + '/?$');

	it('should navigate to login page and then to dashboard', () => {
		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('a#navbar-link-login').click();
		cy.url().should('include', '/login');

		cy.get('[type=submit]').click();
		cy.url().should('include', '/dashboard');
	});

	it('should navigate to dashboard from homepage (CTA)', () => {
		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('a#navbar-link-post-listing').click();
		cy.url().should('include', '/dashboard');
	});

	it('should navigate to homepage from dashboard', () => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.get('a#drawer-link-homepage').click();
		cy.url().should('match', homepageRegex);
	});

	it('should navigate to messages page', () => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.get('a#drawer-link-messages').click();
		cy.url().should('include', '/messages');
	});

	it('should navigate to properties page', () => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.get('a#drawer-link-properties').click();
		cy.url().should('include', '/properties');
	});

	it('should navigate to properties page from dashboard reports', () => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.get('a#dashboard-manage-properties').click();
		cy.url().should('include', '/properties');
	});

	it('should navigate to add new property page then back to dashboard', () => {
		cy.visit(`${Cypress.config().baseUrl}/properties`);
		cy.get('a#add-new-property-link').click();
		cy.url().should('include', '/properties/new');

		cy.get('a#drawer-link-dashboard').click();
		cy.url().should('include', '/dashboard');
	});

	it('should navigate back to dashboard from footer', () => {
		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('footer').find('a#footer-link-post-listing').click();
		cy.url().should('include', '/dashboard');

		cy.get('a#drawer-link-homepage').click();
		cy.url().should('match', homepageRegex);
	});

	it('should navigate to login page from footer', () => {
		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('footer').find('a#footer-link-login').click();
		cy.url().should('include', '/login');

		// Assuming the login page has a submit button [type=submit]
		cy.get('[type=submit]').click();
		cy.url().should('include', '/dashboard');
	});
});
