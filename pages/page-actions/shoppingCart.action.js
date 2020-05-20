import CartPage from "../page-objects/shoppingCart.page"
import HomePage from "../page-objects/home.page"
const homePage = new HomePage();
const cartPage = new CartPage();
const assert = require('assert');

class ShoppingCart{
    removeCheapestProductFromBasket(){
        if($(cartPage.checkoutButton).waitForDisplayed(3000)){
            const priceList = $$(cartPage.price);
            const arr = new Array();
            priceList.forEach(element => {
                arr.push(element.getText());
                arr.sort();    //Sorting the price array to get the cheapest product
            });
            $(cartPage.firstRemoveButton(arr[0])).click();
            assert.strictEqual($(homePage.cartBadge).getText(),"1");
        }
    }
    proceedToCheckout(){
        if($(cartPage.checkoutButton).waitForDisplayed(3000)){
            $(cartPage.checkoutButton).click();
        }
    }
}

export const shoppingCart = new ShoppingCart();