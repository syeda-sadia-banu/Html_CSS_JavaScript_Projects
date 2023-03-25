const containerEl=document.querySelector(".container");

const kits=["crash","kick","snare","Tom"];

kits.forEach((kit)=>{
    const btnEl=document.createElement("button");
    containerEl.appendChild(btnEl);
    btnEl.classList.add("btn");
    btnEl.innerText=kit;
  
    btnEl.style.backgroundImage="url(images/"+kit+".png)";

    const audioEl=document.createElement("audio");
    containerEl.appendChild(audioEl);
    audioEl.src="sounds/"+kit+".mp3";
    btnEl.addEventListener("click",()=>{
        audioEl.play();
    })

});
