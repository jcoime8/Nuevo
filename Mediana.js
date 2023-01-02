function calcularpromedio(lista){
    /* let sumalist = 0;

    for(let i=0; i<lista.length; i++){
       sumalist = sumalist + lista[i];
    } */
/* 
    function SumarElement(ValorAcumulado, nuevoValor){
        return ValorAcumulado + nuevoValor;
    } */

  /*   const SumarElement = (valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    }
    const sumalista = lista.reduce(SumarElement); */

    const sumalista = lista.reduce((a, b) => a + b );

    const Promedio = (sumalista/lista.length).toFixed(2);
    console.log(Promedio);
}


Array = [4,4,25,1,4,6,7,0];

calcularpromedio(Array);


function esPar(lista){
    return !(lista.length % 2);
}

function clacularMediana(lista){
    const listaEsPar = esPar(Array);

    if(listaEsPar){
        let listapar = Math.round(lista.length/2);
        let listapar2 = Math.floor(lista.length / 2);
        console.log(lista[listapar - 1]);
        console.log(lista[ listapar2]);
    }else{
        let listaimpar = Math.round(lista.length / 2);
        console.log(lista[listaimpar-1]);
        console.log(lista.length);
    }
}

clacularMediana(Array);

