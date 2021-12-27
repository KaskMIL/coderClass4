const valido = (monto) =>{return monto<= 10000 && monto > 0};

function cuotas (cantidad){
    if(cantidad > 0 && cantidad <= 6){
        return 1.1;
    }
    else if(cantidad >=7 && cantidad <= 12){
        return 1.2;
    }
    else if( cantidad >= 13 && cantidad <= 18){
        return 1.3;
    }
    else if( cantidad >=19 && cantidad <= 24){
        return 1.4;
    }
    else{
        return 0;
    }
}

function interes (int, monto){
    return int*monto;
}

alert("Bienvenido al cotizador de prestamos!");
alert("podra ingresar un monto hasta 10000usd y seleccionar hasta 24 cuotas");
let monto = prompt("Ingrese monto");
let cuota = prompt("Ingrese cantidad de cuotas");

let montoInt = parseInt(monto);
let cuotasInt = parseInt(cuota);
let montoTotal;

if(valido(montoInt)){
    let cInteres = cuotas(cuotasInt);
    if(cInteres != 0){
        montoTotal = interes(cInteres,montoInt);
    }
    else{
        alert("la cantidad de cuotas ingresadas no corresponden")
    }
}

let montoCuotas = montoTotal / cuotasInt;

alert(`Usted ha pedido un prestamo por ${montoInt} USD, debera pagar ${cuotasInt} cuotas de ${montoCuotas}, por lo que terminara abonando un total de ${montoTotal} USD`);
