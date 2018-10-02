const botao = document.querySelector(".news__button");
const input = document.getElementById('newsInputEmail');

botao.addEventListener('click', function(event){
    event.preventDefault();
    const resposta = document.createElement('span');
    const respostaOk = document.createTextNode("E-mail cadastrado com sucesso!");
    const respostaNegado = document.createTextNode("E-mail precisa conter caractere");
    const newsForm = document.querySelector(".news__form");
    const expressao = new RegExp(' /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');

    if(input.value.trim() == ""){
        resposta.appendChild(respostaNegado);
        newsForm.insertBefore(resposta, input.parentNode);
        console.log('deu ruim');
        
        
        
    } else{
        resposta.appendChild(respostaOk);
        newsForm.insertBefore(resposta, input.parentNode);
        console.log('deu bom');
        
    }
    
})


