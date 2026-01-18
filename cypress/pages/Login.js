class Login{

    loginButton = '.member-login-btn';
    emailnput = '#header-email';
    passwordInput = '#header-password';
    submitButton = '#login-btn-322';
    
    login(){
        cy.get(this.loginButton).click();
        cy.get(this.emailnput).click().type('nofito5042@atinjo.com');
        cy.get(this.passwordInput).click().type('Nofito.50?');
        cy.get(this.submitButton).click();

    }
}

export default new Login();