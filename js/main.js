function noche(){
    document.body.classList.toggle("night-mode");
}
// Guardo el "input" con id "escritura"
let escritura = document.getElementById('escritura');
// Guardo todos los "button" con clase "btn"
let botones = Array.from(document.querySelectorAll('.btn'));
// Guardo el operador que elige el usuario
let operacion = '';
// Guardo el primar valor ingresado
let valor1 = '';
// Guardo el segundo valor ingresado después de guardar el operador
let valor2 = '';
// Guardo el resultado de la operación
let resultado = '';
// Para cada botón en "botones" haz lo que está dentro de llaves {}
// El parámetro "boton" representa 
botones.map( boton => {
    // Cuando se hace clic a un botón, obtenemos el texto del botón (et)
    // El (e) representa el evento y me deja acceder a info del evento
    boton.addEventListener('click', (e) => {
        // Guardo el texto del botón en "et"
        // e representa el evento (el "button")
        let et = e.target.innerText;
        // Si el valor o (innterText) de et es AC, se borra lo siguiente
        if(et == 'AC') {
            escritura.value = '';
            valor1 = '';
            valor2 = '';
            operacion = '';
            resultado = '';
        } else if(et == 'B') {
            escritura.value = escritura.value.slice(0, -1); // Borra el último carácter
        } else if(et == '%') {
            escritura.value = parseFloat(escritura.value) / 100; // Calcula el porcentaje
        } else if(et == '+' || et == '-' || et == 'x' || et == '/') {
            valor1 = escritura.value;
            operacion = et;
            escritura.value = '';
        } else if(et == '=') {
            valor2 = escritura.value;
            switch(operacion) {
                case '+':
                    resultado = parseFloat(valor1) + parseFloat(valor2);
                    break;
                case '-':
                    resultado = parseFloat(valor1) - parseFloat(valor2);
                    break;
                case 'x':
                    resultado = parseFloat(valor1) * parseFloat(valor2);
                    break;
                case '/':
                    resultado = parseFloat(valor1) / parseFloat(valor2);
                    break;
            }
            escritura.value = resultado;
            // Para realizar operaciones continuas
            valor1 = resultado;
        } else {
            // Aquí voy agregando los valores de lo botones con número al valor del "input"
            escritura.value += et;
        }
    });
});
