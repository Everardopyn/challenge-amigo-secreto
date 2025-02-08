// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


function agregarAmigo(nombre){
    let nombreAmigo = document.querySelector(nombre).value;
    
    verificarNombreEnCelda();
}

function verificarNombreEnCelda(){
    //verificr que la celda no esta vacia
    if (nombreAmigo == ""){
        alert("Por favor ingrese un nombre valido");
    }else{
        listaDeAmigos.push(nombreAmigo);
    }
}
