let products = [
    { name: "Laptop", price: 65000, quality: "Good" },
    { name: "Mouse", price: 800, quality: "Low" },
    { name: "Keyboard", price: 2500, quality: "Low" },
    { name: "Mobile", price: 35000, quality: "Good" },
    { name: "TV", price: 55000, quality: "Good" }
];

// 1. Search Product by Name
console.log("1. Search Product by Name");
let searchName = "Laptop";

for(let i = 0; i < products.length; i++){
    if(products[i].name === searchName){
        console.log(products[i]);
    }
}

// 2. Search Product by Price
console.log("\n2. Search Product by Price");
let searchPrice = 35000;

for(let i = 0; i < products.length; i++){
    if(products[i].price === searchPrice){
        console.log(products[i]);
    }
}

// 3. Products Above ₹5000
console.log("\n3. Products Above ₹5000");

for(let i = 0; i < products.length; i++){
    if(products[i].price > 5000){
        console.log(products[i]);
    }
}

// 4. Products Below ₹5000
console.log("\n4. Products Below ₹5000");

for(let i = 0; i < products.length; i++){
    if(products[i].price < 5000){
        console.log(products[i]);
    }
}

// 5. Count Total Products
console.log("\n5. Total Products");
console.log(products.length);

// 6. Most Expensive Product
console.log("\n6. Most Expensive Product");

let max = products[0];

for(let i = 1; i < products.length; i++){
    if(products[i].price > max.price){
        max = products[i];
    }
}

console.log(max);

// 7. Cheapest Product
console.log("\n7. Cheapest Product");

let min = products[0];

for(let i = 1; i < products.length; i++){
    if(products[i].price < min.price){
        min = products[i];
    }
}

console.log(min);


// 8. Add New Product
console.log("\n8. Add New Product");

products.push({
    name: "Headphone",
    price: 3000,
    quality: "Low"
});

console.log(products);

// 9. Delete Product by Name
console.log("\n9. Delete Product by Name");

let deleteName = "Mouse";

for(let i = 0; i < products.length; i++){
    if(products[i].name === deleteName){
        products.splice(i, 1);
        break;
    }
}

console.log(products);

// 10. Update Product Price
console.log("\n10. Update Product Price");

let updateName = "Keyboard";
let newPrice = 3500;

for(let i = 0; i < products.length; i++){
    if(products[i].name === updateName){
        products[i].price = newPrice;
    }
}

console.log(products);

// 11. Display Only Product Names
console.log("\n11. Product Names");

for(let i = 0; i < products.length; i++){
    console.log(products[i].name);
}

// 12. Display Only Product Prices
console.log("\n12. Product Prices");

for(let i = 0; i < products.length; i++){
    console.log(products[i].price);
}

// 13. Check Product Exists or Not
console.log("\n13. Check Product Exists");

let checkName = "TV";
let found = false;

for(let i = 0; i < products.length; i++){
    if(products[i].name === checkName){
        found = true;
        break;
    }
}

if(found){
    console.log("Product Exists");
}
else{
    console.log("Product Not Found");
}
// 14. Good Quality and Low Quality Categories
console.log("\n14. Product Categories");

console.log("Good Quality Products:");

for(let i = 0; i < products.length; i++){
    if(products[i].quality === "Good"){
        console.log(products[i]);
    }
}

console.log("\nLow Quality Products:");

for(let i = 0; i < products.length; i++){
    if(products[i].quality === "Low"){
        console.log(products[i]);
    }
}

// 15. Products Between ₹5000 and ₹50000
console.log("\n15. Products Between ₹5000 and ₹50000");

for(let i = 0; i < products.length; i++){
    if(products[i].price >= 5000 && products[i].price <= 50000){
        console.log(products[i]);
    }
}

// 16. Sort Price Ascending
console.log("\n16. Sort Price Ascending");

products.sort(function(a, b){
    return a.price - b.price;
});

console.log(products);

// 17. Sort Price Descending
console.log("\n17. Sort Price Descending");

products.sort(function(a, b){
    return b.price - a.price;
});

console.log(products);

// 18. Display Products with 18% GST
console.log("\n18. Products with 18% GST");

for(let i = 0; i < products.length; i++){

    let gstPrice =
        products[i].price +
        (products[i].price * 18 / 100);

    console.log(
        products[i].name,
        "Original Price =", products[i].price,
        "GST Price =", gstPrice
    );
}

// 19. Calculate Total Inventory Value
console.log("\n19. Total Inventory Value");

let totalValue = 0;

for(let i = 0; i < products.length; i++){
    totalValue = totalValue + products[i].price;
}

console.log(totalValue);

// 20. Product Report
console.log("\n20. Product Report");
console.log("Name\t\tPrice\t\tQuality");

for(let i = 0; i < products.length; i++){
    console.log(
        products[i].name,
        "\t",
        products[i].price,
        "\t",
        products[i].quality
    );
}