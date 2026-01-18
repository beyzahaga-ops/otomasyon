import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";

describe('Giris Yapilmamissa Odeme Adimina Geciste Yonlendirme', () => {

    it('T12_Giris Yapilmamissa Odeme Adimina Geciste Yonlendirme', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromMiniCart();
        CartPage.verifyUserOnCartPage();
        CartPage.clickBuyNowFromCart();
        CartPage.verifyOrderLoginPage();
        CartPage.continueAsGuest();
        CartPage.verifyOrderAddressPage();
        CartPage.fillShippingAddress();
        CartPage.verifyOrderPaymentPage();
    });
});