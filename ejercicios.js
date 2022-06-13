// Ejercicio:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Ejercicio


let nombreUsuario=prompt('Ingrese su nombre')|| ''.toLowerCase();
    if (nombreUsuario==='martin'){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);
}
    else if (nombreUsuario==='Simón'){
        console.log(`Hola ${nombreUsuario}, te llamas igual que el personaje`);
    }
    else if (nombreUsuario.trim().length===0){
        console.log('No ingresaste ningún nombre.');
    }
    else{
        console.log(`Hola ${nombreUsuario}`);
    }

//Ejercicio

// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario=Number(prompt('Ingrese su edad: '));
const MI_EDAD=22;

if (edadUsuario>MI_EDAD){
    console.log(`Sos más viejo que yo`);
} else if (edadUsuario<MI_EDAD){
        console.log(`Sos más joven que yo`);
} else if (edadUsuario===MI_EDAD){
        console.log(`Tenes la misma edad que yo`);
} else{
        console.log(`No te entendí la respuesta`);
}



//Ejercicio:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


//Ejercicio 

let tieneDocumento=prompt(`¿Tiene usted documento?`).toLowerCase();


if (tieneDocumento==='si'){
    let edad=Number(prompt(`¿Cuántos años tienes?`));
    if (edad>=18){
        console.log(`Puedes entrar al bar`);
    }
    else {
        console.log(`No puedes entrar al bar`);
    }

}
else if (tieneDocumento==='no'){
    console.log(`No puedes entrar al bar`);
}
else{
    console.log(`No entiendo tu respuesta`);
}