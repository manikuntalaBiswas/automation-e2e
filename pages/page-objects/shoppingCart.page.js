export default class CartPage {
    get price() {return '.inventory_item_price'}
    firstRemoveButton(productToBeRemoved) {return `//*[contains(text(), ${productToBeRemoved})]//following-sibling::button`}
    get checkoutButton() {return '.btn_action'}

}