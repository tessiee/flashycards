Cypress.Commands.add('openCategory', (language, categoryNumber, setNumber) => {
    cy.get(`#category_${categoryNumber}_${language}`).click().get(`#set_${categoryNumber}_${setNumber}_${language}`).click();
})