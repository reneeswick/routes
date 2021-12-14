describe('Update customer info form flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/update-customer-account')
  });

  it('Should see a subheader reflecting the new view', () => {
    cy.get('.subheader').should('contain', 'Update')
  });

  it('Should be able to select a new pickup day', () => {
    cy.get('select[name="customerDay"]')
      .select('Monday')
  });

  it('Should be able to select a new amount of bins for service', () => {
    cy.get('select[name="customerBins"]')
      .select('4')
  });

  it.skip('Should be able to submit updated customer info', () => {
    cy.get('customer-form-btn').click()
  });

  it('Should be able to navigate back to customer dashboard', () => {
    cy.get('.return-to-dash').click({force:true})
    cy.url().should('include', '/customer')
  });
});
