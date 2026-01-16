import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Toplam Fiyat Ve Kargo Bilgisi Negatif', () => {

    it('T09_Toplam Fiyat Ve Kargo Bilgisi Negatif', () => {

        HomePage.navigateUrl();
        HomePage.acceptCookies();
        Login.login();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromHeader();
        CartPage.enterValidCartItemQuantity();
        CartPage.clickOutsideCartArea();
        CartPage.verifyCartTotalsDisplayed();

        
    });
});