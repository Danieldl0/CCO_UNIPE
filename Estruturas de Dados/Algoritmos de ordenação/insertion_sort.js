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

//Insertion sort
function insertion_sort(lista){
    let j, aux, tamanho = lista.length;
    for(let i = 1; i < tamanho; i++){
        aux = lista[i];
        j = i-1;
        while(j >= 0 && lista[j] > aux){
            lista[j+1] = lista[j];
            j--;
        }
        lista[j+1] = aux;
    }
}

insertion_sort(lista);
console.log("ordenada com insertion: " + lista);