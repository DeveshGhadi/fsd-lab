function placeOrder(orderId,name, callback) {
    console.log("Order received. Preparing food");
    setTimeout(() => {
        console.log("Order is ready for delivery", orderId,name);
        callback();
    }, 3000);
}

function notifyUser() {
    console.log("Food is Ready!!!");
}

placeOrder(31,"-Devesh Ghadigaonkar", notifyUser);