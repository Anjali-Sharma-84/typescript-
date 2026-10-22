class Product {
    productID;
    price;
    category;
    constructor(productID, price, category) {
        this.productID = productID;
        this.price = price;
        this.category = category;
    }
}
class ElectronicProduct extends Product {
}
const laptop = new ElectronicProduct(201, 60000, "Electronics");
console.log(laptop.productID); // OK  - public
console.log(laptop.price); // ERROR - 'price' is private
console.log(laptop.category); // ERROR - 'category' is protected
export {};
