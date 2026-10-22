class Product {
    productID;
    name;
    price;
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log(`ID: ${this.productID} | Name: ${this.name} | Price: ₹${this.price}`);
    }
}
class ElectronicProduct extends Product {
    calculateFinalPrice() {
        return this.price - this.price * 0.10; // 10% discount
    }
}
class GroceryProduct extends Product {
    calculateFinalPrice() {
        return this.price - this.price * 0.05; // 5% discount
    }
}
const tv = new ElectronicProduct(1, "Television", 30000);
const rice = new GroceryProduct(2, "Basmati Rice", 800);
tv.displayInfo();
console.log(`Final Price (after 10% discount): ₹${tv.calculateFinalPrice()}`);
rice.displayInfo();
console.log(`Final Price (after 5% discount): ₹${rice.calculateFinalPrice()}`);
export {};
// const p = new Product(3, "Test", 100); // Error: cannot create an instance of an abstract class
