describe('E2E Testing Using Cypress', () => {
  //TESTS TO PASS
  describe('Tests to Pass', () => {
    it('should load the page and user should see the log in application.', () => {
      cy.visit('../../S-Lab-2-codestandards.html');
    });

    it('user should be able to enter a username and password', () => {
      cy.get('.login__username').type("Ayushi").should('have.value', "Ayushi")
      cy.get('.login__password').type("abc123").should('have.value', "abc123")
    });
  });

  describe('Submit the Form', () => {
    it('Clicking on "log in" should submit the form', () => {
      cy.get('form[name="loginForm"]').submit();
    });

    it(' When the form submits, the hidden output div appears, and the User should see the values entered for username & password in the output div', () => {
      cy.get('.output').should('be.visible')
      // cy.get('.output__user').should('have.value', "Ayushi")
      // cy.get('.output__pass').should('have.value', "abc123")

      cy.get('.output__user').should('contain', "Ayushi")
      cy.get('.output__pass').should('contain', "abc123")
    });
  });

  //TESTS TO FAIL
  describe('Tests to Fail', () => {
    it('If the username box is empty when the form submits, the User should see the username background turn red and that the focus is set there.', () => {
      cy.reload();
      cy.get('form[name="loginForm"]').submit();
      cy.get('.login__username').should('have.value', "").should('have.focus').should('have.css', 'background-color').and('eq', 'rgb(255, 0, 0)')
    });

    it('If the password box is empty when the form submits, the User should see the password background turn red and that the focus is set there.  ', () => {
      cy.reload();
      cy.get('.login__username').type("Ayushi").should('have.value', "Ayushi")
      cy.get('form[name="loginForm"]').submit();
      cy.get('.login__password').should('have.value', "").should('have.focus').should('have.css', 'background-color').and('eq', 'rgb(255, 0, 0)')
    });

    
  });
})