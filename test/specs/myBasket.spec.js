import { common } from "../../pages/page-actions/common.action"
import { login} from "../../pages/page-actions/login.action"
import { home} from "../../pages/page-actions/home.action"
import { shoppingCart } from "../../pages/page-actions/shoppingCart.action"
import { checkout } from "../../pages/page-actions/checkout.action"
describe('My basket', () => {
    before(() => {
        common.openLandingPage();
    });
    it('user should be able to add and delete item from basket and proceed to checkout', () => {
        login.login('standard_user');
        home.sortProduct();
        home.addToBasket();
        home.openBasket();
        shoppingCart.removeCheapestProductFromBasket();
        shoppingCart.proceedToCheckout();
        checkout.checkoutPageAssert();
    });
});