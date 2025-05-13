

setTimeout(function () {
  console.log('Timer Invoked');
}, 10000);

console.log('Entered');

// // function x(y, z) {
// //     console.log('X Invoked');
// //     y();
// //     z();
// // }

// // x(function y() {
// //     console.log('Y Invoked')
// // }, function z() {
// //     console.log('z Invoked')
// // });

// // function addListener() {
// //     let count = 0;
// //     document.getElementById('click-on-div').addEventListener('click', function xyz() {
// //         console.log('Div clicked', ++count);
// //     })
// // }

// // addListener();
// let count = 0;
// function xyz() {
//     console.log('Div Clicked', ++count);
// }

// document.getElementById('click-on-div').addEventListener('click', xyz, true); //usecapture

// setTimeout(function () {
//     // document.getElementById('click-on-div').removeEventListener('click', xyz);
// }, 5000);