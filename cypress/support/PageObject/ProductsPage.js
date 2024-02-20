class ProductsPage {

  get Products() {
    return cy.get('li').parents('.navbar-nav').find('li').eq(1);
  }

  get inputSearch() {
    return cy.get('#search_product')
  }

  get submitSearch() {
    return cy.get('#submit_search')
  }

  clickButtonProducts() {
    this.Products.click(); 
  }

  verifyAllProductsPage() {
    cy.get('.features_items').should('be.visible');
  }

  fillProductToSearch() {
      this.inputSearch.type('Sleeveless Dress');
    }

  clickButtonSearch() {
    this.submitSearch.click();
  }

  verifySearchedProductsPage() {
    cy.contains('Searched Products').should('be.visible');
  }

  verifyRelatedProductsPage() {
    cy.get('.single-products').should('be.visible');      
  }
}

export default new ProductsPage();