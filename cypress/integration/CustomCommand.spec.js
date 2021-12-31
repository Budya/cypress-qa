/// <reference types="Cypress" />


describe('Custom command', function(){
    
    it('Login test', function() {
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('include', 'administration');        
    });

    it('Add customer', function() {
        cy.login('admin@yourstore.com', 'admin');
        
    });

    it('Edit customer', function() {
        cy.login('admin@yourstore.com', 'admin');
        
    });
});