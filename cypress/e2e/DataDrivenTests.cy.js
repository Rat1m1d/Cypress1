describe('Computer Database Tests', () => {
    beforeEach(function () {
      cy.fixture('computers.json').as('computersData')
    })
    it('Data Driven Testing', function () {    
      this.computersData.forEach((computer) => {
      cy.visit('https://computer-database.gatling.io/computers')
      cy.get('#add').click()
      cy.get('#name').type(computer.name)
      cy.get('#introduced').type(computer.introduced)
      cy.get('#discontinued').type(computer.discontinued)
      cy.get('#company').select(computer.company)
      cy.get('[type=submit]').click()
      cy.get('.warning').should('have.text','Done !  Computer ' + computer.name + ' has been created')
      })
    })
    const computersList = require('../fixtures/computers.json')
    computersList.forEach((computer) => {
        it('Data Driven Testing - ' + computer.name, () => {
            cy.visit('https://computer-database.gatling.io/computers')
            cy.get('#add').click()
            cy.get('#name').type(computer.name)
            cy.get('#introduced').type(computer.introduced)
            cy.get('#discontinued').type(computer.discontinued)
            cy.get('#company').select(computer.company)
            cy.get('[type=submit]').click()
            cy.get('.warning').should('have.text','Done !  Computer ' + computer.name + ' has been created')
        })
    })
  })