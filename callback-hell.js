

console.log('Start');


setTimeout(() => {
    console.log('middle');
}, 5000);

console.log('End');

// Callback Hell
// Inversion of Control

const cart = ["shoes", "shirt", "bags"];



// createOrderAPI
// processToPayment

api.createOrderAPI(cart, function() {
    api.processToPayment(function() {
        api.orderSummary(function() {
            api.updateWalletAmount();
        });
    });
});