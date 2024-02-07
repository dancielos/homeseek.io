describe('Admin Page Theme Switching', () => {
	beforeEach(() => {
		cy.visit(`${Cypress.config().baseUrl}/dashboard`);
		// Clear localStorage before each test
		cy.clearLocalStorage();
	});

	it('should initially have no theme set in localStorage', () => {
		cy.window().then((win) => {
			expect(win.localStorage.getItem('theme')).to.be.null;
		});
	});

	it('should toggle theme between light and dark in localStorage', () => {
		// Toggle the theme switch from light to dark
		cy.get('#admin-toggle-theme').click();

		// Theme in localStorage should be 'dark' after toggling
		cy.window().then((win) => {
			expect(win.localStorage.getItem('theme')).to.equal('dark');
		});

		// Toggle the theme switch from dark to light
		cy.get('#admin-toggle-theme').click();

		// Theme in localStorage should be 'light' after toggling again
		cy.window().then((win) => {
			expect(win.localStorage.getItem('theme')).to.equal('light');
		});
	});

	it('should persist theme across different pages', () => {
		// Toggle the theme switch to dark mode
		cy.get('#admin-toggle-theme').click();

		// Visit different pages to ensure theme persistence
		cy.visit(`${Cypress.config().baseUrl}/properties`);
		cy.window().then((win) => {
			expect(win.localStorage.getItem('theme')).to.equal('dark');
		});

		cy.visit(`${Cypress.config().baseUrl}/messages`);
		cy.window().then((win) => {
			expect(win.localStorage.getItem('theme')).to.equal('dark');
		});

		cy.visit(`${Cypress.config().baseUrl}/properties/new`);
		cy.window().then((win) => {
			expect(win.localStorage.getItem('theme')).to.equal('dark');
		});
	});
});
