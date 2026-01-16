import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Urun Miktari Guncelleme Negatif', () => {
 
    it('T06_Urun Miktari Guncelleme Negatif', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        Login.login();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromMiniCart();
        CartPage.enterInvalidCartItemQuantity();
        CartPage.clickOutsideCartArea();

    });
});