const num1=Math.ceil(Math.random()*10);


const num2=Math.ceil(Math.random()*10);

const questionEl=document.getElementById("question");
const inputEl=document.querySelector(".text");
const scoreEl=document.querySelector(".score");
let score=JSON.parse(localStorage.getItem("score"));
// scoreEl.innerText="score: "+ score;

if(!score){
    score=0;
}
scoreEl.innerText=`score:${score}`

questionEl.innerText=`What is ${num1} multiply by ${num2}?`

const correctAns=num1*num2;

const formEl=document.getElementById("form");

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
      score++;
     updateLocalStorage();
     document.querySelector(".result").innerText="correct ans"
     
    } else {
      score--;
      updateLocalStorage();
      document.querySelector(".result").innerText="Wrong ans"
    }
  });
  function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }