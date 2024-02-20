class HomePage {

    get inputSusbscribeEmail() {
        return  cy.get('#susbscribe_email');
    }

    get buttonSusbscribe() {
       return  cy.get('button[type="submit"]');
    }
    
    get Cart() {
         return cy.get('li').parents('.navbar-nav').find('li').eq(2);
    }

    get TestCases() {
        return  cy.get('li').parents('.navbar-nav').find('li').eq(4);
    }

    verifyHomePage() {
        cy.contains("Home").should("be.visible");
    }

    fillEmail() {
        this.inputSusbscribeEmail.type('wp@wp.pl');
    }

    clickButton() {
        this.buttonSusbscribe.click();
    } 

    verifySubscriptionText() {
        cy.contains('Subscription').should('be.visible');
    } 

    clickCart() {
        this.Cart.click();
    }

    verifyTextCasesText() {
        cy.contains('Test Cases').should('be.visible');
    } 

    clickTestCases() {
        this.TestCases.click();
    }
}

export default new HomePage()