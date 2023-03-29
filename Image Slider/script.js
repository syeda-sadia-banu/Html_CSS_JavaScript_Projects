const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imgEl=document.querySelectorAll("img");
const imgSliderEl=document.querySelector(".image-slider");

let currentImg=1;

nextEl.addEventListener("click",()=>{
    currentImg++;
    updateImg();
});

prevEl.addEventListener("click",()=>{
    currentImg--;
    updateImg();
});
updateImg();

function updateImg(){

    if(currentImg>imgEl.length){
        currentImg=1;
    }else if(currentImg<1){
        currentImg=imgEl.length;
    }
    imgSliderEl.style.transform =
     `translateX(-${(currentImg - 1) * 500}px)`;
}
