const ID = document.querySelector('.ID');
const boton = document.querySelector('.boton');
const Parrafo = document.querySelector('.Resultado')

users = [];
users.push({
    name: 'Juancito',
    id: 123
})

boton.addEventListener('click', Autentificar);


function Autentificar(){

    function IdRevision(Autentificacion){
        return Autentificacion.id == ID.value;
    }

    const Verificacion = users.find(IdRevision);

    console.log(Verificacion);

    if(Verificacion){
        Parrafo.innerText = 'ID correcto';
    }
    else{
        Parrafo.innerText = 'ID no esncontrado';
        console.log(Verificacion);
    }
}

ListaN = [4,4,6];
function calcularnumeros(Lista){
    const sumarlista = Lista.reduce((a, b) => a+b);

    let comprobante = sumarlista % 2;

    if(comprobante == 0){
        console.log('es par');
    }else{
        console.log('es impar');
    }
}

calcularnumeros(ListaN);