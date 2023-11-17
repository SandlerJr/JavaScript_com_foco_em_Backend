// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
function imprimeTexto(texto) {
  console.log(texto);
}

imprimeTexto('Deu certo');


// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());

// 3) formas de escrever funções

function soma(){
  return 2 + 2;
}

console.log(soma())