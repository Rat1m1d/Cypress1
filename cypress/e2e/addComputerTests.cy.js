import computerDatabasePage from '../pages/computerDatabasePage'

describe('Add Computer Tests', () => {
    require('../utilities/testSetup.cy')
    it('Verify that new computer is added', () => {
        computerDatabasePage.clickButton(computerDatabasePage.strings.addButton)
        computerDatabasePage.sendText(computerDatabasePage.strings.computerName, 'Dimitar\'s PC')   //sendComputerName('Dimitar\'s PC') //Dimitar\'s PC
        computerDatabasePage.sendText(computerDatabasePage.strings.introduced, '2024-11-11')   //sendIntroducedDate('2024-11-11') //2024-11-11
        computerDatabasePage.sendText(computerDatabasePage.strings.discontinued, '2024-11-20')   //sendDiscontinuedDate('2024-11-20') //2024-11-20
        computerDatabasePage.sendCompany(3)  //3
        computerDatabasePage.clickButton(computerDatabasePage.strings.submitButton)
        computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer Dimitar\'s PC has been created')
      })
      const computersList = require('../fixtures/computers.json')
      computersList.forEach((computer) => {
          it('Data Driven Testing - ' + computer.name, () => {
              computerDatabasePage.clickButton(computerDatabasePage.strings.addButton)
              computerDatabasePage.sendText(computerDatabasePage.strings.computerName, computer.name) //sendComputerName(computer.name)
              computerDatabasePage.sendText(computerDatabasePage.strings.introduced, computer.introduced) //sendIntroducedDate(computer.introduced)
              computerDatabasePage.sendText(computerDatabasePage.strings.discontinued, computer.discontinued) //sendDiscontinuedDate(computer.discontinued)
              computerDatabasePage.sendCompany(computer.company)
              computerDatabasePage.clickButton(computerDatabasePage.strings.submitButton)
              computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer ' + computer.name + ' has been created')
          })
      })
      it('Data Driven Testing', function () {    
        this.computersData.forEach((computer) => {
          computerDatabasePage.clickButton(computerDatabasePage.strings.addButton)
          computerDatabasePage.sendText(computerDatabasePage.strings.computerName, computer.name)
          computerDatabasePage.sendText(computerDatabasePage.strings.introduced, computer.introduced)
          computerDatabasePage.sendText(computerDatabasePage.strings.discontinued, computer.discontinued)
          computerDatabasePage.sendCompany(computer.company)
          computerDatabasePage.clickButton(computerDatabasePage.strings.submitButton)
          computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer ' + computer.name + ' has been created')
        })
      })
})