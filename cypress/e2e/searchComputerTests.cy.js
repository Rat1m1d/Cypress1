import computerDatabasePage from '../pages/computerDatabasePage'

describe('Computer Database Tests', () => {
    require('../utilities/testSetup.cy')
    it('Search for computers containing ACE in theit name', () => {
        let resultCount
        computerDatabasePage.sendText(computerDatabasePage.strings.searchBox, 'ACE')
        // computerDatabasePage.searchComputers()
        computerDatabasePage.clickButton(computerDatabasePage.strings.searchButton)
        computerDatabasePage.elements.rowCount().should('have.length', 6)
        computerDatabasePage.elements.getMessage().should('contain.text', 'computers found').then((elm) => {
          resultCount = parseInt(elm.text().split(' ')[0])
          computerDatabasePage.elements.rowCount().should('have.length', resultCount)
        })
      })
      it('Verify the third computer name in the list', () => {
        computerDatabasePage.clickButton(computerDatabasePage.strings.nextButton, 5)
        // computerDatabasePage.navigate(5)
        computerDatabasePage.elements.thirdComputer().should('have.text', computerDatabasePage.strings.thirdComputerName)
      })
    })