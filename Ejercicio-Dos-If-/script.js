/*
    Requisitos?
        + solamente se puede ingrar bitcoins
        - se tiene que permitir poder convertir de ETH a USD
        - devolver en la pagina el resultado de la conversion
            - tiene que mostrar el valor recibido

    info?
        - 1 BTC = 13.54 ETH
        - 1 BTC = 39685.40 USD

*/

const CONVERSION_BTC_ETH = 13.54;
const CONVERSION_BTC_USD = 39685.40;

/*const CONVERSION_VERIFICADA_DEF = false;

 let btcRecibidos = parseFloat(prompt("Ingrese bitcoins a convertir"));
let conversionEthVerificada = confirm("Desea convertir a eth?"); */
const valorBitcoinIngresado = document.querySelector ("#btc");
const valorBoleanoIngresado= document.querySelector("#opcion-moneda");
function verificar() {
    conversionEthVerificada= valorBoleanoIngresado.value;
    btcRecibidos= valorBitcoinIngresado.value;
    if( conversionEthVerificada== "true" ){
        document.write("Valor ingresado: "+ btcRecibidos + " bitcoins y valor obtenido en conversion es de: "+ (btcRecibidos * CONVERSION_BTC_ETH) + " ETH" );
    } else if (conversionEthVerificada=="false"){
         document.write("Valor ingresado: "+ btcRecibidos + " bitcoins y valor obtenido en conversion es de: "+ (btcRecibidos * CONVERSION_BTC_USD) + " USD" );
    } else {
        document.write ("No podemos realiazar la accion")
    }

}

