
// Event Bubbling - useCapture
// document.querySelector('#container').addEventListener("click", (event) => {
//   console.log('event', event)
//   console.log('container clicked');
// });

// document.querySelector('#parent').addEventListener("click", (event) => {
//     console.log('parent clicked');
//   }, false);

//   document.querySelector('#child').addEventListener("click", (event) => {
//     console.log('child clicked');
//     // event.stopPropagation()
//   }, false);

  // Event Capturing

  document.querySelector('#container').addEventListener("click", (event) => {
    console.log('container clicked');
    event.stopPropagation()

  }, true);
  
  document.querySelector('#parent').addEventListener("click", () => {
      console.log('parent clicked');
    }, true);
  
    document.querySelector('#child').addEventListener("click", () => {
      console.log('child clicked');
    }, true);