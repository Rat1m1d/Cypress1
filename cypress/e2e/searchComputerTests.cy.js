import computerDatabasePage from '../pages/computerDatabasePage'

describe('Computer Database Tests', () => {
    require('../utilities/testSetup.cy')
    it('Search for computers containing ACE in theit name', () => {
        let resultCount
        computerDatabasePage.sendSearchText()
        computerDatabasePage.searchComputers()
        computerDatabasePage.elements.rowCount().should('have.length', 6)
        computerDatabasePage.elements.getMessage().should('contain.text', 'computers found').then((elm) => {
          resultCount = parseInt(elm.text().split(' ')[0])
          computerDatabasePage.elements.rowCount().should('have.length', resultCount)
        })
      })
    })