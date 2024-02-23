// describe('Pages should render the crucial components', () => {
// 	// it('must have ')
// 	it('should render the homepage properly', () => {
// 		cy.visit(`${Cypress.config().baseUrl}`);
// 		cy.get('header').should('exist');
// 		cy.get('footer').should('exist').should('have.length', '1');
// 		cy.get('section').should('have.length', 4);
// 		cy.get('input[type=search]').should('exist');
// 		cy.get('[type=submit]').should('exist');
// 	});

// 	it('should render the search page successfully', () => {
// 		cy.visit(`${Cypress.config().baseUrl}/search?address=toronto`);
// 		cy.get('header').should('exist');
// 		cy.get('footer').should('exist').should('have.length', '1');

// 		cy.get('form#search-form').should('exist');
// 		cy.get('form#search-form').get('input[type=search]').should('exist');
// 		cy.get('form#search-form').get('[type=submit]').should('exist');
// 		// .should('contain', '[type=submit]');

// 		cy.get('[data-testid=filters-container]').should('be.visible');
// 	});

// 	it('should render the details page successfully', () => {
// 		cy.visit(`${Cypress.config().baseUrl}/listing/toronto`);
// 		cy.wait(5000);

// 		cy.get('header').should('exist');
// 		cy.get('footer').should('exist').should('have.length', '1');

// 		cy.get('main').get('header').get('[data-testid=go-back]').should('exist');
// 		// .should('have', 'h1');
// 		cy.get('main').get('section').should('have.length.at.least', 4);
// 		cy.get('form[data-testid=contact-listing]')
// 			.should('be.visible')
// 			.get('input')
// 			.should('have.length.at.least', 3);
// 		// cy.get('form[data-testid=contact-listing]').get('input')
// 		cy.get('form[data-testid=contact-listing]').contains('label', 'name', {
// 			matchCase: false,
// 		});
// 		cy.get('form[data-testid=contact-listing]')
// 			.get('[type=submit]')
// 			.should('be.visible');
// 	});
// 	// IN THE FUTURE:
// 	// it('should NOT have Lorem or dummy values', () => {
// 	// 	cy.visit('http://localhost:3000');
// 	// 	cy.contains('Lorem').should('not.exist');
// 	// });
// });
