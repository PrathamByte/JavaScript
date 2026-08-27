const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#'
        for (let i = 0; i < 6; i++) {
        
            color += hex[Math.floor(Math.random()*16)]
        }
    return color
};

const start = document.querySelector('#start');
const stopBtn = document.querySelector('#stop')
let intervalId;

start.addEventListener('click', ()=>{
    
    const chageBgColor = ()=>{
    const dancingbutton = document.body.style.backgroundColor = randomColor();
}
    if(!intervalId){
    intervalId = setInterval(chageBgColor ,3000)
    }
}, false)


stopBtn.addEventListener('click', ()=>{

    clearInterval(intervalId);
    intervalId = null;
},false)