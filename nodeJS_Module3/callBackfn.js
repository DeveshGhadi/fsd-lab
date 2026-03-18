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

<<<<<<< HEAD
placeOrder(31,"-Devesh Ghadigaonkar", notifyUser);
=======
placeOrder(33, notifyUser);
>>>>>>> 7bbb29e38a1dcea9d850c63b1bd542b4ecbd4c5f
