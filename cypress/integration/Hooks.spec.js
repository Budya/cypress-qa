/// <reference types="Cypress" />


describe('Hooks', function() {
    before(function() {
        cy.log('Before All Hook rise');
    });

    after(function() {
        cy.log('After All Hook rise');
    });

    beforeEach(function() {
        cy.log('Before Each Hook rise');
    });

    afterEach(function() {
        cy.log('After Each Hook rise');
    });
    
    it('Test 1', function() {
        cy.log('Test 1 ************************');         
    });
    it('Test 2', function() {
        cy.log('Test 2 ************************');         
    });
    it('Test 3', function() {
        cy.log('Test 3 ************************');         
    });
    it('Test 4', function() {
        cy.log('Test 4 ************************');         
    });
});