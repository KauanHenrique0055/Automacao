/// <reference types="Cypress"/>


describe('login Enviando', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://proxys.enviando.stage.nordware.io/")
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type("suporte_enviando")
        cy.get(':nth-child(4) > .col-xs-12 > .form-control').type("Suporte!@#Proxys")
        cy.get('.btn').click()
        cy.get('.page-title').should('contain','Bem-vindo Suporte!')
        cy.visit('https://proxys.enviando.stage.nordware.io/orders/box/list/')
        cy.get('.col-sm-3 > .btn').click()
        cy.get('#id_barcode').type("CAIXATESTE001")
        cy.get('[name="save"]').click()
        cy.get('.input-group > .form-control').type("CAIXATESTE001")
        cy.get('.btn > .fa').click()
        cy.get('[style="width: 175px;"] > .btn-primary').click()
        cy.get('#id_barcode').clear()
        cy.get('#id_barcode').type("TESTESCAIXAS1")
        cy.get('.btn').click()
        cy.get('.input-group > .form-control').type("TESTESCAIXAS1")
        cy.get('.input-group-btn > .btn').click()
        cy.get('.btn-danger').click()
        cy.get('.btn-danger').click()
    })
})