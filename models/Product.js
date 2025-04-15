class Product {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    static #products = [];

    static getAll = () => {
        return Product.#products;
    };
    
    static add = (product) => {
        Product.#products.push(product);
    };
    
    static findByName = (name) => {
        return Product.#products.find((product) => product.name === name);
    };
    
    static deleteByName = (name) => {
        this.#products = this.#products.filter(product => product.name !== name);
    };

    static getLast = () => {
        return Product.#products[Product.#products.length - 1];
    };

}

module.exports = Product