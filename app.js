//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteio = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
  
    if (nomeAmigo.trim() === "") {
      alert("Por favor, digite um nome");
      return;
    }
  
    let contarLista = 0;
    let nomeExiste = false;
    while (contarLista < amigos.length) {
      if (amigos[contarLista] === nomeAmigo) {
        nomeExiste = true;
        break; 
      }
      contarLista++;
    }
  
    if (nomeExiste) {
      alert("Este nome já foi adicionado.");
      return;
    }

  amigos[amigos.length] = nomeAmigo; 
  document.getElementById("amigo").value = "";
  amigosAtualizados();
}

function amigosAtualizados() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  let contaLista = 0
  while (contaLista < amigos.length) {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigos[contaLista]; 
    listaAmigos.appendChild(itemLista);
    contaLista++;
  }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado"); 

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Todos os amigos já foram sorteados!</li>";
        return; 
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>O amigo escolhido é <strong>${nomeSorteado}</strong></li>`;
    removerAmigo(indiceSorteado);
}

function removerAmigo(indice) {
    amigos.splice(indice, 1); 
    amigosAtualizados(); 
}
    
