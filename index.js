/* Obtiene los elementos del archivo HTML. */
/* getElementById se encarga de devolver elemento por su ID*/
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
/* querySelectorAll se encarga de devolver una lista de 
elementos del documento que coinciden con el grupo de selectores indicados.*/
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
/* Crea una nueva instancia de la clase Display. */
const display = new Display(displayValorAnterior, displayValorActual);

/* Agrega un detector de eventos a cada botón en la matriz botonesNumeros. */
botonesNumeros.forEach(boton => {
    /* Método addEventlistener que indica al navegador que este atento a la interacción del usuario,
        la cual sera el click en el boton para ejecutar el metodo agregarnumero en la pantalla que 
        hemos llamado display.
       El InnerHTML es similar al return, devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. */
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

/* Agrega un detector de eventos a cada botón en la matriz botonesOperadores. */
botonesOperadores.forEach(boton => {
     /* Método addEventlistener que indica al navegador que este atento a la interacción del usuario,
        la cual sera el click en el boton para ejecutar el metodo computar en la pantalla que 
        hemos llamado display. */
    boton.addEventListener('click', () => display.computar(boton.value))
});