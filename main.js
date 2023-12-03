import { adicionaNaLista, getLista, limpaLista } from "./lista";

function criaElementoNaLista(){
    const texto = pEntrada.textContent;
    adicionanaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
}
function limparElementosDaLista(){
    limpaLista();
    atualizarItensDeLista();
}

function atualizarItensDeLista(){
    olSaida.innerHTML = "";
    const lista = getLista();
    for(let i = 0; i < lista.length;i++){
     const item = lista[i];
     const li = document.createElement("li");
     olSaida.appendChild(li);   
    }
}