 const boton = document.getElementById("botonconvertir");
    boton.addEventListener("click", function(event) {
        event.preventDefault();

        const divisaOrigen = document.getElementById('DivisaOrigen').value;
        const cantidad = parseFloat(document.getElementById('Cantidad').value);
        const divisaDestino = document.getElementById('DivisaDestino').value;

        const divisaOrigenPrecio = divisas.find(divisa => divisa.nombre === divisaOrigen).precio;
        const divisaDestinoPrecio = divisas.find(divisa => divisa.nombre === divisaDestino).precio;

        // conversión por regla de 3 simples
        if (divisaOrigenPrecio !== undefined && divisaDestinoPrecio !== undefined) {
            const resultado = (cantidad * divisaOrigenPrecio) / divisaDestinoPrecio;

            const resultadoElemento = document.getElementById("resultado");
            resultadoElemento.textContent = `Resultado de la conversión: ${resultado} ${divisaDestino}`;
        }
 });
 //storage no supe como aplicar el local storage en mi pagina, guarde los precios de las divisas en pesos del dia anterior 

 localStorage.setItem("🍌", 500);
 localStorage.setItem("USD$", 1100);
 localStorage.setItem("€", 1600);
 let ayerBanana = localStorage.getItem("🍌");
 let ayerDolar= localStorage.getItem("USD$");
 let ayerEuro= localStorage.getItem("€");

 let cotizacionAyer =document.getElementById("precioDeAyer");
 cotizacionAyer.textContent =`Cotizacion de ayer\n :  🍌 = AR$${ayerBanana}\n , USD$ = AR$${ayerDolar}\n ,  € = AR$${ayerEuro}\n`;


 


    