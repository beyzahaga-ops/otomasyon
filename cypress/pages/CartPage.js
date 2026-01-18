class CartPage{

    goToCartButton = '#cart-popup-go-cart';
    
    openCartPageFromHeaderButton = '#header-cart-btn > .d-none';
    openCartFromPopUp = '#go-cart-btn';

    emptyCartMessage = '.fw-light';

    cartItemTitle = '.cart-item-title';
    cartItemPrice = '.fw-medium';
    cartItemTotalPrice = '.col-md > .fw-bold';
    cartItemImage = '.image-inner > .border-round';

    removeItemButton = '#delete-product-5489650 > .ti-trash-o';
    confirmRemoveButton = '.t-popconfirm-buttons > .btn-light';

    increaseQuantityButton = '#qty-plus5489650';
    decreaseQuantityButton = '#qty-minus5489650';

    quantityInput = '#qty5489650';
    
    cartPageButtonArea = '.cart-page-buttons';
    
    cartTotalsContainer = '#cart-price-container > .p-2';

    buyNowButton = '#cart-buy-btn > .fw-bold';
    
    continueAsGuestButton = '#membership-form-131 > .w-100';

    shippingForm = '#order-address-form';
    companyCheckbox = '[name="is_company_active"]';

    emailInput = '[name="email"]';
    fullNameInput = '[name="fullname"]';
    countrySelect = '[name="country_code"]';
    citySelect = '[name="city_code"]';
    townSelect = '[name="town_code"]';
    districtSelect = '[name="district_code"]';
    addressTextarea = '[name="address"]';
    phoneInput = '[name="mobile_phone"]';

    saveAddressButton = '.col-12 > .btn';
    saveAddressSpan = '.col-12 > .btn > span';

    miniCartGoToCartButton = '#cart-popup-go-cart';

    
    navigateUrl(){
        cy.visit('https://www.kitapsepeti.com/')
    }
    

    openCartPageFromHeader(){
        cy.get(this.openCartPageFromHeaderButton).scrollIntoView().click({ force: true });
        cy.get(this.openCartFromPopUp).click();
    }

    goToCartFromPopup() {
        cy.get(this.goToCartButton)
        .should('be.visible')
        .click();
    }

    verifyCartPageOpened(){
        cy.url().should('include', '/sepet');
        cy.contains('Sepetim').should('be.visible');
    }

    verifyCartIsEmpty(){
        cy.get(this.emptyCartMessage).should('contain.text', 'Sepetinizde Ürün Bulunmamaktadır');
    }

    verifyProductDetails(){
    cy.get(this.cartItemTitle).should('be.visible');
    cy.get(this.cartItemPrice).should('be.visible');
    cy.get(this.cartItemTotalPrice).should('be.visible');
    cy.get(this.cartItemImage).should('be.visible');
    }

    removeProductFromCart(){
    cy.get(this.removeItemButton).should('be.visible').click();
    cy.get(this.confirmRemoveButton).should('be.visible').click();
    }

    verifyCartIsEmptyAfterRemove(){
        cy.get(this.emptyCartMessage).should('be.visible')
    }

    increaseCartItemQuantity(){
        cy.get(this.increaseQuantityButton).should('be.visible').click({ scrollBehavior: false });
        cy.wait(5000)
    }

    decreaseCartItemQuantity(){
        cy.get(this.decreaseQuantityButton).click({ scrollBehavior: false });
    }

    enterInvalidCartItemQuantity(){
        cy.get(this.quantityInput).should('be.visible').clear().type('2440{enter}', { scrollBehavior: false, delay: 100});
    }

    clickOutsideCartArea(){
        cy.get(this.cartPageButtonArea).click();
    }

    enterZeroCartItemQuantity(){
        cy.get(this.quantityInput).should('be.visible').clear().type('0{enter}', { scrollBehavior: false, delay: 100});
    }

    verifyCartTotalsDisplayed(){
        cy.get(this.cartTotalsContainer).should('be.visible');
    }

    enterValidCartItemQuantity(){
        cy.get(this.quantityInput).should('be.visible').clear().type('5{enter}', { scrollBehavior: false, delay: 100});

    }

    clickBuyNowFromCart(){
        cy.get(this.buyNowButton).should('be.visible').click();
    }

    continueAsGuest(){
        cy.get(this.continueAsGuestButton).should('be.visible').click();
    }

    fillShippingAddress(){
        cy.get(this.companyCheckbox).should('be.visible')
        cy.get(this.emailInput).click().scrollIntoView().type('bnhke@gmail.com');
        cy.get(this.fullNameInput).click().scrollIntoView().type('bnhke abcd');
        cy.get(this.countrySelect).select('Türkiye');
        cy.get(this.citySelect).should('be.visible').select('Ankara');
        cy.get(this.townSelect).should('be.visible').select('Etimesgut');
        cy.get(this.districtSelect).should('be.visible').select('ALTAY MAH');
        cy.get(this.addressTextarea).click().scrollIntoView().type('abc mah. def cad. klm sokak 1/14');
        cy.get(this.shippingForm).click();
        cy.get(this.phoneInput).click().scrollIntoView().type('01234567898');
        cy.get(this.saveAddressButton).click();

    }

    openCartPageFromMiniCart(){
        cy.get(this.miniCartGoToCartButton).should('be.visible').click();
    }

    saveShippingAddress(){
        cy.get(this.saveAddressButton).scrollIntoView().should('be.visible').click();
    }

    verifyUserOnCartPage() {
        cy.location('pathname').should('eq', '/sepet')
    }

    verifyOrderLoginPage(){
        cy.location('pathname').should('include', 'siparis-uye-giris');
    }

    verifyOrderAddressPage(){
        cy.location('pathname').should('include', 'order/address');
    }

    verifyOrderPaymentPage(){
        cy.location('pathname').should('include', 'order/payment');
    }
}


export default new CartPage();