import CartPage from "../../pages/CartPage";
import  HomePage  from "../../pages/HomePage";

describe('Uye Olmadan Devam Etme Akisi', () => {

    it('T11_Uye Olmadan Devam Etme Akisi', () => {
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

   });
})