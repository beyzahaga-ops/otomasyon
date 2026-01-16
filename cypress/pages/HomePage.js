class HomePage{
    
    navigateUrl(){
        cy.visit('https://www.kitapsepeti.com/')
    }

    scrollToFirstProduct() {
        cy.get('.swiper-slide.product-item.effect-wrapper')
        .eq(0)
        .scrollIntoView({ duration: 250 });
    }
    

    hoverOnFirstProduct() {
        cy.get('.swiper-slide.product-item.effect-wrapper')
        .eq(0)
        .trigger('mouseover');
    }

    clickAddToCartButton() {
        cy.get('.swiper-slide.product-item.effect-wrapper')
        .eq(0)
        .find('.add-to-cart-btn')
        .click({ force:true });
    }

    acceptCookies(){
        cy.get('.cc-nb-okagree').click();
    }
}

export default new HomePage()

