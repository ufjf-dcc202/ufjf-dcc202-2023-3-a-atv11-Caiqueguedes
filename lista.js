const lista = ["Um", "Dois", "Três"];

export function limpaLista(){
    lista.splice(0);
}
export function getLista(){
    return lista;
}

export function adicionaNaLista(novoitem){
    lista.push(novoitem);
}