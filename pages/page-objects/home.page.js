export default class LoginPage {
    get homePageTitle() {return '.product_label'}
    get productSortPreference() {return '.product_sort_container'}
    get productList() {return '.inventory_item'}
    selectedProduct(productNumber) {return `//div[@class="inventory_item"][${productNumber}]/div[3]/button`}
    get shoppingCart() {return '#shopping_cart_container'}
    get cartBadge() {return '.shopping_cart_badge'}
}