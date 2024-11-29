import computerDatabasePage from '../pages/computerDatabasePage'

describe('Add Computer Tests', () => {
    require('../utilities/testSetup.cy')
    it('Verify that new computer is added', () => {
        computerDatabasePage.addComputer()
        computerDatabasePage.sendComputerName('Dimitar\'s PC') //Dimitar\'s PC
        computerDatabasePage.sendIntroducedDate('2024-11-11') //2024-11-11
        computerDatabasePage.sendDiscontinuedDate('2024-11-20') //2024-11-20
        computerDatabasePage.sendCompany(3)  //3
        computerDatabasePage.createComputer()
        computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer Dimitar\'s PC has been created')
      })
      const computersList = require('../fixtures/computers.json')
      computersList.forEach((computer) => {
          it('Data Driven Testing - ' + computer.name, () => {
              computerDatabasePage.addComputer()
              computerDatabasePage.sendComputerName(computer.name)
              computerDatabasePage.sendIntroducedDate(computer.introduced)
              computerDatabasePage.sendDiscontinuedDate(computer.discontinued)
              computerDatabasePage.sendCompany(computer.company)
              computerDatabasePage.createComputer()
              computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer ' + computer.name + ' has been created')
          })
      })
      it('Data Driven Testing', function () {    
        this.computersData.forEach((computer) => {
          computerDatabasePage.addComputer()
          computerDatabasePage.sendComputerName(computer.name)
          computerDatabasePage.sendIntroducedDate(computer.introduced)
          computerDatabasePage.sendDiscontinuedDate(computer.discontinued)
          computerDatabasePage.sendCompany(computer.company)
          computerDatabasePage.createComputer()
          computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer ' + computer.name + ' has been created')
        })
      })
})