class Login{

    login(){
        cy.get('.member-login-btn').click();
        cy.get('#header-email').click().type('nofito5042@atinjo.com');
        cy.get('#header-password').click().type('Nofito.50?');
        cy.get('#login-btn-322').click();
        cy.wait(1000);

    }
}

export default new Login();