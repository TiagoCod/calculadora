
var visor = document.querySelector('#resultado');
var botoesNumericos = document.querySelector('.numeros');
var botoes = document.querySelectorAll('.numeros button');
var apagar = document.querySelector('#apagar');
var mais = document.querySelector('#mais');
var menos = document.querySelector('#menos');
var multi = document.querySelector('#multi');
var divisao = document.querySelector('#divisao');
var igual = document.querySelector('#igual');
var deletar = document.querySelector('#deletar');

//-----------------------------------------------------------

var primeiro = null;
var segundo = null;
var operacao = '';

mais.addEventListener('click', function() {
    primeiro = Number(visor.textContent);
    operacao = '+';
    visor.textContent = '0';
});

menos.addEventListener('click', function() {
    primeiro = Number(visor.textContent);
    operacao = '-';
    visor.textContent = '0';
});

multi.addEventListener('click', function() {
    primeiro = Number(visor.textContent);
    operacao = '*';
    visor.textContent = '0';
});

divisao.addEventListener('click', function() {
    primeiro = Number(visor.textContent);
    operacao = '/';
    visor.textContent = '0';
});


//-----------------------------------------------------------

var resultadoExibido = false;

igual.addEventListener('click', function() {
    segundo = Number(visor.textContent);


    if (operacao === '+') {
        visor.textContent = primeiro + segundo;
       
    } else if (operacao === '-') {
        visor.textContent = primeiro - segundo;
        
    } else if (operacao === '*') {
        visor.textContent = primeiro * segundo;
       
    } else if (operacao === '/') {
        if (segundo === 0) {
            visor.textContent = 'Erro';
            operacao = '';
            primeiro = null;
            return;
        } else {
            visor.textContent = primeiro / segundo;
           
        }

    }

    primeiro = Number(visor.textContent);
    operacao = '';
   resultadoExibido = true;

});

 


//-----------------------------------------------------------

visor.textContent = '0';


botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var valor = botao.textContent;

        // Impede digitação enquanto o visor mostra um erro
        if (visor.textContent === 'Erro') {
            visor.textContent = '0';
        }

        // Trata o ponto decimal

        if (resultadoExibido === true) {
                visor.textContent = 0;
                resultadoExibido = false;
                if(valor === '.'){
                    visor.textContent += valor;
                }else{
                    visor.textContent = valor;
                }
            }else{

                if (valor === '.') {
            if (!visor.textContent.includes('.')) {
                visor.textContent += '.';
            }
            
        } else {
            // Trata os números
             if (visor.textContent === '0') {
                visor.textContent = valor;
            } else {
                visor.textContent += valor;
            }
        }
    }

    });
});

//-----------------------------------------------------------

apagar.addEventListener('click', function() {
    if (visor.textContent === 'Erro') {
        visor.textContent = '0';
    } else if (visor.textContent.trim().length > 1) {
        visor.textContent = visor.textContent.slice(0, -1);
    } else {
        visor.textContent = '0';
    }
});

//-----------------------------------------------------------

deletar.addEventListener('click', function() {
    visor.textContent = 0;
    primeiro = null;
    segundo = null;
    operacao = '';
    resultadoExibido = false;
});
