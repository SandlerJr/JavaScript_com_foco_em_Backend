// parâmetros x argumentos

// ordem dos parâmetros
function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Juliana"));


//Adicionamos um valor padrão para que haja uma soma mesmo passando apenas um numero
function soma(numero1 = 1, numero2 = 1) {
  return numero1 + numero2;
}

console.log(soma(7));

//exemplo mais complexo
function multiplica(numero1 = 1, numero2 = 1) { 
  return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));
