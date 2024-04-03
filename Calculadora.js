class Calculadora {
   /**
    * Funcion sumar() que toma dos numeros y devuelve la suma de estos numeros.
    * @param num1 - Primer numero.
    * @param num2 - Segundo numero.
    * @returns La suma de dos numeros.
    */
    sumar(num1, num2) {
        return num1 + num2;
    }

    /**
    * Funcion restar() que toma dos numeros y devuelve la resta de estos numeros.
    * @param num1 - Primer numero.
    * @param num2 - Segundo numero.
    * @returns La resta de dos numeros.
    */
    restar(num1, num2) {
        return num1 - num2;
    }

    /**
    * Funcion dividir() que toma dos numeros y devuelve la division de estos numeros.
    * @param num1 - Primer numero.
    * @param num2 - Segundo numero.
    * @returns La division de dos numeros.
    */
    dividir(num1, num2) {
        return num1 / num2;
    }

    /**
    * Funcion multiplicar() que toma dos numeros y devuelve la multiplicacion de estos numeros.
    * @param num1 - Primer numero.
    * @param num2 - Segundo numero.
    * @returns La multiplicacion de dos numeros.
    */
    multiplicar(num1, num2) {
        return num1 * num2;
    }

   /**
    * Esta función toma un número como argumento y devuelve la raíz cuadrada de ese número
    * 
    * @param num1 El número a ser raíz cuadrada.
    * 
    * @return La raíz cuadrada del número.
    */
    raiz(num1) {
        return Math.sqrt(num1);
    }   
    
    
    /**
     * Toma un número y devuelve una cadena con el número más un signo de porcentaje
     * 
     * @param num1 El número que se va a convertir en un porcentaje.
     * 
     * @return el valor de la variable num1 con el símbolo %.
     */
    porcentaje(num1){
        return num1+"%";
    }
    
} 