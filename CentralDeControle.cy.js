/// <reference types="Cypress"/>  

import Exportador from "../../support/PageObject/NovoExportador-PageObjects"

//beforeEach(() => {
//    cy.visit('https://qa-control-panel.godati.com.br/')
//    cy.wait(2000)
//  })

  describe('Central de Controle',() => {

    it('Entrando Dados Básicos',() => {
    cy.visit('https://qa-control-panel.godati.com.br')
    cy.wait(2000)
    cy.get('[data-testid="icon-quick-menu"]').click({force: true})
    cy.wait(2000)
    cy.get('.sc-jiaSqj > [href="/control-panel"]').click({force: true})
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-eXzmLu > .sc-iqziPC').click({force: true})
    cy.wait(2000)
    cy.get('[class="sc-bxosTz jLrJfL"]').click({force: true})
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-heKikV').type('Matheus Cypress 6')
    cy.wait(2000)
    cy.get(':nth-child(2) > [data-testid="dropdown-custom"]').click({force: true})
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-iLrwWu').contains('Matriz').click({force: true})
    cy.wait(2000)
    cy.get(':nth-child(3) > .sc-heKikV').type('79.125.249/0001-83')
    cy.wait(2000)
    cy.get(':nth-child(4) > [data-testid="dropdown-custom"]').click({force: true})
    cy.wait(2000)
    cy.get(':nth-child(3) > .sc-iLrwWu').contains('Brasil').click({force: true})
    cy.wait(2000)
    cy.get('.bSoSaU').click({force: true})
    cy.wait(6000)
    cy.get('.MuiButtonBase-root').click({force: true})
    cy.wait(6000)
    
})

})