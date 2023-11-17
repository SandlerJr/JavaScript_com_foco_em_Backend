// conversão implícita

const numero = 456;
const StringParaNumero = String(numero)

console.log(StringParaNumero);

//string para numero de outra forma
const numeroString = Number("456");
console.log(numero + numeroString); // vai conseguir fazer a conta


//letras e numeros na string a ser convertida 
const numeroStringError = Number("456a"); 

console.log(numero + numeroStringError); // resultsado sera: NaN

// conversão explícita