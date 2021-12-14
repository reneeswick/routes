describe('Add New Customer Form Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/add-new-customer')
  })
  it('Should change the heading to reflect the form\'s purpose', () => {
    cy.get('.subheader').should('contain', 'Add')
  });

  it('Should be able to type in an address', () => {
    cy.get('input[name="customerName"]')
      .should('be.visible')
      .type('Wasted Services of SD')
    cy.get('input[name="street"]')
      .should('be.visible')
      .type('12843 El Camino Real')
    cy.get('input[name="street2"]')
      .type('203')
  });

  it('Should be able to select the city, state, and number of bins', () => {
    cy.get('select[name="city"]')
      .should('be.visible')
      .select('San Diego')
    cy.get('select[name="state"]')
      .should('be.visible')
      .select('CA')
    cy.get('select[name="bins"]')
      .should('be.visible')
      .select('4')
  });
  it.skip('Should be able to submit new customer', () => {
    cy.get('button'),contains('Create').click()
    cy.get('.pop-message').should('be.visible')

  })

});
