const ladoCuadrado = 5;
const PerimetroC=ladoCuadrado*4;

const areaCuadrado=ladoCuadrado*ladoCuadrado;
let arreglo =[
    ladoCuadrado,
    PerimetroC,
    areaCuadrado
]

/* for(repeticion of arreglo )
{
    console.log(repeticion);
} */

/* const ladoT1= 6;
const ladoT2= 6;
const ladoTBase= 6;
const altura= 5.5;

const PerimetroT= ladoT1+ladoT2+ladoTBase;
const AreaT = (ladoTBase*altura)/2;

console.log({
    PerimetroT,
    AreaT,
    altura,
    ladoT1,
    ladoT2,
    ladoTBase
}); */

/* function calculartriangulo(lado1,lado2,base,altura){
    return {
        perimetro: lado1+lado2+base,
        area: (base*altura)
    };
}
 */

/* function calcularCirculo(radio){
    const Pi = 3.1415;
    const diametro = radio*2;
    const circunferencia = diametro * Math.PI.toFixed(4);
    const area = Math.pow(radio, 2)* Math.PI.toFixed(4);
    return{
        Pi,
        radio,
        diametro,
        circunferencia,
        area
    }
} */
console.group('triangulo isoseles')
function CalcularTrianguloIsoseles(lado1, lado2, base){
    if(lado1 && lado2 == base){
        console.warn('No se puedew calcular por que todos los lados son iguales')
    } if(lado1 && lado2 != base){
        if(lado1 == lado2){
            const Calcularadentro = (Math.pow(lado1, 2)) - ((Math.pow(base, 2))/ 4)
            const CalcularAltura = Math.sqrt(Calcularadentro).toFixed(4);
            return CalcularAltura;
        }else{
            console.warn('Nose puede calcular ya que los lados de los triangulos son diferentes')
        }
    }
}
console.groupEnd('triangulo isoseles');
const Producto1 = document.querySelector('.Product');
const Descuento1 = document.querySelector('.Descuento');
const Parrafo = document.querySelector('.parrafo');
const Boton = document.querySelector('.Calcular');

Boton.addEventListener('click', RealizarDescuento);

function RealizarDescuento(){
    if(Descuento1.value == '' || Producto1.value == ''){
        alert('llena todos los campos para poder realizar la operacion');
        Producto1.value = '';
        Descuento1.value = ''; 
    }
    else{
        if(Descuento1.value<=100){
            let suma = Number((Producto1.value)* (100 - Number(Descuento1.value)))/100;
            Parrafo.innerHTML = 'tu compra de niño pendejo es de ' + suma;  
            Producto1.value = '';
            Descuento1.value = ''; 
        } 
        else{
            alert('no se puede calcular el nuevo precio verifique que el descuento sea menor o igal a 100');
            Producto1.value = '';
            Descuento1.value = ''; 
        }  
    }    
}

console.groupEnd('Calcular descuento');


