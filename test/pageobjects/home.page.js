const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get iconCart () {return $('.shopping_cart_link');}
    get txtProduct () {return $('.inventory_item_name');}
    get btnAddToCart () {return $('#add-to-cart-sauce-labs-backpack');}
    get iconCartBadge () {return $('.shopping_cart_badge');}

    //for validate homepage
    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html');
        expect(this.iconCart).toBeDisplayed();
    }
    
    //for click the product's name to see product detail
    async clickProduct() {
        await this.txtProduct.click();
    }

    //for click the icon cart to open cart page
    async cart() {
        await this.iconCart.click();
    }

    //for click the Add to Cart button 
    async clickAddCart() {
        await this.btnAddToCart.click();
    }

    //for validate product added to cart (view from homepage)
    async validateAddToCart() {
        expect(browser).toHaveUrlContaining('/inventory.html');
        expect(this.iconCartBadge).toBeDisplayed();
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
