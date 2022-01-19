lista = [];
// adicionar valores unicos ao array aleatoriamente 
for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random()* 10 + 1);
    if(lista.includes(num)){
        i--;
    }else{
        lista[i] = num;
    }
}

console.log(`lista desordenada ${lista}`);

function quick_sort(lista, inicio = 0, fim = null){
    if(fim == null){
        fim = lista.length - 1;
    }

    if (inicio < fim){

        p = partition(lista, inicio, fim);
        quick_sort(lista, inicio, p-1);
        quick_sort(lista,p+1,fim);
    }
}

function partition(lista, inicio, fim){
    pivo = lista[fim];
    i = inicio

    for(let j = inicio; j < fim; j++){
        if (lista[j] <= pivo){
            let aux = lista[j];
            lista[j] = lista[i];
            lista[i] = aux;
            i++;
        }
    }
    let aux = lista[fim];
    lista[fim] = lista[i];
    lista[i] = aux;

    return i;
}


quick_sort(lista);

console.log("ordenada " + lista);