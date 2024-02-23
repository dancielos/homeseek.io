import { CycloneTwoTone } from '@mui/icons-material';

describe('Links should direct the use to correct pages', () => {
	// it('must have ')
	const homepageRegex = new RegExp('^' + Cypress.config().baseUrl + '/?$');
	it('should link to correct pages', () => {
		cy.visit(`${Cypress.config().baseUrl}`);
		cy.get('a#search-submit').click();

		cy.url().should('include', '/search');
		cy.get('a#homeseek-logo').click();

		cy.url().should('match', homepageRegex);
		cy.get('a[data-testid=more-details-0]').click();
		cy.wait(5000);

		cy.url().should('include', '/listing/');
		cy.get('[data-testid=go-back]').click();

		cy.url().should('match', homepageRegex);
		cy.get('a[data-testid=listing-for-city-toronto]').click();

		cy.url().should('include', '/search?query=toronto');
		cy.get('a[data-testid=more-details-0]').click();

		cy.url().should('include', '/listing/');
		cy.get('[data-testid=go-back]').click();

		cy.url().should('include', '/search');
		cy.get('a#homeseek-logo').click();
		cy.url().should('match', homepageRegex);
	});
	it.only('testing the listing', () => {
		cy.visit(`${Cypress.config().baseUrl}/listing/toronto`);
		cy.url().should('include', '/listing/');
	});
});
