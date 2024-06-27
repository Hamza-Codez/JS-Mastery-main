// const btns = document.querySelectorAll('.button');
// const bg = document.querySelector('body');

// btns.forEach(function(button){
//   console.log(button);
//   button.addEventListener('click', function (event) {
//     console.log(event);
//     console.log(event.target);
//     if (event.target.id === 'grey'){
//       bg.style.backgroundColor = event.target.id;
//       bg.style.color = 'white'
//     }
//     if (event.target.id === 'white'){
//       bg.style.backgroundColor = event.target.id;
//       bg.style.color = 'black'
//     }
//     if (event.target.id === 'blue'){
//       bg.style.backgroundColor = event.target.id;
//     }
//     if (event.target.id === 'yellow'){
//       bg.style.backgroundColor = event.target.id;
//     }
//     if (event.target.id === 'red'){
//       bg.style.backgroundColor = event.target.id;
//     }
//   })
// })


// //alternative
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});


// const btn = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// btn.forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     if (e.target.id === e.target.id) {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

