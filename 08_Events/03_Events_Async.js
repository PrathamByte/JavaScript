const start  = document.querySelector('#start')
const stopButton = document.querySelector('#stop')

let printStart;

const sayHi = ()=>{
    console.dir('hi, friends');
}



start.addEventListener('click', ()=>{

printStart = setInterval(sayHi, 4000)

}, false)

stopButton.addEventListener('click', ()=>{

clearInterval(printStart)

}, false)