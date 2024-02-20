class LoginPage {

  get Login() {
    return cy.get('li').parents('.navbar-nav').find('li').eq(3);
  }

  get buttonLogin() {
    return cy.get('button[data-qa="login-button"]');
  }

  get inputEmail() {
    return cy.get('[data-qa="login-email"]');
  }

  get inputPassword() {
    return cy.get('[name="password"]');
  }

  get buttonDeleteAccount() {
    return cy.get('[href="/delete_account"]');
  }

  get buttonLogout() {
    return cy.get('[href="/logout"]');
  }

  clickLogin() {
    this.Login.click();
  }

  clickButtonLogin() {
    this.buttonLogin.click();
  }

  verifyLoginPage() {
    cy.contains("Login to your account").should("contain", "Login to your account");
  }

  fillEmailAndPassword() {
    this.inputEmail.type("name3@example.com");
    this.inputPassword.type("Vademecum123!!");
  }

  deleteAccount() {
    this.buttonDeleteAccount.click();
  }

  logoutAccount() {
    this.buttonLogout.click();
  }

  veryTextAccountDelete() {
    cy.contains("Account Deleted!").should("contain", "Account Deleted!"); 
  }

  verifyTextLoggedUser() {
    cy.contains(' Logged in as Wojtek ').should('be.visible');  
  }
}

export default new LoginPage();