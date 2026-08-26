// const sayHi = ()=>{
//     alert("mohan");
// }

// setTimeout(sayHi,2000 );

const changeText = () => {
  document.querySelector("h1").innerHTML = "Hello";
};

const changeMe = setTimeout(changeText, 3000);

const button = document.querySelector("button");

button.addEventListener(
  "click",
  () => {
    clearTimeout(changeMe);
    console.dir("STOP");
  },
  false,
);
