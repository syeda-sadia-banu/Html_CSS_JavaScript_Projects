const containerEl=document.querySelector(".container")

const btnEl=document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
     imgNum=10;
 addNewPhotos();
});
function addNewPhotos(){
    for(let index=0;index<imgNum;index++){
        const newImgEL=document.createElement("img");
    newImgEL.src=`https://picsum.photos/300?random=
    ${Math.floor(Math.random()*2000)}`;

   containerEl.appendChild(newImgEL);

    }
    
}