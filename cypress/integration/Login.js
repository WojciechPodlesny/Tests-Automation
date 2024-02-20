/// <reference types="cypress" />

import loginPage from "../support/PageObject/loginPage";
import HomePage from "../support/PageObject/HomePage";

describe("E2e - Login User", () => {
    it.only("Test Case 1: Login User with correct email and password", () => {
        // cy.openHomePage();
        // HomePage.verifyHomePage();
        // loginPage.clickLogin();
        // loginPage.verifyLoginPage(); 
        // loginPage.fillEmailAndPassword();
        // loginPage.clickButtonLogin();
        // loginPage.verifyTextLoggedUser();
        // loginPage.deleteAccount();
        // loginPage.veryTextAccountDelete(); 
    })
   

    it("Test Case 2: Login User with incorrect email and password", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        loginPage.clickLogin();
        loginPage.verifyLoginPage();
        loginPage.fillEmailAndPassword();
        loginPage.clickButtonLogin();
        cy.contains('Your email or password is incorrect!').should('be.visible');  
    })
    
    it("Test Case 3: Logout User", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        loginPage.clickLogin();
        loginPage.verifyLoginPage();
        loginPage.fillEmailAndPassword();
        loginPage.clickButtonLogin();
        loginPage.verifyTextLoggedUser();
        loginPage.logoutAccount();
        loginPage.verifyLoginPage();
    })
 })