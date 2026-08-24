//To Learn
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keycode

// document.getElementById('Vestland-Norway').onclick = ()=>{
//     alert("Vestland-Norway clicked")
// }

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.dir("clicked inside the ul");
//   },
//   false,
// );

// document.getElementById('Vestland-Norway').addEventListener(
//   "click",
//   (e) => {
//     console.dir("owl clicked");
//     e.stopPropagation(); //not fire event images when click on owl img
//   },
//   false,
// );

// document.getElementById("google").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.dir("goggle click");
//   e.preventDefault(); //prevent to open google web
// });

document.getElementById("images").addEventListener(
  "click",
  (e) => {
    console.dir(e.target.tagName);

    if (e.target.tagName === "IMG") {
      console.dir(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }

    // removeIt.parentNode.removeChild(removeIt);
  },
  false,
);
