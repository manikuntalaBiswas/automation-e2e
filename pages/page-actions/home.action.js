import HomePage from "../page-objects/home.page"
const homePage = new HomePage();
const assert = require('assert');
class Home{
    sortProduct(){
        if($(homePage.homePageTitle).waitForDisplayed(3000)){
            $(homePage.productSortPreference).selectByVisibleText("Price (high to low)");
        }
    }
    addToBasket(){
        if($(homePage.selectedProduct(1)).waitForDisplayed(3000)){
            const productListLength = $$(homePage.productList).length;
            $(homePage.selectedProduct(productListLength)).click();
            $(homePage.selectedProduct(productListLength-1)).click();
            assert.strictEqual($(homePage.cartBadge).getText(),"2");
        }
    }
    openBasket(){
        if($(homePage.shoppingCart).waitForDisplayed(3000)){
            $(homePage.shoppingCart).click();
        }
    }
}
export const home = new Home();