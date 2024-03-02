describe('Search page filters should work properly and update searchParams accordingly', () => {
	it('should update price slider value and URL search param', () => {
		cy.visit(`${Cypress.config().baseUrl}/search?s=Montreal`);

		// Click on the button to open the popover component with the slider
		cy.get('#filter-button__price').click();

		// Verify that the popover with the slider is visible
		cy.get('#price-range').should('be.visible');

		// Assert that the URL search param updates accordingly
		// initial value
		cy.url().should('include', 'price=1000%2C10000');

		cy.get('#price-range span.MuiSlider-mark[data-index=2]').first().click();

		cy.url().should('include', 'price=3000%2C10000');

		cy.get('#simple-popover').click();
	});
	it('should update bath slider value and URL search param', () => {
		cy.visit(`${Cypress.config().baseUrl}/search?s=Montreal`);

		// Click on the button to open the popover component with the bath slider
		cy.get('#filter-button__bath').click();

		// Verify that the popover with the bath slider is visible
		cy.get('#bath-range').should('be.visible');

		// Assert the initial URL search param value
		cy.url().should('include', 'bath=1%2C3');

		// Click on the span covering the bath slider input to focus it
		cy.get('#bath-range').click();

		// Press the right arrow key to increase the value
		// cy.get('body').type('{rightarrow}');

		// Assert the updated URL search param value
		cy.url().should((url) => {
			expect(url).to.satisfy((url: string) => {
				return url.includes('bath=2%2C3') || url.includes('bath=1%2C2');
			});
		});
	});

	it('should update bed slider value and URL search param', () => {
		cy.visit(`${Cypress.config().baseUrl}/search?s=Montreal`);

		// Click on the button to open the popover component with the bed slider
		cy.get('#filter-button__bed').click();

		// Verify that the popover with the bed slider is visible
		cy.get('#bed-range').should('be.visible');

		// Assert the initial URL search param value
		cy.url().should('include', 'bed=1%2C6');

		// Click on the second bed slider mark to update the value
		cy.get('#bed-range').click();

		// Assert the updated URL search param value
		cy.url().should((url) => {
			expect(url).to.satisfy((url: string) => {
				return url.includes('bed=3%2C6') || url.includes('bath=1%2C4');
			});
		});
	});
	it('should assert values for property filter', () => {
		cy.visit(`${Cypress.config().baseUrl}/search?s=Montreal`);

		// Click on the button to open the popover component with the property filter
		cy.get('#filter-button__property').click();

		// Verify that the popover with the property filter is visible
		cy.get('#property-checkboxes').should('be.visible');

		// Assert the initial URL search param value for the property filter
		cy.url()
			.should('include', 'property=')
			.then((url) => {
				const propertyParam = url.split('property=')[1];
				const propertyArray = decodeURIComponent(propertyParam).split(',');
				expect(propertyArray).to.deep.equal([
					'HOUSE',
					'CONDO_APARTMENT',
					'ROW_TOWNHOUSE',
					'DUPLEX_TRIPLEX',
					'MOBILE',
					'MULTIFAMILY',
				]);
			});

		cy.get('#property-checkboxes input[name="CONDO_APARTMENT"]').click();
		cy.get('#property-checkboxes input[name="ROW_TOWNHOUSE"]').click();
		cy.get('#property-checkboxes input[name="MOBILE"]').click();

		cy.wait(3000);

		cy.url()
			.should('include', 'property=')
			.then((url) => {
				const propertyParam = url.split('property=')[1];
				const propertyArray = decodeURIComponent(propertyParam).split(',');
				expect(propertyArray).to.deep.equal([
					'HOUSE',
					'DUPLEX_TRIPLEX',
					'MULTIFAMILY',
				]);
			});
	});
	it.only('should assert changing values for more filter', () => {
		cy.visit(`${Cypress.config().baseUrl}/search?s=Montreal`);

		// Click on the button to open the popover component with the property filter
		cy.get('#filter-button__more').click();

		// Verify that the popover with the property filter is visible
		cy.get('#more-filter-checkboxes').should('be.visible');

		// Assert the initial URL search param value for the property filter
		cy.url().should('include', 'pet=false');

		cy.get('#more-filter-checkboxes input[name="isPetFriendly"]').click();

		cy.wait(3000);

		cy.url().should('include', 'pet=true');
	});
});
