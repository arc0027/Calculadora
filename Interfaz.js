class Display {
    /**
     * Esta función es la constructora de la clase Calculadora
     * 
     * @param displayValorAnterior La pantalla que muestra el valor anterior.
     * @param displayValorActual Esta es la pantalla donde se muestra el valor actual.
     */
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-',
            porcentaje: '%',
            raiz: '√',
        }
    }

    /**
     * La funcion borrar() toma los valores de la calculadora, lo convierte en una cadena, 
     * elimina el ultimo valor de la cadena e imprime el resultado.
     */
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    /**
     * La funcion borrarTodo() limpia todos los valores de la calculadora, tanto los anteriores como los actuales.
     */
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.imprimirValores();
    }

    
    /**
     * La función toma un parámetro llamado tipo, y si tipoOperación no es igual a igual, llama a la
     * función calcular. Luego, establece tipoOperacion en el parámetro tipo, establece valorAnterior
     * en valorActual o valorAnterior, y establece valorActual en una cadena vacía. Finalmente llama a
     * la función imprimirValores
     * 
     * @param tipo El tipo de operación a realizar.
     */
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

   /**
    * Añade un número al valor actual.
    * 
    * @param numero El número que se suma al valor actual.
    * 
    * @return el valor de la variable valorActual.
    */
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }


    /**
     * La función imprimirValores() se utiliza para mostrar el valor actual y el valor anterior en la
     * pantalla
     */
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    /**
     * La función toma el valor de la entrada anterior y la entrada actual, y luego usa el objeto de la
     * calculadora para realizar la operación que fue seleccionada por el usuario
     * 
     * @return El valor de la operación actual.
     */
    calcular() {
        /* Convierte los valores en flotantes. */
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        /* Comprobando si el valor es un número. Si no es un número, devuelve el valor. 
        La funcion isNaN intenta convertir el parámetro pasado a un número. 
        Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.*/
        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}