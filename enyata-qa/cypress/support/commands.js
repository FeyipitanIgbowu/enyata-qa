Cypress.Commands.add('loginAs', (username) => {
  cy.visit('/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
});
