import CheckoutPage from "../page-objects/checkout.page"
const checkoutPage = new CheckoutPage();
const assert = require('assert');

class Checkout{
    checkoutPageAssert(){
        const headerText = $(checkoutPage.header).getText();
        if($(checkoutPage.header).waitForDisplayed(3000)){
            assert.strictEqual(headerText,"Checkout: Your Information");
        }
    }
}

export const checkout = new Checkout();