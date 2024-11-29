beforeEach(function () {
    cy.fixture('computers.json').as('computersData')
    cy.visit('https://computer-database.gatling.io/computers')
  })