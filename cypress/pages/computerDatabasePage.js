class computerDatabasePage {
    elements = {
        addBtn : () => cy.get('#add'),
        nameTxt : () => cy.get('#name'),
        introducedTxt : () => cy.get('#introduced'),
        discontinuedTxt : () => cy.get('#discontinued'),
        companyDropdown : () => cy.get('#company'),
        submitBtn : () => cy.get('[type=submit]'),
        warningMsg : () => cy.get('.warning'),
        searchBox : () => cy.get('#searchbox'),
        searchSubmit : () => cy.get('#searchsubmit'),
        rowCount : () => cy.get('table.computers tbody tr'),
        getMessage : () => cy.get('#main')
    }
    addComputer() {
        this.elements.addBtn().click()
    }
    sendComputerName(computerName) {
        this.elements.nameTxt().type(computerName)
    }
    sendIntroducedDate(introducedDate) {
        this.elements.introducedTxt().type(introducedDate)
    }
    sendDiscontinuedDate(discontinuedDate) {
        this.elements.discontinuedTxt().type(discontinuedDate)
    }
    sendCompany(companyValue) {
        this.elements.companyDropdown().select(companyValue)
    }
    createComputer() {
        this.elements.submitBtn().click()
    }
    sendSearchText() {
        this.elements.searchBox().type('ACE')
    }
    searchComputers() {
        this.elements.searchSubmit().click()
    }
}

module.exports = new computerDatabasePage();