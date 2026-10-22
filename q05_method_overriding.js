class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    calculateDiscount() {
        return this.price * 0.05; // 5%
    }
}
class ElectronicProduct extends Product {
    calculateDiscount() {
        return this.price * 0.10; // 10%
    }
}
class ClothingProduct extends Product {
    calculateDiscount() {
        return this.price * 0.15; // 15%
    }
}
const generic = new Product("Notebook", 200);
const phone = new ElectronicProduct("Smartphone", 20000);
const jeans = new ClothingProduct("Jeans", 2000);
console.log(`${generic.name} (₹${generic.price}) -> Discount (5%): ₹${generic.calculateDiscount()}`);
console.log(`${phone.name} (₹${phone.price}) -> Discount (10%): ₹${phone.calculateDiscount()}`);
console.log(`${jeans.name} (₹${jeans.price}) -> Discount (15%): ₹${jeans.calculateDiscount()}`);
export {};
