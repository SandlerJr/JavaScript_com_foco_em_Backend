/*Boolean
    true
    false
*/

function imprimindoVerdadeiroEFalse(){
    const usuarioLogado = true;
    const contaPaga = false;

    const mensagem =[usuarioLogado, contaPaga];
    console.log(mensagem);
}

//truthy ou falsy
//0 -> false
//1 -> true

function imprimindoVerdadeiroEFalse2(){
    console.log(0 == false);//retorna true
    console.log("" == false);//retorna true
    console.log(1 == true);
}


function vendoTipos(){
    let numero = 3;
    let texto = "Alura";
    let minhaVar; // Não tem valor definido
    let varNull = null; // valor igual a nada/vazio/nulo 

    //vendo valores
    console.log(minhaVar);
    console.log(varNull);

    //vendo tipos
    console.log(typeof numero);
    console.log(typeof texto);


    console.log(typeof minhaVar);
    console.log(typeof varNull);

}

imprimindoVerdadeiroEFalse();
imprimindoVerdadeiroEFalse2();
tipos();