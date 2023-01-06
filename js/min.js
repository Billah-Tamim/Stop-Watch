let getSecond = document.querySelector('.second');
let getTens = document.querySelector('.tens');

const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');

let second = 00;
let tens = 00;

let manageInterval;
btnStart.addEventListener('click', ()=>{
    manageInterval = setInterval(startIncreasing, 10);
})
btnStop.addEventListener('click',()=>{
    clearInterval(manageInterval);
})
btnReset.addEventListener('click',()=>{
    clearInterval(manageInterval);
    second = 00;
    tens = 00;
    getSecond.innerHTML = '0' + 0;
    getTens.innerHTML = '0' + 0;
})


const startIncreasing = () =>{
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        second++;
        getSecond.innerHTML= '0' + second;
        tens= 0;
        getTens.innerHTML = '0' + 0;
    }
    if(second > 9){
        getSecond.innerHTML = second;
    }
}