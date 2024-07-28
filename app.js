const input = document.createElement("input");
const btn = document.createElement("button");
btn.innerText = "clickme";
document.body.appendChild(input);
document.body.appendChild(btn);

// function handleInput(e) {
//   console.log(e.target.value);
// }

// function debounce(fn) {
//   let id;
//   return function (e) {
//     clearTimeout(id);
//     id = setTimeout(() => fn.call(this, e), 500);
//   };
// }

function handleBtnClick(e) {
  console.log(input.value);
}

function throtle(fn) {
  let isThrotle = false;
  return function (e) {
    if (!isThrotle) {
      fn.call(this, e);
      isThrotle = true;
      setTimeout(() => (isThrotle = false), 5000);
    }
  };
}
// input.addEventListener("input", debounce(handleInput));

btn.addEventListener("click", throtle(handleBtnClick));

// function defination obj.fn()  this->obj
//  fn()                        this -> window

//call , apply , bind

// const kapil = {
//   name: "rahul",

//   display: function (fn) {
//     console.log(this.name);
//     let name = "kapil";
//     const fn1 = () => console.log(this.name);
//     fn1();
//     return fn();
//   },
// };

// kapil.display(() => {
//   console.log(this.name);
// });

// input.addEventListener("input", function(){);

// console.log(this);

// this keyword  -> function defination ->   fn()
//  Obj.fn();

// const obj = {
//   fn: function (name, age) {
//     console.log(name, age);
//     console.log(this);
//   },
// };
// const obj1 = {
//   name: "rahul",
// };

// function greet(fn) {
//   // console.log(this);
//   const arr = ["kapi", 25];
//   fn.call(this, ...arr);
// }

// greet(obj.fn);

// 1 function defination
// if thier is no object in left of the function call -> this = window
//  if thier is a object in left of the function call -> this = object
// if function is array fn than -> this = parent this funciton
