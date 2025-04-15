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
        users.push(product);
    };
    
    static findByName = (name) => {
        return Product.#products.find((product) => product.name === name);
    };
    
    static deleteByName = (name) => {
        //usunac product z tab
    };

    static getLast = () => {
        return Product.#products[Product.#products.length - 1];
    };

}

module.exports = Product