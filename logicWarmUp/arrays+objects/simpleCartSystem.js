let carts = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1000, qty: 1 }
];

function totalPrice() {
    for (let cart of carts) {
       console.log(`Price of ${cart.name} is Rs.${cart.price * cart.qty}`); 
    }
}

function removeItem(item) {
    carts = carts.filter(itm => itm.name !== item);
}

carts.push({
    name:"Bag",
    price: 800,
    qty:3
})
totalPrice();

carts[0].qty = 3;


console.log(carts);
removeItem("Bag");
console.log(carts);


