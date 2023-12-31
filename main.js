import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const bntAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');
const btnRemover = document.querySelector('#remover');

btnLimpar.addEventListener('click', limparElementosDaLista);
bntAdicionar.addEventListener('click', criaElementoNaLista);
btnRemover.addEventListener('click', removeDaLista);

atualizarItensDeLista();

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
function removeDaLista(){
    removeDaLista();
    atualizarItensDeLista();
}