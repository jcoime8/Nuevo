const Descuento1 = document.querySelector('.Des1');
const Descuento2= document.querySelector('.Des2');
const Descuento3= document.querySelector('.Des3');
const Precio = document.querySelector('.Numero');
const Boton = document.querySelector('.boton');
const Parrafo = document.querySelector('.parrafo');
const DescuentoT=document.querySelector('.DesT');
let Descount;
/* Boton.addEventListener('click', CheckDescuento);

function Chequeando(){
    const Valor = Number(Precio.value);
    if(Descuento1.checked){
        CalcularDescuento(Valor, Descuento1.value);
        return;
    }
    if(Descuento2.checked){
        CalcularDescuento(Valor, Descuento2.value);
        return;
    }
    if(Descuento3.checked){
        CalcularDescuento(Valor, Descuento3.value);
    }
}

function CalcularDescuento(Precio,descuento){
    let suma = (Precio* (100 -descuento))/100;
    Parrafo.innerText = 'tu compra de niño pendejo es de $' + suma;
} */
/* couponList = [];
couponList.push({
    name: 'DescuentoA',
    valor:25
})

Boton.addEventListener('click', CalculandoDescuento3);

function CalculandoDescuento3(){
    function ValidarCupon(couponElement){
        return couponElement.name == DescuentoT.value
    }
    const Recorriendo = couponList.find(ValidarCupon);
    console.log(ValidarCupon);
    if(Recorriendo){
        Descount = Recorriendo.valor;
    }
    else{
        Parrafo.innerText = 'No se pudo papi';
    }

    const newPrice = (Precio.value * (100-Descount))/100;
    Parrafo.innerText = 'El valor es $' + newPrice;
} */


/* function CheckDescuento(){
    if(array[DescuentoT.value]){
        Descount = array[DescuentoT.value];
    }
    else{
        Parrafo.innerText = 'Cupon invalido';
    }   

    const newPrice = (Precio.value * (100-Descount))/100;
    Parrafo.innerText = 'El valor es $' + newPrice;
} */


const couponList = [];
couponList.push({
    name: 'Des1',
    discount: 50
})

Boton.addEventListener('click', Descuento);

function Descuento(){
    function Patito(couponElement){
        return couponElement.name == DescuentoT.value;
    }
    const Acumulador = couponList.find(Patito);
    if(Acumulador){
        Descount = Acumulador.discount;
        const newPrice = (Precio.value * (100-Descount))/100;
        Parrafo.innerText = 'El valor es $' + newPrice;
    }
    else{
        Parrafo.innerText = 'Ya no funciona bro';
    }
}
