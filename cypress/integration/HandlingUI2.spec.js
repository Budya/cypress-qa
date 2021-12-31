/// <reference types="Cypress" />

//https://www.youtube.com/watch?v=yzfp85bVUjY&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=12

describe('UI 2', function() {
    it('Interacting with check boxes', function() {
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.title().should('eq', 'Register');

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey');

        cy.get('#checkbox1').uncheck().should('not.be.checked');
        cy.get('#checkbox2').uncheck().should('not.be.checked');
        cy.get('#checkbox3').uncheck().should('not.be.checked');

        cy.get('[type=checkbox]').check(['Cricket', 'Hockey']);
    });

    it('Interacting with drop downs', function() {
        cy.get('#Skills').select('Android').should('have.value', 'Android');
    });

    it('Multi select', function() {
        cy.get('#msdd').click();
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('.ui-corner-all').contains('Japanese').click();

    });

    it('Drop down', function() {
        cy.get('[role=combobox]').click({force: true});
        cy.get('.select2-search__field').type('Nether');
        cy.get('.select2-search__field').type('{enter}');
    });

})

