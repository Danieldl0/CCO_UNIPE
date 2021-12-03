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

//Bubble Sort
function bubble_sort(array){
    let tamanho = array.length - 1;

    for(let i = 0; i < tamanho; i++){
        for(let j = 0; j < tamanho; j++){
            if(array[j] > array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

bubble_sort(lista);
console.log("lista ordenada " + lista);
