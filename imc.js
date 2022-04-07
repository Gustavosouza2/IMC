
const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' &&peso !== '' &&altura !== ''){

    let classificacao = '';

    const valorIMC = (peso / (altura*altura)).toFixed(2);


    
    if (valorIMC < 18.5){
        classificacao = 'Você está abaixo do peso';
    }
    else if (valorIMC < 24.9){
        classificacao =  'Você está com o peso normal';
    }
    else if (valorIMC == 25, 29.9){
        classificacao = 'Você está com sobrepeso';
    }
    else if (valorIMC == 30, 34.9){
        classificacao = 'Você está com obesidade grau I';
    }
    else if (valorIMC == 35, 39,9){
        classificacao = 'Você está com obesidade grau II';
    }
    else if (valorIMC >= 40){
        classificacao = 'Você está com obesidade grau III';
    }
    
        resultado.textContent = `${nome} sua classificação é ${classificacao} e seu imc é ${valorIMC}`;


    }
}       

calcular.addEventListener('click', imc);
