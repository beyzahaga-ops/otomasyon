import CartPage from "../../pages/CartPage";
import HomePage from "../../pages/HomePage";

describe('Sepetteki Urun Bilgilerinin Goruntulenmesi', () => {
    it('T03_Sepetteki Urun Bilgilerinin Goruntulenmesi', () => {
        HomePage.navigateUrl();
        HomePage.acceptCookies();
        HomePage.scrollToFirstProduct();
        HomePage.hoverOnFirstProduct();
        HomePage.clickAddToCartButton();

        CartPage.openCartPageFromMiniCart();
        CartPage.verifyProductDetails();

        cy.location('pathname').should('include', 'sepet');
    });
});