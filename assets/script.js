//seleccionar un número para ejercicio
let seleccion = prompt("Escriba un número del 1 al 5")

if (seleccion == "1") {
    ejercicio1();
}

if (seleccion == "2") {
    ejercicio2();
}


if (seleccion == "3") {
    ejercicio3();
}


if (seleccion == "4") {
    ejercicio4();
}


if (seleccion == "5") {
    ejercicio5();
}

//ejercicio 1
function ejercicio1() {
    let num = prompt("ingrese un número del 1 al 100" , "");
    for (i = 0; i <= num; i ++) console.log(i);
}

//ejercicio 2
function ejercicio2() {
    let input = prompt ("¿De que color es el caballo blanco de Napoleón?")
    let color = 'blanco'
    input.toLowerCase == color.toLowerCase 
        ? alert("Esta respuesta está correcta") : ejercicio2();
}

//ejercicio 3
function ejercicio3() {
    let matematicas = +prompt ("Introduce promedio de notas de matemáticas");
    let fisica = +prompt ("Introduce promedio de notas de física");
    let ciencias = +prompt ("Introduce el promedio de notas de ciencias");
    let promedio = (matematicas + fisica + ciencias)/3;
    alert(Math.round(promedio));
}

//ejercicio knjjknkjnkj
function ejercicio4(){
    let cant = [1,2,3]
    let frutas = [];
    cant.forEach ( () => {
        let fruta = prompt ("Ingrese el nombre de una fruta");
        frutas.push(fruta)

    })
    frutas.forEach ( f => {
        if (f !== "manzana"){
        console.log(f);
    }
    });
}

//ejercicio 5
function ejercicio5() {
    let nombre = prompt ("Escribe tu nombre");
    let vocales = ["a", "e", "i", "o", "u"];

    let nombre2 = nombre.split("");
    let vocalesNum = 0;
    let consonantes = 0;

    nombre2.forEach(letra => {
        vocales.includes (letra) ? vocalesNum ++ : consonantes ++;
        
    });
    console.log ( `La cantidad de vocales es ${vocalesNum}  ` );
    console.log (` La cantidad de consonantes es  ${consonantes}`);
}