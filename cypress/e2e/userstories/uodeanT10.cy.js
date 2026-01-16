import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";

describe('Uye Olmadan Devam Etme Akisi Negatif', () => {

    it('T10_Uye Olmadan Devam Etme Akisi Negatif', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromMiniCart();
        CartPage.clickBuyNowFromCart();
        cy.location('pathname').should('include', 'siparis-uye-giris');
        CartPage.continueAsGuest();
        cy.location('pathname').should('include', 'order/address');
        CartPage.fillShippingAddress();
        
    });
});