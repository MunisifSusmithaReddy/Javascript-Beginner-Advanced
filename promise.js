

// // Promises are used to handle Asynchronus operations

// // Lets consider E-commerce

// let cart = ["shoes", "shirts", "pants"];

// createOrderAPI(cart); // Return us an order -> {data: orderId}

// proceedToPayment(orderId); // Process it

// createOrderAPI(cart, function (orderId) {
//     proceedToPayment(orderId)
// }); // callback hell

// // Issue 1 -> Inversion of control

// // How to handle it???

// const orderAPIOutput = createOrderAPI(cart); // const primise = {name: 'susmitha}

// // { data: undefined}
// // { data: orderId}

// orderAPIOutput.then(function (orderId) {
//     proceedToPayment(orderId);
// });

// createOrderAPI(cart).then(function (orderId) {
//     proceedToPayment(orderId);
// });


// Fetch -> It is an API given by browser to us

const fetchOutput = fetch('https://jsonplaceholder.typicode.com/posts'); // This retruns us a promise

// console.log('fetchOutput', fetchOutput);

// Promise will have resolve and reject


// Promise has 3 states
// Pending
// Fulfilled
// Rejected


fetchOutput.then(function (response) { // We will resolve/reject the promise
    console.log('response', response);
    const result = response.json(); // This is to convert ReadableStream to actual response
    return result;
}).then(function (response) {
    console.log('response', response);
}).catch(function (error) {
    console.log(error)
})

// We only solved Inversion of control

// But we still need to fix callback hell

fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) { // We will resolve/reject the promise
    console.log('response', response);
    const result = response.json(); // This is to convert ReadableStream to actual response
    return result;
}).then(function (response) {
    console.log('response', response);
}).catch(function (error) {
    console.log(error)
})