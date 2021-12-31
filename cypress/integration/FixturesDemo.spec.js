/// <reference types="Cypress" />


describe('Fixsures', function() {
    before(function() {
        cy.fixture('creds').then(function(data){
            this.data = data;
        });
    });

    it('Fixtures Demo', function() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('input[name=Email]').clear();
        cy.get('input[name=Email]').type(this.data.email);
        cy.get('input[name=Password]').clear().type(this.data.password);
        cy.get('button[type=submit]').click();
        cy.title().should('include', 'administration'); 
    });
});

