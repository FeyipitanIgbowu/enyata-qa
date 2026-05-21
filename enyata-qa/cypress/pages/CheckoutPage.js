class CheckoutPage {
  fillFirstName(name) {
    cy.get('[data-test="firstName"]').clear().type(name);
  }

  fillLastName(name) {
    cy.get('[data-test="lastName"]').clear().type(name);
  }

  fillZipCode(zip) {
    cy.get('[data-test="postalCode"]').clear().type(zip);
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click();
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click();
  }

  getConfirmationMessage() {
    return cy.get('.complete-header');
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  fillCheckoutInfo(firstName, lastName, zipCode) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillZipCode(zipCode);
    this.clickContinue();
  }
}

export default new CheckoutPage();
