import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Urun Miktari Guncelleme', () => {

    it('T05_Urun Miktari Guncelleme', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        Login.login();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromHeader();
        CartPage.increaseCartItemQuantity();
        CartPage.decreaseCartItemQuantity();
        cy.location('pathname').should('include', 'sepet');

        
    });
});