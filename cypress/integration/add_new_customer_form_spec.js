describe('Add New Customer Form Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/add-new-customer')
  })
  it('Should change the heading to reflect the form\'s purpose', () => {
    cy.get('.subheader').should('contain', 'Add')
  });

});
