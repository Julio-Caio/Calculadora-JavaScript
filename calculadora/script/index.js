// !!! Aviso: Quando uma conta é efetauda, e é apertado em outra operação, o resultado da conta anterior é usado como primeiro número da nova conta. Isso é um bug, e será corrigido em breve.

const display= document.getElementById('display');
const numeros= document.querySelectorAll('[id*=tecla]');
const operadores= document.querySelectorAll('[id*=operador]');

var numeroAtual = true
var operador;
var numeroAnterior;

const operacaoPendente = () => operador != undefined ;

const calcular = () => {
  if (operacaoPendente()) {
      let numeroAtual = parseFloat(display.textContent.replace('.','').replace(',', '.'));
      if (operador = '+'){
        atualizarDisplay( numeroAnterior + numeroAtual);
        let resultado = numeroAnterior + numeroAtual;
        return(window.alert(resultado), atualizarDisplay(resultado));
      }
    if (operador = '*'){
        atualizarDisplay( numeroAnterior * numeroAtual);
        let resultado = numeroAnterior * numeroAtual;
        return(window.alert(resultado), atualizarDisplay(resultado));
      }
    else if (operador = '-'){
        atualizarDisplay( numeroAnterior- numeroAtual);
        let resultado = numeroAnterior - numeroAtual;
        return(window.alert(resultado), atualizarDisplay(resultado));
      }
    else
        atualizarDisplay( numeroAnterior/ numeroAtual);
        let resultado = numeroAnterior + numeroAtual;
        return(window.alert(resultado), atualizarDisplay(resultado));
      }
    }

  const atualizarDisplay = (texto) => {
    if (numeroAtual) {
        display.textContent = texto;
        numeroAtual = false;
    }
    else {
        display.textContent += texto;
    }
    
    document.getElementById('igualdade').focus();
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach((numero) => numero.addEventListener('click', inserirNumero));


const selecionarOperador = (e) => {
  if (!numeroAtual){
    numeroAtual = true;
    operador = e.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
    console.log(operador);
  }
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))

const ativarIgual = () => {
    calcular();
};

document.getElementById('igualdade').addEventListener('click', ativarIgual);

const limparDisplay = () => (display.textContent = '');
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

const removerUltimoNumero = () => (display.textContent = display.textContent.slice(0, -1));

document.getElementById('backspace').addEventListener('click', removerUltimoNumero)