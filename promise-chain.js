


// api.createOrderAPI(cart, function() {
//     api.processToPayment(function() {
//         api.orderSummary(function() {
//             api.updateWalletAmount();
//         });
//     });
// });

// createOrder(cart)
// .then(function(orderId) {
//     return processToPayment(orderId)
// })
// .then(function(paymentSuccess) {
//     return orderSummary(paymentSuccess);
// })
// .then(function (walletAmount) {
//     return updateWalletAmount(walletAmount)
// })

const cart = ["shoes", 'kurta'];

const promiseObj = createOrder(cart);


promiseObj.then(function(res) {
    console.log('res', res);
    return res;
})
.then(function (orderId) {
    console.log(orderId); // undefined
    return processToPayment(orderId);
})
.then(function (paymentStatus) { // Success or Resolve
    console.log(paymentStatus);
})
.catch(function(err) { // Error or Reject
  console.log('error', err.message);
})


function processToPayment(orderId) {
    const promiseResponse = new Promise(function (resolve, reject) {
        if(!paymentSuccess(orderId)) {
          const error = new Error('Payment Failed');
          reject(error);
        }
        const payment = "Success";
        if(payment == 'Success') {
            resolve(payment);
        }
    });
    return promiseResponse;
}

function createOrder(cart) {
    const promiseResponse = new Promise(function (resolve, reject) {
        if(!validateOrder(cart)) {
          const error = new Error('Cart is not valid');
          reject(error);
        }
        const orderId = "12345";
        if(orderId) {
            resolve(orderId);
        }
    });
    return promiseResponse;
}

function validateOrder() {
    return true;
}

function paymentSuccess() {
    return false;
}