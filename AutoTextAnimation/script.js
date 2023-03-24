const containerEl=document.querySelector(".container");
const languages=["JavaScript","Python","Java","TypeScript","C#"];

let languagesIndex=0;
let characterIndex=0;

updateText();


function updateText(){
    characterIndex++;
    containerEl.innerHTML=`
<h1>popular computer language ---${languages[languagesIndex].slice(0,characterIndex)}</h1>
`;



if(characterIndex===languages[languagesIndex].length){
    languagesIndex++;
    characterIndex=0;
}
if(languagesIndex===languages.length){
    languagesIndex=0;
}

setTimeout(updateText, 400);

}


