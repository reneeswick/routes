describe('Driver flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/driver')
  });

  it('Should welcome the user', () => {
  cy.get('.subheader').contains('Welcome')
    .should('be.visible')
  });

  it('Should display a map and route for that day', () => {
    cy.get('.map').should('be.visible')
    cy.get('.leaflet-interactive').should('be.visible')
  });

  it('Should display cards representing each stop on the driver\'s route', () => {
    cy.get('.route-cards-container').should('be.visible')
    cy.get('.route-card[id="0"]')
      .should('contain', 'Estimated')
      .should('contain', 'mins')
  });

  it('Should display a calendar that a driver can manipulate to generate new routes for different days', () => {
    cy.get('.calendar-prompt').should('contain', 'Select')
    cy.get('.calendar').should('be.visible')
  });

  it('Should be able to add a new customer', () => {
    cy.get('.add-new-customer').click()
    cy.url().should('include', '/add-new-customer')
  });
});
