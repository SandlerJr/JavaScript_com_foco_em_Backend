const idadeMinima = 18;
const idadeCliente = 16;

function semOperadorTernario(){
  if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
  } else {
    console.log("suco")
  }
}

//Faz o mesmo que a função a cima
            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
semOperadorTernario();