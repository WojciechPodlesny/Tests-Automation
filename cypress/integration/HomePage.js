/// <reference types="cypress" />

import HomePage from "../support/PageObject/HomePage";

describe("E2e - Home Page", () => {
    it("Test Case 1: Verify Subscription in home page", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        HomePage.inputSusbscribeEmail.scrollIntoView();
        HomePage.verifySubscriptionText();
        HomePage.fillEmail();
        HomePage.clickButton();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })
})

describe("E2e - Home Page", () => {
    it("Test Case 2: Verify Subscription in Cart page", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        HomePage.clickCart();
        HomePage.inputSusbscribeEmail.scrollIntoView();
        HomePage.verifySubscriptionText();
        HomePage.fillEmail();
        HomePage.clickButton();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })
})

describe("E2e - Home Page", () => {
    it("Test Case 3: Verify Test Cases Page", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        HomePage.clickTestCases();
        HomePage.verifyTextCasesText();     
    })
})