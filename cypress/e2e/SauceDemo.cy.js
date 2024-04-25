const { should } = require("chai")

describe('template spec', () => {
  it('passes', () => {

    let login =  '#login-button'
    let password = '#password'
    let user = '#user-name'

    cy.visit('https://www.saucedemo.com')
    cy.get(user).type('standard_user')
    cy.get(password).type('secret_sauce') 
    cy.get(login).click()
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
    cy.get('#react-burger-menu-btn').should('exist').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

    cy.get(login).should('exist')

  })
  
})