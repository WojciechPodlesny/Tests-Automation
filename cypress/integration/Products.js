/// <reference types="cypress" />

import ProductsPage from "../support/PageObject/ProductsPage";
import HomePage from "../support/PageObject/HomePage";


describe("E2e - Products", () => {
    it.only("Test Case 1: Search Product", () => {
        cy.openHomePage();
        HomePage.verifyHomePage();
        ProductsPage.clickButtonProducts()
        ProductsPage.verifyAllProductsPage();
        ProductsPage.fillProductToSearch();
        ProductsPage.clickButtonSearch();
        ProductsPage.verifySearchedProductsPage();
        ProductsPage.verifyRelatedProductsPage();
    })
})    