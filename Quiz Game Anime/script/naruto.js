var rule = document.getElementById('rule');
var num = document.getElementById('num');

// Determinando a dinamicidade e correspondendo com a regua e o valor apresentado: 
num.innerHTML = rule.value;

rule.oninput = function(){
    num.innerHTML = this.value;
}


var answer01 = document.getElementById('answer01');
var answer02 = document.getElementById('answer02');
var answer03 = document.querySelector('.answer03');
var answer03id = document.getElementById('answer03');
var answer04 = document.getElementById('answer04');

var correct_answer = 0;
localStorage.setItem('resposta', correct_answer);

answer01.addEventListener('click', (event)=>{
    event.target.style.background = "linear-gradient(to right, red, white)";
    answer03.style.background = "linear-gradient(to right, green, white)";
    
    setTimeout(() => {
       window.location = "results.html"
    }, 1000);
})
answer02.addEventListener('click', (event)=>{
    event.target.style.background = "linear-gradient(to right, red, white)";
    answer03.style.background = "linear-gradient(to right, green, white)";
    
    setTimeout(() => {
       window.location = "results.html"
    }, 1000);
})


