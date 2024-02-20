class ContactUs {
    
    get ContactUs() {
        return cy.get('li').parents('.navbar-nav').find('li').eq(7);
    }

    get inputName() {
        return cy.get('[placeholder="Name"]');
    }

    get inputEmail() {
        return cy.get('[placeholder="Email"]');
    }

    get inputSubject() {
        return cy.get('[placeholder="Subject"]');
    }

    get inputMessage() {
        return cy.get('[placeholder="Your Message Here"]');
    }

    get inputFile() {
        return cy.get('[name="upload_file"]');
    }

    get inputSubmit() {
        return cy.get('[name="submit"]');
    }
    
    get buttonHome() {
        return cy.get('.btn-success');
    }

    clickContactUs() {
        this.ContactUs.click();
    }

    fillName() {
        cy.get('[placeholder="Name"]').type('Wojtek');
    }

    fillEmail() {
        cy.get('[placeholder="Email"]').type("masterrrrvjc@gmailvn.net");
    }

    fillSubject() {
        cy.get('[placeholder="Subject"]').type('Hello');
    }

    fillMessage() {
        cy.get('[placeholder="Your Message Here"]').type('Hello World');
    }  

    clickButtonSubmit() {
        this.inputSubmit.click();
    }

    verifyGetInTouch() {
        cy.contains('Get In Touch').should('be.visible');
    }

    verifyAddToFileText() {
        cy.contains("Success! Your details have been submitted successfully.").should("be.visible");
    }

    clickButtonHome() {
        this.buttonHome.click();
    }
}

export default new ContactUs()