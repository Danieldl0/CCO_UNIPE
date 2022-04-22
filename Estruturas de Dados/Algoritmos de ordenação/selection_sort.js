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

console.log("lista desordenada: " + lista);

//Selection Sort
function selection_sort(array){
    let tamanho = array.length;

    for(let i = 0; i < tamanho; i++){
        let menor = i;

        for(let j = i+1; j < tamanho; j++){
            //procura o menor valor do array
            if(array[j] < array[menor]){
                menor = j;
            }
        }

        let aux = array[i];
        array[i] = array[menor];
        array[menor] = aux;
    }
}

selection_sort(lista);

console.log(`lista ordenada com selection: ${lista}`);