// declaração de função

function minhaFuncao(param) {
  const mensagem = param;
  console.log(mensagem);
}

minhaFuncao("param")

// expressão de função

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

// chama a função antes de declara-la
console.log(apresentar());

function apresentar() {
  return "olá";
}

// nao pode ser chamada antes de declara-la(vai dar ReferenceError - Proposital)
console.log(somaOutroExemplo(1, 1))
const somaOutroExemplo = function(num1, num2) { return num1 + num2 }
