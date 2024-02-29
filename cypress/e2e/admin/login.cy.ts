describe('Authentication functionality', () => {
	it('Visits login page and asserts elements visibility', () => {
		cy.visit(`${Cypress.config().baseUrl}/login`);
		cy.get('#navbar-link-login').should('be.visible');
	});

	it('Redirects to login page when visiting properties and messages without logging in', () => {
		cy.visit(`${Cypress.config().baseUrl}/properties`);
		cy.url().should('include', '/login');
		cy.visit(`${Cypress.config().baseUrl}/properties/new`);
		cy.url().should('include', '/login');

		cy.visit(`${Cypress.config().baseUrl}/messages`);
		cy.url().should('include', '/login');
	});

	it('Logs in with incorrect credentials and verifies error message', () => {
		cy.visit(`${Cypress.config().baseUrl}/login`);
		cy.get('form#login-form').within(() => {
			cy.get('input[name=email]').type('invalid@example.com');
			cy.get('input[name=password]').type('invalidpassword');
			cy.get('button[type=submit]').click();
		});
		cy.get('#login-failed-message').should('be.visible');
	});

	it('Logs in with correct credentials and redirects to dashboard', () => {
		cy.visit(`${Cypress.config().baseUrl}/login`);
		cy.get('form#login-form').within(() => {
			cy.get('input[name=email]').type('demo@homeseek.io');
			cy.get('input[name=password]').type('Password123!');
			cy.get('button[type=submit]').click();
		});
		cy.url().should('include', '/dashboard');

		cy.visit(`${Cypress.config().baseUrl}/login`);
		cy.url().should('include', '/dashboard');

		cy.get('#drawer-link-logout').should('be.visible');
		cy.get('#dashboard-title')
			.should('be.visible')
			.contains('Welcome', { matchCase: false });

		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('#navbar-link-login').should('not.exist');

		cy.visit(`${Cypress.config().baseUrl}/properties`);
		cy.get('#navbar-link-login').should('not.exist');

		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('[data-testid=more-details-0]').click();
		cy.get('#navbar-link-login').should('not.exist');

		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.get('#drawer-link-logout').click();

		cy.wait(3000);

		cy.url().then((url) => {
			const baseUrl = Cypress.config().baseUrl!.replace(/\/$/, '');
			const currentUrl = url.replace(/\/$/, ''); // Remove trailing slash from current URL if present
			expect(currentUrl).to.equal(baseUrl);
		});
	});

	it('Redirects to login page when visiting /dashboard after logout', () => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		cy.url().should('include', '/login');
	});

	it('Redirects to login page when visiting homepage after logout', () => {
		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('#navbar-link-login').should('be.visible');
	});
});
