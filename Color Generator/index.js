const containerEl=document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("colorContainer");
    containerEl.appendChild(colorContainerEl);
  }

  const colorContainerEls=document.querySelectorAll(".colorContainer")

  generateColors();

  function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode=randomColor();
        colorContainerEl.style.backgroundColor="#"+newColorCode;
        colorContainerEl.innerText="#"+newColorCode;

    });

  }

  function randomColor(){
    const chars="0123456789abcdef";
    const colorcodeLength=6;
    let colorCode="";
    for(let i=0;i<colorcodeLength;i++){
        const randomNum=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNum,randomNum+1);
       // console.log(colorCode,randomNum)
       

    }
    return colorCode;
    
  }
 