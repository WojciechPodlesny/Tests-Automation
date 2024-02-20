/// <reference types="cypress" />

import registrationPage from "../support/PageObject/registrationPage";
import HomePage from "../support/PageObject/HomePage";

describe("E2e - Register User", () => {
    it("Test Case 1: Register User", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        registrationPage.clickOnSignUp();
        registrationPage.verifyText();
        registrationPage.fillNameAndEmail();
        registrationPage.clickOnButtonSignUp();
        registrationPage.verifyAccountInformation();
        registrationPage.fillInformationAccount();
        registrationPage.selectCheckbox();
        registrationPage.fillAddressInformation();
        registrationPage.clickCreateAccount();
        registrationPage.verifyAccountCreated();
        registrationPage.clickButtonContinue();
        registrationPage.verifyTextLoggedUser();
        registrationPage.clickDeleteAccount();
        registrationPage.veryTextAccountDelete();
        registrationPage.clickButtonContinue();
    })

    
    it("Test Case 2: Register User with existing email", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        registrationPage.clickOnSignUp();
        registrationPage.verifyText();
        registrationPage.fillNameAndEmail();
        registrationPage.clickOnButtonSignUp();
        registrationPage.verifyTextRegistrationUser();
    })
})
