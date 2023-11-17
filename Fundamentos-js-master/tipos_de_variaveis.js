// tipo String
function livrandoDaMaldição(){
    const texto1 = "Olá, mundo!";
    console.log(texto1);
}

function comconcatenação(){
    const citacao = "Meu nome é ";
    const meuNome = "Leonardo";

    console.log(citacao + meuNome);
}

function tipoStringcomNumeros(){
    const senha = "senhaSuperSegura456!";
    const stringDeNumeros = "34567";
    console.log(senha + ', ' + stringDeNumeros);
}

// tipo Number 

function trabComTipoNumero(){
    const primeiroNumero = 4;
    const segundoNumero = 7;

    const operacaoMatematica = primeiroNumero - segundoNumero;

    console.log(operacaoMatematica);
}

function pontoFlutuante(){
    const numeroPontoFlutuante = 3.3;
    const pontoFlutuanteSemZero = .5;

    const novaOperacao = primeiroNumero / numeroPontoFlutuante;

    console.log(novaOperacao);
}


// NaN -> Not A Number (não é um número)
    function naoENumero(){
    const alura = "Alura";
    console.log(alura * 2);
}

/* boolean
     true -> verdadeiro
     false -> falso 
*/

function comparandoSeNumerosSaoIguais(){
    const primeiroNumero = 5;
    const segundoNumero = 5;

    console.log(primeiroNumero === segundoNumero);
}

function comparandoSeStrings(){
    const texto1 = "Alura";
    const texto2 = "alura";

    console.log(texto1 === texto2)
}

livrandoDaMaldição();
comconcatenação();
tipoStringcomNumeros();
naoENumero();
comparandoSeNumerosSaoIguais();
comparandoSeStrings();