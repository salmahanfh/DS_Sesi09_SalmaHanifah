const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnAddCart () {return $('.add-to-cart-sauce-labs-backpack');}

    async validateProductDetail() {
        expect(browser).toHaveUrlContaining('inventory-item.html?id=4')
        expect(this.btnAddCart).toBeDisplayed();
    }

    open () {
        return super.open('inventory-item.html?id=4');
    }
}

module.exports = new ProductPage();
