function Calculadora(N1, N2, operador) {
  let Resultado;

  N1 = parseInt(N1);
  N2 = parseInt(N2);

  switch (operador) {
    case "+":
      Resultado = N1 + N2;
      break;
    case "-":
      Resultado = N1 - N2;
      break;
    case "*":
      Resultado = N1 * N2;
      break;
    case "/":
      Resultado = N1 / N2;
      break;
    case "e":  
    Resultado = N1 ** N2;
      break;
    default:
      return "Operador inválido";
  }

  if (Resultado === undefined || Resultado > 1000000)
    Resultado = "ERRO";

  return Resultado;
}

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