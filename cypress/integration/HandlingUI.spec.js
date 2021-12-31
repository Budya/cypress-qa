/// <reference types="Cypress" />

describe('UI elements', function() {
    it('Interacting with button, inputs & radio buttons', function() {
        cy.visit('http://demo.automationtesting.in');
        cy.title().should('eq', 'Index');

        cy.get('#btn2').click();
        cy.title().should('include', 'Register');

        const mail = 'dima@mail.com';
        const phone = '+375291234567';

        //inputs
        cy.get('input[type=email]').type(mail).should('have.value', mail);
        cy.get('input[type=tel]').type(phone).should('have.value', phone);

        //radio buttons
        cy.get('input[value=Male]').should('be.visible').should('not.be.checked');
        cy.get('input[value=FeMale]').should('be.visible').should('not.be.checked');
        cy.get('input[value=Male]').should('be.visible').should('not.be.checked').click();
        cy.get('input[value=Male]').should('be.visible').should('be.checked');


    })
})