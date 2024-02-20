/// <reference types="cypress" />

import ContactUs from "../support/PageObject/ContactUsPage";
import HomePage from "../support/PageObject/HomePage";

describe("E2e - Contact us", () => {
    it("Test Case 1: Contact us form", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        ContactUs.clickContactUs();
        ContactUs.verifyGetInTouch();
        ContactUs.fillName();                
        ContactUs.fillEmail();
        ContactUs.fillSubject();
        ContactUs.fillMessage();
        ContactUs.inputFile.attachFile('../fixtures/test.jpg');
        ContactUs.clickButtonSubmit();
        ContactUs.verifyAddToFileText();
        ContactUs.clickButtonHome();
        HomePage.verifyHomePage();
    })
})