import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {

  it('Standard user can login successfully', () => {
    LoginPage.login('standard_user');
    cy.url().should('include', '/inventory');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Problem user can login successfully', () => {
    LoginPage.login('problem_user');
    cy.url().should('include', '/inventory');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Login fails with incorrect password', () => {
    LoginPage.login('standard_user', 'wrongpassword');
    LoginPage.getErrorMessage().should('be.visible');
    LoginPage.getErrorMessage().should('contain', 'Username and password do not match');
  });

  it('Login fails with empty username', () => {
    LoginPage.visit();
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
    LoginPage.getErrorMessage().should('contain', 'Username is required');
  });

  it('Login fails with empty password', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
    LoginPage.getErrorMessage().should('contain', 'Password is required');
  });

});
