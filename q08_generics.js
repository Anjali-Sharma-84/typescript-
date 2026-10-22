function displayProducts(items) {
    items.forEach(item => console.log(item));
}
function getFirstElement(items) {
    return items[0];
}
const productNames = ["Laptop", "Mouse", "Keyboard"];
const productPrices = [55000, 899, 1499];
const productIDs = [101, 102, 103];
console.log("--- Product Names ---");
displayProducts(productNames);
console.log("--- Product Prices ---");
displayProducts(productPrices);
console.log("--- Product IDs ---");
displayProducts(productIDs);
console.log("--- getFirstElement() ---");
console.log("First name :", getFirstElement(productNames)); // string
console.log("First price:", getFirstElement(productPrices)); // number
console.log("First flag :", getFirstElement([true, false, true])); // boolean
console.log("First object:", getFirstElement([{ id: 1, name: "Pen" }, { id: 2, name: "Book" }])); // object
console.log("Empty array :", getFirstElement([])); // undefined
export {};
