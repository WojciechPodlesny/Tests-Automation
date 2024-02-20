class registrationPage {

  get SignUp() {
    return cy.get('li').parents('.navbar-nav').find('li').eq(3);
  }

  get buttonSignUp() {
    return cy.get('button[data-qa="signup-button"]');
  }

  get inputName() {
    return cy.get('[placeholder="Name"]');
  }

  get inputEmail() {
    return cy.get('[data-qa="signup-email"]');
  }

  get createAccount() {
    return cy.get('[data-qa="create-account"]');
  }

  get buttonContinue() {
    return cy.get('[data-qa="continue-button"]');
  }

  get buttonDeleteAccount() {
    return cy.get('[href="/delete_account"]');
  }

  get inputTitle() {
    return cy.get('[value="Mr"]');
  }

  get inputPassword() {
    return cy.get('[data-qa="password"]');
  }

  get inputDays() {
    return cy.get('#days');
  }

  get inputMonths() {
    return cy.get('#months');
  }

  get inputYears() {
    return cy.get('#years');
  }

  get inputFirstName() {
    return cy.get('[data-qa="first_name"]')
  }

  get inputLastName() {
    return cy.get('[data-qa="last_name"]')
  }

  get inputCompany() {
    return cy.get('[data-qa="company"]');
  }

  get inputAddress() {
    return cy.get('[name="address1"]');
  }

  get inputAddress2() {
    return cy.get('[name="address2"]');
  }

  get inputCountry() {
    return cy.get('#country');
  }

  get inputState() {
    return cy.get('[data-qa="state"]');
  }

  get inputCity() {
    return cy.get('[data-qa="city"]');
  }

  get inputZipCode() {
    return cy.get('[data-qa="zipcode"]');
  }

  get inputMobileNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }

  clickOnSignUp() {
    this.SignUp.click();
  }

  clickOnButtonSignUp() {
    this.buttonSignUp.click();
  }

  verifyText() {
    cy.contains("New User Signup!").should("be.visible");
  }

  fillNameAndEmail() {
    this.inputName.type("Tomas");
    this.inputEmail.type("name2@example.com");
  }

  verifyAccountInformation() {
    cy.contains('Enter Account Information').should('be.visible');
  }

  fillInformationAccount() {
    this.inputTitle.check();
    this.inputPassword.type('Vademecum123!@');
    this.inputDays.select('2');
    this.inputMonths.select('August');
    this.inputYears.select('1990');
  }

  selectCheckbox() {
    cy.get('.checkbox').find('input').then(checkbox => {
      cy.get(checkbox).eq(0).check();
      cy.get(checkbox).eq(1).check();
    })
  }

  fillAddressInformation() {
    this.inputFirstName.type('Tomas');
    this.inputLastName.type('John');
    this.inputCompany.type("Company");
    this.inputAddress.type('1 North Dearborn St');
    this.inputAddress2.type('1 North Dearborn St');
    this.inputCountry.select('United States');
    this.inputState.type("Suite");
    this.inputCity.type("Chicago");
    this.inputZipCode.type("62602");
    this.inputMobileNumber.type("897654345678");
  }

  clickCreateAccount() {
    this.createAccount.click();
  }

  verifyAccountCreated() {
    cy.contains('Account Created!').should('be.visible');
  }

  clickButtonContinue() {
    this.buttonContinue.click();
  }

  verifyTextLoggedUser() {
    cy.contains(' Logged in as ').should('be.visible');
  }

  clickDeleteAccount() {
    this.buttonDeleteAccount.click();
  }

  veryTextAccountDelete() {
    cy.contains('Account Deleted!').should('be.visible');
  }

  verifyTextRegistrationUser() {
    cy.contains('Email Address already exist!').should('be.visible');
  }
}

export default new registrationPage();