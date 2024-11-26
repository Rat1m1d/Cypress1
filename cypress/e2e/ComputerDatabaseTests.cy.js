describe('Computer Database Tests', () => {
  it('Verify Title', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.title().should('eq','Computers database')
  })
  it('Add New Computer', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#name').type('Dimitar\'s PC')
    cy.get('#introduced').type('2024-11-11')
    cy.get('#discontinued').type('2024-11-20')
    cy.get('#company').select('3')
    cy.get('[type=submit]').click()
    cy.get('.warning').should('have.text','Done !  Computer Dimitar\'s PC has been created')
  })
  it('Search for computers containing ACE in theit name', () => {
    let resultCount
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type('ACE')
    cy.get('#searchsubmit').click()
    cy.get('table.computers tbody tr').should('have.length', 6)
    cy.get('#main').should('contain.text', 'computers found').then((elm) => {
      resultCount = parseInt(elm.text().split(' ')[0])
      cy.get('table.computers tbody tr').should('have.length', resultCount)
    })
  })
})