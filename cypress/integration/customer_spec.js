describe('Customer flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/customer')
  });

  it('Should welcome the user', () => {
    cy.get('.subheader').should('contain', 'Welcome')
  });

  it('Should display how many stops away is the driver', () => {
    cy.get('.tracking-msg').should('be.visible')
  });
});
