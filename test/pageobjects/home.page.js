const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get iconCart () {return $('.shopping_cart_link');}
    get txtProduct () {return $('.inventory_item_name');}

    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html');
        expect(this.iconCart).toBeDisplayed();
    }
    
    async clickproduct() {
        await this.txtProduct.click();
    }

    async cart() {
        await this.iconCart.click();
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
