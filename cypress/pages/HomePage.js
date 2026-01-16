class HomePage{
    
    navigateUrl(){
        cy.visit('https://www.kitapsepeti.com/')
    }

    scrollToFirstProduct(){
         cy.get('.swiper-slide.product-item.effect-wrapper')
        .first()
        .scrollIntoView({ duration: 250 });
    }
    

    hoverOnFirstProduct(){
        cy.get('.swiper-slide.product-item.effect-wrapper')
        .first()
        .trigger('mouseover', { force: true });
    }

    clickAddToCartButton(){
      cy.get('.add-to-cart-btn')
      .first()
      .should('exist')
      .click({ force: true });
    }

    acceptCookies(){
        cy.get('.cc-nb-okagree').click();
    }
}

export default new HomePage()

