class HomePage{

    productCard = '.swiper-slide.product-item.effect-wrapper';
    addToCartButton = '.add-to-cart-btn';
    acceptCookiesButton = '.cc-nb-okagree';
    
    navigateUrl(){
        cy.visit('https://www.kitapsepeti.com/')
    }

    scrollToFirstProduct() {
        cy.get(this.productCard)
        .eq(0)
        .scrollIntoView({ duration: 250 });
    }
    

    hoverOnFirstProduct() {
        cy.get(this.productCard)
        .eq(0)
        .trigger('mouseover');
    }

    clickAddToCartButton() {
        cy.get(this.productCard)
        .eq(0)
        .trigger('mouseover');

        cy.get(this.productCard)
        .eq(0)
        .find(this.addToCartButton)
        .click({ force: true });
    }

    acceptCookies(){
        cy.get(this.acceptCookiesButton)
        .should('be.visible')
        .click();
    }
}

export default new HomePage()

