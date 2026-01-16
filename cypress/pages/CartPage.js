class CartPage{

    navigateUrl(){
        cy.visit('https://www.kitapsepeti.com/')
    }
    

    openCartPageFromHeader(){
        cy.get('#header-cart-btn > .d-none').scrollIntoView().click({ force: true });
        cy.get('#go-cart-btn').click();
    }

    goToCartFromPopUp(){
        cy.get('#cart-popup-go-cart').click();
    }

    verifyCartIsEmpty(){
        cy.get('.fw-light').should('contain.text', 'Sepetinizde Ürün Bulunmamaktadır');
    }

    verifyProductDetails(){
    cy.get('.cart-item-title').should('be.visible');
    cy.get('.fw-medium').should('be.visible');
    cy.get('.col-md > .fw-bold').should('be.visible');
    cy.get('.image-inner > .border-round').should('be.visible');
    }

    removeProductFromCart(){
    cy.get('#delete-product-5489650 > .ti-trash-o').should('be.visible').click();
    cy.get('.t-popconfirm-buttons > .btn-light').should('be.visible').click();
    }

    verifyCartIsEmptyAfterRemove(){
        cy.get('.fw-light').should('be.visible')
    }

    increaseCartItemQuantity(){
        cy.get('#qty-plus5489650').should('be.visible').click({ scrollBehavior: false });
        cy.wait(5000)
    }

    decreaseCartItemQuantity(){
        cy.get('#qty-minus5489650').click({ scrollBehavior: false });
    }

    enterInvalidCartItemQuantity(){
        cy.get('#qty5489650').should('be.visible').clear().type('2440{enter}', { scrollBehavior: false, delay: 100});
    }

    clickOutsideCartArea(){
        cy.get('.cart-page-buttons').click();
    }

    enterZeroCartItemQuantity(){
        cy.get('#qty5489650').should('be.visible').clear().type('0{enter}', { scrollBehavior: false, delay: 100});
    }

    verifyCartTotalsDisplayed(){
        cy.get('#cart-price-container > .p-2').should('be.visible');
    }

    enterValidCartItemQuantity(){
        cy.get('#qty5489650').should('be.visible').clear().type('5{enter}', { scrollBehavior: false, delay: 100});

    }

    clickBuyNowFromCart(){
        cy.get('#cart-buy-btn > .fw-bold').should('be.visible').click();
    }

    continueAsGuest(){
        cy.get('#membership-form-131 > .w-100').should('be.visible').click();
    }

    fillShippingAddress(){
        cy.get('[name="is_company_active"]').should('be.visible')
        cy.get('[name="email"]').click().scrollIntoView().type('bnhke@gmail.com');
        cy.get('[name="fullname"]').click().scrollIntoView().type('bnhke abcd');
        cy.get('[name="country_code"]').select('Türkiye');
        cy.get('[name="city_code"]').should('be.visible').select('Ankara');
        cy.get('[name="town_code"]').should('be.visible').select('Etimesgut');
        cy.get('[name="district_code"]').should('be.visible').select('ALTAY MAH');
        cy.get('[name="address"]').click().scrollIntoView().type('abc mah. def cad. klm sokak 1/14');
        cy.get('#order-address-form').click();
        cy.get('[name="mobile_phone"]').click().scrollIntoView().type('01234567898');
        cy.get('.col-12 > .btn').click();

    }

    openCartPageFromMiniCart(){
        cy.get('#cart-popup-go-cart').should('be.visible').click();
    }

    saveShippingAddress(){
        cy.get('.col-12 > .btn > span').scrollIntoView().should('be.visible').click();
    }
}


export default new CartPage();