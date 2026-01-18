import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";

describe('Giris Yapilmamissa Odeme Adimina Geciste Yonlendirme Negatif', () => {

    it('T13_Giris Yapilmamissa Odeme Adimina Geciste Negatif', () => {
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
        CartPage.saveShippingAddress();
        
    });
});