class Product {
    productID;
    name;
    price;
    category;
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
function printProduct(product) {
    console.log(`ID: ${product.productID} | Name: ${product.name} | Price: ₹${product.price} | Category: ${product.category}`);
}
const p1 = new Product(1, "Headphones", 2499, "Electronics");
const p2 = new Product(2, "Running Shoes", 3499, "Footwear");
printProduct(p1);
printProduct(p2);
// A plain object also works, because it matches the IProduct shape
printProduct({ productID: 3, name: "Water Bottle", price: 299, category: "Accessories" });
export {};
