import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Toplam Fiyat Ve Kargo Bilgisi', () => {

    it('T08_Toplam Fiyat Ve Kargo Bilgisi', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        Login.login();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.goToCartFromPopup();
        CartPage.verifyUserOnCartPage();
        CartPage.verifyCartTotalsDisplayed();
        
    });
});