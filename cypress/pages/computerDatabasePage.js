class computerDatabasePage {
    elements = {
        companyDropdown : () => cy.get('#company'),
        warningMsg : () => cy.get('.warning'),
        rowCount : () => cy.get('table.computers tbody tr'),
        getMessage : () => cy.get('#main'),
        thirdComputer : () => cy.get('table.computers tbody tr:nth-child(3) td:nth-child(1) a'),
        nextBtn : () => cy.contains("Next →")
    }
    strings = {
        addButton : '#add',
        submitButton : '[type=submit]',
        searchButton : '#searchsubmit',
        computerName : '#name',
        introduced: '#introduced',
        discontinued : '#discontinued',
        searchBox : '#searchbox',
        thirdComputerName : 'Apple IIc',
        nextButton : '#pagination ul li.next a'
    }
    clickButton(buttonElement) {
        cy.get(buttonElement).click()
    }
    clickButton(buttonElement, cnt) {
        let i = 1
        do {
        cy.get(buttonElement).click()
        i++
        } while (i <= cnt)
    }
    sendText(locator, text) {
        cy.get(locator).type(text)
    }
    sendCompany(companyValue) {
        this.elements.companyDropdown().select(companyValue)
    }
    navigate(cnt) {
        for (let i = 1; i <= cnt; i++) {
            this.elements.nextBtn().click()
        }
    }
}

module.exports = new computerDatabasePage();