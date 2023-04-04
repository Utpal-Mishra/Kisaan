const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('distance-none');
    }, 2000);
})

const header = document.querySelector('.header')

window.onscroll = function(){
    var top = window.screenY;
    console.log(top);
     
    if (top >= 50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}