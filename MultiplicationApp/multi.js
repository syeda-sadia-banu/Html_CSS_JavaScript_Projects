const num1=Math.ceil(Math.random()*10);


const num2=Math.ceil(Math.random()*10);

const questionEl=document.getElementById("question");
const inputEl=document.querySelector(".text");
const scoreEl=document.querySelector(".score");
let score=0;
scoreEl.innerText="score: "+ score;

questionEl.innerText=`What is ${num1} multiply by ${num2}?`

const correctAns=num1*num2;

const formEl=document.getElementById("form");

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
      score++;
     // updateLocalStorage();
     scoreEl.innerText=`score:${score}`
    } else {
      score--;
      //updateLocalStorage();
    }
  });
  console.log(score);