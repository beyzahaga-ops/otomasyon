import CartPage from "../../pages/CartPage";
import HomePage from "../../pages/HomePage";
import Login from "../../pages/Login";

describe('Bos Sepet Durumu', () => {

    beforeEach(() => {
            HomePage.navigateUrl();
            HomePage.acceptCookies();
            Login.login();
    })

    it('T02_Bos Sepet Durumu', () => {
        CartPage.openCartPageFromHeader();
        CartPage.verifyCartIsEmpty();
        CartPage.verifyUserOnCartPage();

    });
});
