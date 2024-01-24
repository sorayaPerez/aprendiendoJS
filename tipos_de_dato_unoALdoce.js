console.log("************************ Variables **********************");
console.log('        ');
// Con = asignas un valor 


console.log("************************ Var: variable global **********************");
console.log('        ');
var banda = "El kuelgue"        /* MALA PRACTICA: var es una VARIABLE GLOBAL, si la definis dentro
                                de una funcion, sigue pudiendose usar fuera de la funcion.  */
console.log("Mi banda favorita es", banda, "que se encuentra ANTES del bloque");

//? Un bloque es algo que esta entre {}

{
    var banda = "Imagine dragons"
    console.log("Mi banda favorita es", banda, "que se encuentra DENTRO del bloque");
}
// JS NO tenia ambito de bloque. En otros lenguajes banda solo existe dentro del bloque.

console.log('Por "logica" si ahora llamo a mi banda favorita');
console.log(' tendria que aparecer El kuelge, ya que estamos afuera del bloque');
console.log("Mi banda favorita es", banda, "que se encuentra FUERA y DEESPUES del bloque");
//                               hoosting?
//? Este comportamiento se llama ELEVACION DE VARIABLES: var banda = "Imagine dragons"
//? Sale fuera del bloque y ID superpone a El kuelgue.
//? El SCOPE o ALCANCE es por funcion



console.log('        ');
console.log("************************ LET varibale de bloque (EC6) **********************");
console.log('        ');

let artista = "Lana del Rey"     /* Let es de BLOQUE, solo existe en el bloque que fue definida  */
console.log("Mi artist@ favorit@ es", artista, "que se encuentra ANTES del bloque");

{
    let artista = "Justin Bieber"
    console.log("Mi Artist@ fav es", artista, "que se encuentra DENTRO del bloque");
}

console.log('Por "logica" si ahora llamo a mi artist@ favorita');
console.log(' tendria que aparecer Lana del Rey, ya que estamos afuera del bloque');
console.log("Mi artist@ fav es", artista, "que se encuentra FUERA y DEESPUES del bloque SIIII LANA DEL RETYY");


// console.log(Window);
// Este comportamiento se puede observar con el comanado window pero en el lado del 
// NAVEGADOR. Se ve que artista = "Lana del Rey" se guarda como variable y  let artista = "Justin Bieber" no al tener un alcance de bloque.
//? Osea var se guarda, y let no




console.log('        ');
console.log("************************ Ejemplo LET y VAR **********************");
console.log('        ');

//? 1º 
var peliculaFavorita = "Harry Potter"
console.log(peliculaFavorita);

var peliculaFavorita = "Avatar"
console.log(peliculaFavorita);
//Con var las variables se superponen


//? 2º 
// let peliculaFavorita = "El origen"
// console.log(peliculaFavorita);

// Con let salta error porque la variable ya existe
// SyntaxError: Identifier 'peliculaFavorita' has already been declared

//? 3º  Al tener el nombre repetido, usando let, automaticamente te sale error
// let peliculaFavorita2 = "Jumanji"
// console.log(peliculaFavorita2);

// let peliculaFavorita2 = "Tarzan"
// console.log(peliculaFavorita2);



console.log('        ');
console.log("************************ Const (EC6) **********************");
console.log('        ');

//? Se utiliza const cuando la variable no va a cambiar a lo largo del proyecto (depende el tipo de dato)
const miNombre = "Soraya" // Siempre voy a ser Soraya
console.log(miNombre);
// const miNombre = "Camila"                  Salta ERROR

const PI = 3.1416;
console.log(PI);
// PI = 3.15;                                 Salta ERROR
//TypeError: Assignment to constant variable.


//? PERO tiene peso si usas DATOS PRIMITIVOS
//? Con los compuestos no hay problema:

// (Recordemos

// PRIMITIVOS: Se accede directamente al valor.
// string
// number
// boolean
// null
// undefined = sin valor
// NaN   = not a number

// COMPUESTOS: Se accede a la referencia del valor.
// object = {}
// array = []
// function () { }
// Class {}
// etc.
// )

// Esto es debido a que cuando accedes a un objeto o a un array, no accedes al valor directo en si no a una referencia de ese valor. La referencia del valor sigue siendo el mismo.
//? El objeto soy YO, desde que naci hasta ahora me fueron cambiando los gustos, la altura pero nunca deje de ser YO. 
//? Si agregas un objeto mas, el objeto sigue siendo objeto.

const YO = {
    nombre: "SORAYA",
    apellido: "Perez",
    gustos: "Rock nacional, dibujo",
    altura: "1.75"
}
console.log(YO);

YO.segundoNombre = "Maite"         // No salta error al agregar algo, a pesar que se definio como const
console.log(YO);


//? Las constantes NO pueden estar vacias para luego cargarle valores
//? Las var SI
// const miApellido;                              //Salta ERROR
let miApellido;                                // NO salta error
var miSegundoNombre;                           // NO salta error

miApellido = "Perez"
console.log(miApellido);


console.log("************************* Tipos de datos ***************");
console.log('        ');

// En js todo son objetos (coleccion de información). 

console.log('PRIMITIVOS: string,number,boolean,null,undefined,NaN');
console.log('COMPUESTOS: // object = {} , array = [],  function (){},  Class {} , etc.');


//? typeof: Identifica los tipos de datos 

dato = 36
console.log(typeof dato) //numer

dato1 = "Pepe"
console.log(typeof dato1) //string

dato2 = true
console.log(typeof dato2) //boolean


console.log("************************* Primitivos: String ***************");
console.log('        ');

let miNombre1 = "Soraya"
let miApellido1 = "Perez";
let miSegundoNombre1 = "Maite";

console.log(miNombre1, miApellido1, miSegundoNombre1); //Al poner , lo imprimis todo junto

//? Podes CONCATENAR
console.log("Hola soy " + miNombre1 + miSegundoNombre1 + miApellido1); //Sale todo junto
// Para no cambiar las variables genero espacios
console.log("Hola soy " + miNombre1 + " " + miSegundoNombre1 + " " + miApellido1);

//? Podes INTERPOLAR VARIABLES con TEMPLATE SRTINGS  (alt + 96)
console.log(`Hola soy ${miNombre1} ${miSegundoNombre1} ${miApellido1}`);

//? `` te deja hacer una variable con saltos de linea
let lista = `    <ul>           
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
<li>Primavera</li>
</ul>`
// Lo imprime exqactamente como se ve

console.log(lista);

// let lista2 ="    <ul>           // ERROR si lo haces con " " (comillas dobles)
// <li>Verano</li>
// <li>Otoño</li>
// <li>Invierno</li>
// <li>Primavera</li>
// </ul>"

// OTRA OPCION
let lista2 = "<ul>";
lista2 += "<li>Verano</li>";
lista2 += "<li>Otoño</li>";
lista2 += "<li>Invierno</li>";
lista2 += "<li>Primavera</li>";
lista2 += "</ul>";

console.log(lista2);


//? .length: longitud del string
console.log(miNombre1.length);
console.log(miApellido1.length)
console.log(miNombre1.length + miApellido1.length)  // RT:11

let miNombreYapellido = "Soraya Perez" // RT:12 Los espacios en blanco cuentan 
console.log(miNombreYapellido.length);



console.log('        ');
console.log("************************* METODOS: String ***************");
console.log('        ');

//? En js todo son OBJETOS (coleccion de información). 
//? Las propiedades son atributos que te dan información sobre el objeto
//? Los metodos son ACCIONES que te permiten ejecutar algo: va entre ()

let cad = "Aprendiendo, JavaScript "

//?  .toLowerCase(): Devuelve el texto de la variable en minúsculas.
//?  .toUpperCase(): Devuelve el texto de la variable en mayúsculas.
console.log(cad.toLowerCase());  // pasa a minúsculas
console.log(cad.toUpperCase());  // pasa a mayúsculas


//? .includes()  Busca si es un string existe la palabra que esta entre los ()
console.log(cad.includes("Java"));
console.log(cad.includes("JavaScript"));
console.log(cad.includes("Soraya"));

//? .trim()      Borra los espacios en blanco SOBRANTES del principio y del final
console.log(cad);  // No tiene espacios blancos
console.log(cad.trim());

let cad1 = "                 Tengo espacios            en blanco             "
console.log(cad1);  // Tiene 
console.log(cad1.trim());

//? .split()     Separa la cad dependiendo el valor que le pongas entre () como separador.
console.log(cad.split(""));    // .split("") Nada        RT: separa letra por letra
console.log(cad.split(" "));   // .split(" ") Un espacio RT: separa palabra por palabra (Espacios en blanco entre palabras)
console.log(cad.split(","));   // .split(",")            RT: Separa en dos partes porque hay una coma.
console.log(cad.split(";"));   // .split(";")            RT: No pasa nada, porque no hay ningun ;  en el string



console.log('        ');
console.log("************************* PRIMITIVOS: Numbers ***************");
console.log('        ');

let a = 1
let b = 2
let c = 3.19
let d = "1"
console.log(a, b, c);

// .toFixed(x)      Redondea a (x) digitos
console.log(c.toFixed(1));                              //RT: 3.2

// parseInt 
console.log(parseInt(c));             //Devuelve la parte entera 
console.log(parseFloat(c));           //Devuelve las dos partes

//? ¿Para que sirve el parseInt?
console.log(typeof a, typeof d);      //RT : number  string
console.log(a + d);                    //RT : 11
//? Esta CONCATENANDO:Esta uniendo el valor 1 (num) y el 1 (string)

//? ENTONCES parseas
console.log(a + parseInt(d));           //RT : 2




console.log('        ');
console.log("************************* PRIMITIVOS: Booleans ***************");
console.log('        ');

let verdadero = true
let falso = false

console.log(verdadero, falso);
console.log(typeof verdadero);


console.log('        ');
console.log("************************* TRUTHY: Booleans ***************");
console.log('        ');

//? TRUTHY Valores que tienden a verdadero
console.log(Boolean(-7)); //RT: T
console.log(Boolean("foo")); //RT: T 
console.log(Boolean(3.14)); //RT: T 
console.log(Boolean(-3.14)); //RT: T 
console.log(Boolean(Infinity)); //RT: T 
console.log(Boolean({})); //RT: T 
console.log(Boolean([])); //RT: T 


console.log('        ');
console.log("************************* FALSY: Booleans ***************");
console.log('        ');

//? FALSY Valores que tienden a falso
console.log(Boolean(0)); // RT: F
console.log(Boolean(false)); //RT: F
console.log(Boolean(null)); //RT: F
console.log(Boolean(0)); //RT: F
console.log(Boolean(NaN)); //RT: F
console.log(Boolean("")); //RT: F



console.log('        ');
console.log("************************* PRIMITIVOS: undefined  ***************");
console.log('        ');
//? VALOR AUSENTE no le asignaste ningun valor por lo que JS le asigna undefined
// No se inicializo la variable
let indefinida;
console.log(indefinida);
console.log(typeof indefinida);

console.log('        ');
console.log("************************* PRIMITIVOS: Null ***************");
console.log('        ');

//? VALOR AUSENTE pero VOS le asignaste a la variable que NO TIENE VALOR.
let sinValor = null
console.log(sinValor);
console.log(typeof sinValor);


//? Tanto undefined como null significan que la variable esta vacia
//? Lo que cambia es quien le adjudica ese comportamiento

console.log('        ');
console.log("************************* PRIMITIVOS: NaN  ***************");
console.log('        ');
//Nan = not a number

// Haces operaciones donde alguno no es un num
let noEsNumero = "hola" * 1
console.log(noEsNumero);

/*================================================================================= 
==================================================================================
================================================================================= */
/*============================== FIN de datos PRIMITIVOS ===================== ==================================================================================
==================================================================================
================================================================================= */


console.log("************************ Tipos de datos: COMPUESTOS **********************");
console.log('        ');

//Recordamos:
// COMPUESTOS: Se accede a la referencia del valor.
// object = {}
// array = []
// function () { }
// Class {}
// etc.

console.log("*********** Funciones : tipo de dato COMPUESTOS **********************");
console.log('        ');

/*
Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:
Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/

//? Ejemplo 1:
console.log('**Funcion declarada**');

function nombreFuncion() { // Declaras con function que es una funcion 
    console.log('uno');
    console.log('dos');
    console.log('tres');
}

nombreFuncion // No pasa nada 
nombreFuncion() //? al poner () se invoca la funcion


//? Ejemplo 2: Funcion que devuelve valor
console.log(' ');

function fn_devuelve_unValor() {
    console.log('Soy el string');
    return "La funcion devuelve strings "
}

fn_devuelve_unValor() // Solo devuelve el  "Soy el string"
// Para que te devuelva todo tenes que hacer una variable y guardar el valor de la funcion
console.log('     ');


let valorDeFuncion = fn_devuelve_unValor();
console.log(valorDeFuncion);
console.log('     ');


//? Ejemplo 3:
function funcion1() {
    console.log('primer string');
    return "Se termina aca, ignora el resto"
    console.log('Soy el string');
    return "La funcion devuelve strings "
}
let valorFuncion1 = funcion1()
console.log(valorFuncion1);


//? Ejemplo 4:
console.log('     ');
console.log('**Funcion que recibe valores**');

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Soraya", 29);


//? Ejemplo 4":
function saludar1(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar1() // Si no pones los paramatros: "Hola mi nombre es undefined y tengo undefined años"

//? Lo que podes hacer es: 
function saludar2(nombre = "Desconocido", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar2() //Hola mi nombre es Desconocido y tengo 0 años



console.log('      ');
//? Ejemplo HOISTING o elevacion de funciones
// Js es un lenguaje interpretado, no necisita una etapa de compresion: mientras ejecuta el codigo lo interpreta

funcionDeclarar()                     //! Invocas funcion

function funcionDeclarar() {          //! Recien aca la declaras
    console.log('Ejecuto funcion');
}

funcionDeclarar() // Se ejecuta este y el de la linea 457
//? Independiente de donde declares la funcion, va elevar la funcion (hoisting) y no sale error.


console.log('  ');
console.log('Funciones expresadas ');
//? Tambien se llaman funciones anonimas (no tienen nombre)

// funcionExpresada() //ReferenceError: Cannot access 'funcionExpresada' before initialization

const funcionExpresada = function () {
    console.log('Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos tira error');
}

funcionExpresada()



//************************************************************************ */
console.log('  ');
console.log('ARREGLOS (ARRAYS): tipo de dato COMPUESTOS ');
// Un arreglo es una coleccion de elementos, incluso objetos.

const corchete = []; // array vacio
const unArray = [1, true, "hola", ["a", "b", "c"]] // Los arreglos empiezan en la posicion 0
console.log(corchete);

console.log(unArray.length);

// Si queres acceder solo al hola
console.log(unArray[2]);
console.log(unArray[3][0]);  // Tomas el a, del array anidado


// **** Otra forma
const array = Array.of("X", "Y", "Z", 9, 8, 7)
console.log(array);

// *** Otra forma

const array1 = Array(100).fill(false)
console.log(array1);


// ** METODOS de ARRAYS

const colores = ["Rojo", "Verde", "Azul"]
console.log(colores);
// .push                  Agrega un valor a lo ultimo
colores.push("Negro")
console.log(colores);

// .pop                   Quita el ultimo valor
colores.pop()
console.log(colores);

console.log('   ');
// .forEach
colores.forEach(function (elemento_iterando) {               // Iteras los colores del array.
    console.log(`<li> ${elemento_iterando} </li>`);         // usas template strings
})

console.log('   ');
// Podes hacer además que cada elemento tenga una id única.
colores.forEach(function (elemento_iterando, index) {                //
    console.log(`<li id="${index}"> ${elemento_iterando} </li>`);         //  
})




//************************************************************************ */
console.log('  ');
console.log('OBJETOS: tipo de dato COMPUESTOS ');
// Es una coleccion de pares llave/valor
// Es como si estuvieras en CSS :)

const yo = {
    nombre: "Soraya",
    apellido: "Perez",
    edad: 24,
    estado: "soltera",
    pasatiempos: ["musica", "Netflix", "pin pon", "ejercicio"],       // Tiene un array!
    contacto: {                                                     // Tiene otro objeto!!
        email: "perezsorayam@gmail.com",
        instagram: "no me lo acuerdo",
        celular: 112233354
    },
    saludar5: function () {
        console.log('hola')
    },
    decirMiNombre: function () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me podes seguir en ${this.contacto.email} `)   // this = este = el contexto en donde nos encontramos. Hace referencia al mismo objeto
    }
}

console.log(yo);
console.log(yo["pasatiempos"]); //accedes a tu objeto
console.log(yo.edad); //Buena practica
console.log(yo.pasatiempos[2]);
console.log(yo.contacto.instagram);
yo.saludar5
yo.decirMiNombre()

// Saludar al ser una funcion NO es un atributo, si un METODO
// El resto si son atributos de tu objeto "yo"


//+++++ Dentro de un objeto a las variables se le van a llamar atributos/propiedades
// ++++ A las funciones se las llama METODOS

/// Cuando queres hacer uso de una propiedad dentro de un objeto usas this




//*********************************** */
console.log('  ');
console.log('OBJETOS: METODOS ');

// .keys                           te lista los atributos de tu objeto
console.log(Object.keys(yo));

// .values                         te lista los valores de los atributos de tu objeto
console.log(Object.values(yo));

// hasOwnProperty
console.log(yo.hasOwnProperty("nombre")); // Evalua si la propiedad se encuentra dentro de tu objeto




// console.log("************************ OBJECT: Compuestos **********************");
// console.log('        ');




// /*************************** Operaciones ******************/

// console.log('**************** Operaciones Aritmeticas*********');
// console.log('        ');

// let suma= 2+2

// let resta=2-2

// let multiplicacion=2*2

// let division=2/2

// console.log(suma,resta,multiplicacion,division);

// let comparacion= 2 > 4;
// console.log(comparacion);

// let comparacion1= 2 < 4;
// console.log(comparacion1);

// let comparacion2= 2 == 2;
// console.log(comparacion2);


// let comparacion3= 2 != 4; /*Distinto estricto*/
// console.log(comparacion3);

// let comparacion33= 2 !== "4"; /*Distinto no-estricto*/
// console.log(comparacion3);



// console.log('       ');
// console.log('Comparaciones de igualdad');

// let comparacion22 = 2 =="2";
// let comparacion222 = 2 =="dos";
// let comparacionEstricta= 2 === "2"; /* Igualdad estricta: concidir valor y tipo de dato*/
// let comparacionEstricta1= 2 === "dos";

// console.log(comparacion22);
// console.log(comparacion222);
// console.log(comparacionEstricta);
// console.log(comparacionEstricta1);


// /********** MODULO */

// console.log('*********** Modulo ***********');

// let modulo =  10 % 2 /* Es el resto de la division = 0 */
// console.log(modulo);


// let modulo1 =  10 % 3 /* Es el resto de la division = 1 */
// console.log(modulo1);


// console.log('*********** Operadores logicos ***********');


// let comparacion4 = (2 > 2 ) && ( 2 == 2) /* &&  es Y se tienen que cumplir AMBAS*/
// console.log(comparacion4);


// let comparacion5 = (2 > 2 ) || ( 2 == 2) /* ||  es O se tiene que cumplir 1 SOLA*/
// console.log(comparacion5);









// cada tipo de dato tiene METODOS que son acciones que te permiten hacer cosas con ese dato
// Un prompt es un metodo

// Cuando peddis el valor de una variable con prompt y consolelog, el tipo de valor es string, a pesar que respondas con un nº

// let dni = parseInt(prompt("decime tu dni"))
// console.log(typeof dni)