class Product {
    static companyName = "TechStore";
    productID;
    name;
    price;
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    static displayCompany() {
        console.log(`Company Name: ${Product.companyName}`);
    }
    displayInfo() {
        console.log(`ID: ${this.productID} | Name: ${this.name} | Price: ₹${this.price}`);
    }
}
const p1 = new Product(101, "Wireless Mouse", 899);
const p2 = new Product(102, "Keyboard", 1499);
Product.displayCompany(); // static: called on the class, not on an object
p1.displayInfo();
p2.displayInfo();
export {};
