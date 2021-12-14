describe('Driver flow', () => {
  beforeEach(() => {
    // cy.intercept('POST','https://peaceful-wildwood-61032.herokuapp.com/graphql', {
    //   statusCode: 201,
    //   data: {
    //     data: {
    //       routeRequest: [
    //         {name:"Company Name1", disposalTime: 10, latitude:32.7641, longitude:-117.152680, city: "San Diego", state: "California", streetAddress: "123 America Way"},
    //             {name:"Company Name2", disposalTime: 15, latitude:32.886520, longitude:-117.2263, city: "San Diego", state: "California", streetAddress: "123 America Way"},
    //             {name:"Company Name3", disposalTime: 25, latitude:35.6570351, longitude:-105.0962085, city: "San Diego", state: "California", streetAddress: "123 America Way"},
    //             {name:"Company Name4", disposalTime: 10, latitude:36.6570351, longitude:-106.0962085, city: "San Diego", state: "California", streetAddress: "123 America Way"},
    //             {name:"Company Name5", disposalTime: 30, latitude:37.6570351, longitude:-107.0962085, city: "San Diego", state: "California", streetAddress: "123 America Way"},
    //       ]
    //     }
    //   }
    // }).as('routeRequest')
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
    cy.get('.route-card').should('have.length', 3)
    cy.get('.route-card[id="0"]')
      .should('contain', 'Estimated')
      .should('contain', 'mins')
  });

  it('Should display a calendar that a driver can manipulate to generate new routes for different days', () => {
    cy.get('.calendar-prompt').should('contain', 'Select')
    cy.get('.calendar').should('be.visible')
    cy.get('input[name="date"]').type('2021-12-14')
    cy.get('.btn-stndrd').contains('Generate').click()
    cy.get('.route-card').should('be.visible')
  });
});
