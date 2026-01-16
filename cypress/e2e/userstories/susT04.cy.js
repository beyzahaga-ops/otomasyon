import CartPage from "../../pages/CartPage";
import HomePage from "../../pages/HomePage";

describe('Sepetten Urun Silme', () => {
    it('T04_Sepetten Urun Silme', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromMiniCart();
        CartPage.removeProductFromCart();
        CartPage.verifyCartIsEmptyAfterRemove();
    });
});