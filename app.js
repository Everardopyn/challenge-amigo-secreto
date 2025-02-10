// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];



function agregarAmigo(){//se estaba poniendo el id del boton y no del cuadro de texto
    let nombreAmigo = document.querySelector('#amigo').value;
    

    //verificr que la celda no esta vacia
    if (nombreAmigo == ""){
        alert("Por favor ingrese un nombre valido");
    }else{
        listaDeAmigos.push(nombreAmigo);
        document.querySelector("#amigo").value = "";
        console.log(listaDeAmigos);
        mostrarListaAmigo();

    }
}

function mostrarListaAmigo() {

  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.textContent = "";
  let totalLista = 0;

  while (totalLista < listaDeAmigos.length) {
    //indica la posicion en la lista de amigos, con este se puede cambiar la posicion y mostrar todos los datos de la lista
    let numeroDeLista = listaDeAmigos[totalLista];

    //forzosamente tienes que poner "li" ya que sino muestra la lista pegada en vertical
    let listaEnHTML = document.createElement("li");
    listaEnHTML.textContent = numeroDeLista;
    listaAmigos.appendChild(listaEnHTML)
    totalLista++;
  }
}

function sortearAmigo(){
  let totalAmigos = listaDeAmigos.length;
  let numero = Math.floor(Math.random()* totalAmigos);
  let numeroSorteado = listaDeAmigos[numero];
  let mostrar = document.querySelector("#resultado");
  mostrar.textContent = numeroSorteado;

  
 console.log(numeroSorteado);
}

