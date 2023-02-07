const textAreaEl=document.getElementById("textarea");

const totalCounterEl=document.querySelector(".counter");

const remainingEl=document.querySelector(".remainingCounter");

textAreaEl.addEventListener("keyup",()=>{
    // console.log("key is pressed");
   updateCounter();

});
 updateCounter();

function updateCounter(){
    totalCounterEl.innerHTML=textAreaEl.value.length;

    remainingEl.innerHTML=textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;


}