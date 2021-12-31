/// <reference types="Cypress" />


describe('Alerts testing', function() {
    it('Simple alert', function() {
        cy.visit("https://demoqa.com/alerts");
        cy.get('#alertButton').click();
       
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button');            
        });       
    });

    it('Timeout alert', function() {
        cy.get('#timerAlertButton').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('This alert appeared after 5 seconds');
        });
    });

    it('Confirm', function() {
        cy.on('window:confirm', () => {
            return false;
        });

        cy.get('#confirmButton').click();    
        cy.get('#confirmResult').should('contain.text', 'Cancel');
        

        // cy.removeAllListeners('window:confirm');
        // cy.get('#confirmButton').click(); 
        // cy.get('#confirmResult').should('contain.text', 'Ok');
    });

    it('Prompt', function() {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('123');
            cy.get('#promtButton').click();
            cy.get('#promptResult').contains('123');
        });
    });

});

