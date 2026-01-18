import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Sepete Erisim', () => {

    beforeEach(() => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        Login.login();

    })

    it('T01_Sepete erisim', () => {
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();
        CartPage.goToCartFromPopup();
        CartPage.verifyCartPageOpened();
        CartPage.verifyUserOnCartPage();    
    });
});