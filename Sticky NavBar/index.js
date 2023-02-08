const navbarEl=document.querySelector(".navbar");

//console.log(navbarEl)

const bottomContainerEl=document.querySelector(".bottomContainer")

console.log(bottomContainerEl.offsetTop)
console.log(navbarEl.offsetHeight)


window.addEventListener("scroll",()=>{
    //console.log("scrolled")
    //console.log(window.scrollY)
    if(window.scrollY>bottomContainerEl.offsetTop-navbarEl.offsetHeight-50){//(50 is margin)
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active")
    }

});