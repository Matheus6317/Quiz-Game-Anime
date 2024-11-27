const user = document.querySelector('.user');
const submit = document.querySelector('.submit');

//Faz com que ao tiver 3 ou mais caracteres o botao seja ativado:
const x = ({target})=>{
    if(target.value.length >= 3){
        submit.removeAttribute('disabled');
    }else{
        submit.setAttribute('disabled', '');
    }
}
user.addEventListener('input', x);


/*Primeiramente: recarregar o comportamento padrao do form, guardar o valor inserido na 
memoria do computador(localStorage), acessar um documento*/ 

const formulario = document.querySelector('.formulario');

const y = (event)=>{
    event.preventDefault();
    localStorage.setItem("name_user", user.value);
    window.location = "main.html";
}

formulario.addEventListener('submit', y);