const container=document.querySelector(".container");
const loadingText=document.querySelector(".loading-text");

let load=0;
let int=setInterval(blur, 30);

function blur(){
    load++;
    if (load>99){
        clearInterval(int);
    }
    loadingText.innerText=`${load}%`;
    loadingText.style.opacity=(100-load)/100;
    container.style.opacity=(load)/100;
    console.log(load);
}