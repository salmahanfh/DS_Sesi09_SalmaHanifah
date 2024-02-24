const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    
    get titleCart () {return $('.title');}

    async validateCartPage() {
        expect(browser).toHaveUrlContaining('cart.html')
        expect(this.titleCart).toBeDisplayed();
    }

    open () {
        return super.open('cart.html');
    }
}

module.exports = new CartPage();
