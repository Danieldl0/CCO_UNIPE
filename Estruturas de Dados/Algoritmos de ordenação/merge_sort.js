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

console.log(`lista desordenada ${lista}`)

function merge_sort(lista, inicio = 0, fim = null){
    if(fim == null){
        fim = lista.length;
    }
    if(fim - inicio > 1){
        var meio = Math.floor((fim + inicio) / 2);

        merge_sort(lista,inicio,meio);
        merge_sort(lista,meio,fim);

        merge(lista,inicio,meio,fim);
    }

   
    function merge(lista,inicio,meio,fim){

        let tamanho_left = meio - inicio;
        let tamanho_right = fim - meio;

        let left = [];
        let right = new Array(tamanho_right);

        for(let i= 0 ; i < tamanho_left; i++){
            left[i] = lista[inicio+i];   
        }

        for(let j= 0 ; j < tamanho_right; j++){
            right[j] = lista[meio+j];   
        }

        let top_right = 0, top_left = 0;

        for(let k = inicio; k < fim; k++){
            if(top_left >= left.length){
                lista[k] = right[top_right];
                top_right++;
            }
            else if(top_right >= right.length){
                lista[k] = left[top_left];
                top_left++;
            }
            else if(left[top_left] < right[top_right]){
                lista[k] = left[top_left];
                top_left++;
            }else{
                lista[k] = right[top_right];
                top_right++;
            }
        }
    }
}

merge_sort(lista);

console.log("lista ordenada", lista);