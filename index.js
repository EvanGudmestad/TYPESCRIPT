var menu = [
    { id: 1, name: "Margherita", price: 5.5 },
    { id: 2, name: "Pepperoni", price: 6.5 },
    { id: 3, name: "Hawaiian", price: 7.5 },
    { id: 4, name: "Meat Feast", price: 8.5 },
];
var nextOrderId = 1;
var cashInRegister = 100;
var orderQueue = [];
var addNewPizza = function (pizzaObj) {
    menu.push(pizzaObj);
};
var placeOrder = function (pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    if (selectedPizza) {
        var order = { pizza: selectedPizza, status: "ordered", id: nextOrderId++ };
        orderQueue.push(order);
        cashInRegister += selectedPizza.price;
        return order;
    }
    return false;
};
var completeOrder = function (orderId) {
    //modify an order to have a status of "completed"
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (order) {
        order.status = "completed";
        return order;
    }
    return false;
};
addNewPizza({ name: "Veggie Supreme", price: 9.5, id: nextOrderId++ });
addNewPizza({ name: "Vegan Margherita", price: 8.5, id: nextOrderId++ });
placeOrder("Margherita");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
