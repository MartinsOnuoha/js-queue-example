const Queminos = require('./Queminos')
const data = require('./data.json')

const pizzaShop = new Queminos

// place orders
data.orders.forEach(order => pizzaShop.placeOrder(order));

console.log(pizzaShop.deliverOrder()) // dequeue
console.log(pizzaShop.upNext()) // get upnext
console.log(pizzaShop.orders)
