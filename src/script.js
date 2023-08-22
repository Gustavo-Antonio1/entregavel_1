///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let result = 0
function Calculadora(number1, number2, operator) {
  
  number1 = Number(number1)
  number2 = Number(number2)

  switch(operator){
    case "+":
      result = number1 + number2
      break;
    case "-":
      result = number1 - number2
      break;
    case "*":
      result = number1 * number2
      break;
    case "/":
      result = number1 / number2
      break;
    case "e":
      result = number1 * number1
      for (let i = 1 ; i < number2 - 1; i++) {
        result = result * number1 
      }
        break;    
  }

  if(result == undefined || result > 1000000)
    result = "ERRO"

  return result;
}

Calculadora()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}