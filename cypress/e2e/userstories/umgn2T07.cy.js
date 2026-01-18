import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Urun Miktari Guncelleme Negatif Iki', () => {

    it('T07_Urun Miktari Guncelleme Negatif Iki', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        Login.login();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.goToCartFromPopup();
        CartPage.verifyUserOnCartPage();
        CartPage.enterZeroCartItemQuantity();
        CartPage.clickOutsideCartArea();
    });
});