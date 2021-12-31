/// <reference types="Cypress" />

import LoginPage from './PageObjects/LoginPage';

describe('POM pattern', function() {   

    it('POM pattern demo', function() {
        const lp = new LoginPage();
        lp.visit();
        lp.fillEmail('admin@yourstore.com');
        lp.fillPassword('admin');
        lp.submit();
        cy.title().should('include', 'administration');
    });
});