// // 🧰 ===== SAMPLE DATA =====
// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Headphones", price: 200 },
//   { id: 3, name: "Keyboard", price: 100 },
//   { id: 4, name: "Monitor", price: 400 }
// ];

// // 🛍️ ===== CART =====
// let cart = [];

// // ➕ Add item to cart
// function addToCart(productId, quantity = 1) {
//   const product = products.find(p => p.id === productId);
//   if (!product) return console.warn("Product not found");

//   // Check if already in cart
//   const existing = cart.find(item => item.id === productId);
//   if (existing) {
//     existing.quantity += quantity;
//   } else {
//     // Use object spread to copy product
//     cart.push({ ...product, quantity });
//   }

//   console.log(`${product.name} added to cart.`);
// }

// // ➖ Remove item from cart
// function removeFromCart(productId) {
//   cart = cart.filter(item => item.id !== productId);
//   console.log(`Item ${productId} removed from cart.`);
// }

// // 🧾 Calculate total price using reduce
// function calculateTotal() {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// }

// // 🧠 Destructure items example
// function showCart() {
//   console.log("🛒 Your Cart:");
//   cart.forEach(item => {
//     const { name, price, quantity } = item;
//     console.log(`- ${name} x${quantity} → $${price * quantity}`);
//   });

//   console.log("Total:", calculateTotal());
// }

// // 🌱 ===== PRACTICE AREA =====
// // Try adding, removing, filtering, mapping etc. here 👇

// addToCart(1, 1); // Laptop x1
// addToCart(2, 2); // Headphones x2
// addToCart(3, 1); // Keyboard x1

// const filteredCart = cart.filter((item) => {
//     return item.price > 300
// }) 

// console.log("========================= Task 1 ===============================")
// console.log(cart)
// console.log(filteredCart)

// console.log("========================= Task 2 ===============================")

// const names = cart.map((item)=> {
//     return item.name
// })

// console.log(names)

// console.log("========================= Task 3 ===============================")

// const TotalPrice = cart.reduce((currTotal, item) => {
//     console.log(item.price)
//     if (item.quantity > 1){
//         item.price = item.price * item.quantity
//     } 
//     return currTotal + item.price
// }, 0)

// console.log(TotalPrice)

// console.log("========================= Task 4 ===============================")

// const copy = structuredClone(cart)

// copy.forEach((item) => {
//     if (item.name === "Laptop"){
//         item.name = "Computer";
//     }
// })

// copy.forEach((item) => {
//     console.log(item)
// })

// cart.forEach((item) => {
//     console.log(item)
// })

// showCart();

// // Example practice ideas:
// // - Filter cart to find items over $300
// // - Use map to create an array of item names
// // - Use reduce to calculate total quantity of items
// // - Deep copy the cart and modify the copy
