console.log("************************ Variables **********************");
console.log('        ');
// Con = asignas un valor 


console.log("************************ Var **********************");
console.log('        '); 
var banda = "El kuelgue"        /* MALA PRACTICA: var es una variable global, si la definis dentro
                                de una funcion, sigue pudiendose usar fuera de la funcion.  */
console.log("Mi banda favorita es",banda, "que se encuentra ANTES del bloque"); 



// Un bloque en JS es algo que esta entre {}
{ 
    var banda = "Imagine dragons"
    console.log("Mi banda favorita es",banda, "que se encuentra DENTRO del bloque");
}

console.log('Por "logica" si ahora llamo a mi banda favorita');
console.log(' tendria que aparecer El kuelge, ya que estamos afuera del bloque');
console.log("Mi banda favorita es",banda, "que se encuentra FUERA y DEESPUES del bloque");

// Este comportamiento se llama ELEVACION DE VARIABLES: var banda = "Imagine dragons"
// Sale fuera del bloque y ID superpone a El kuelgue.


console.log('        '); 
console.log("************************ LET **********************");
console.log('        '); 

let artista = "Lana del Rey"     /* Let es de BLOQUE, solo existe en el bloque que fue definida  */
console.log("Mi artist@ favorit@ es",artista, "que se encuentra ANTES del bloque");

{ 
    let artista = "Justin Bieber"
    console.log("Mi Artist@ fav es",artista, "que se encuentra DENTRO del bloque");
}

console.log('Por "logica" si ahora llamo a mi artist@ favorita');
console.log(' tendria que aparecer Lana del Rey, ya que estamos afuera del bloque');
console.log("Mi artist@ fav es",artista, "que se encuentra FUERA y DEESPUES del bloque");



console.log('        '); 
console.log("************************ Ejemplo LET y VAR **********************");
console.log('        '); 


var peliculaFavorita = "El origen"
console.log(peliculaFavorita);

var peliculaFavorita = "Avatar"
console.log(peliculaFavorita);

// Las variables se superponen

var peliculaFavorita = "El origen"
console.log(peliculaFavorita);

var peliculaFavorita = "Avatar"
console.log(peliculaFavorita);


console.log('        '); 
console.log("************************ Const **********************");
console.log('        '); 

// Se utiliza const cuando la variable no va a cambiar a lo largo del proyecto
const miNombre = "Soraya"
console.log(miNombre);
// const miNombre = "Camila"                  Salta ERROR



// PERO
// DEPENDE de si usas datos primitivos o compuestos:


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

// Esto es debido a que cuando accedes a un objeto o a un array, no accedes al valor directo si
// no a una referencia de ese valor. La referencia del valor sigue siendo el mismo.
// Si agregas un objeto mas, el objeto sigue siendo objeto.

const objecto = {
    nombre: "SORAYA",
    apellido: "Perez"
}
console.log(objecto);

objecto.segundoNombre ="Maite"         // No salta error al agregar algo, a pesar que se definio como const
console.log(objecto);





// Las constantes no pueden estar vacias para luego cargarle valores
// const miApellido;                              //Salta ERROR
let miApellido;                                // NO salta error
var miSegundoNombre;                           // NO salta error

miApellido= "Perez"
console.log(miApellido);






console.log("************************* Tipos de datos ***************");
console.log('        ');


console.log('PRIMITIVOS: string,number,boolean,null,undefined,NaN');
console.log('COMPUESTOS: // object = {} , array = [],  function (){},  Class {} , etc.');


// Identifica los tipos de datos - typeof

dato = 36
console.log(typeof dato) //numer

dato1="Pepe"
console.log(typeof dato1) //string

dato2= true
console.log(typeof dato2) //boolean


console.log("************************* Primitivos: String ***************");
console.log('        ');

let miNombre1="Soraya"
let miApellido1 = "Perez";                                
let miSegundoNombre1 = "Maite";                          

console.log(miNombre1,miApellido1,miSegundoNombre1); //Al poner , lo imprimis todo junto

// Podes CONCATENAR
console.log("Hola soy "+miNombre1 +miSegundoNombre1 +miApellido1); //Sale todo junto
// Para no cambiar las variables genero espacios
console.log("Hola soy "+miNombre1+" " +miSegundoNombre1+ " " +miApellido1);



// Podes INTERPOLAR VARIABLES con TEMPLATE SRTINGS  alt + 96
console.log(`Hola soy ${miNombre1} ${miSegundoNombre1} ${miApellido1}`);

// `` te deja hacer una variable con saltos de linea
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
let lista2= "<ul>";
lista2 += "<li>Verano</li>";
lista2 += "<li>Otoño</li>";
lista2 += "<li>Invierno</li>";
lista2 += "<li>Primavera</li>";
lista2 += "</ul>";

console.log(lista2);



// .length: longitud del string
console.log(miNombre1.length); 
console.log(miApellido1.length)
console.log(miNombre1.length+miApellido1.length)  // RT:11

let miNombreYapellido ="Soraya Perez" // RT:12 Los espacios en blanco cuentan 
console.log(miNombreYapellido.length);



console.log('        ');
console.log("************************* METODOS: String ***************");
console.log('        ');

// Un metodo es una ACCION que te permite ejecutar algo: va entre ()

let cad= "Aprendiendo JavaScript "

/*  .toLowerCase(): Devuelve el texto de la variable en minúsculas.
    .toUpperCase(): Devuelve el texto de la variable en mayúsculas.*/
    console.log(cad.toLowerCase());  // pasa a minúsculas
    console.log(cad.toUpperCase());  // pasa a mayúsculas


// .includes()  Busca si es un string existe la palabra que esta entre los ()
console.log(cad.includes("Java"));
console.log(cad.includes("JavaScript"));
console.log(cad.includes("Soraya"));

// .trim()      Borra los espacios en blanco SOBRANTES del principio y del final
console.log(cad);  // No tiene espacios blancos
console.log(cad.trim());

let cad1= "                 Tengo espacios            en blanco             "
console.log(cad1);  // Tiene 
console.log(cad1.trim());


// .split()     Separa dependiendo el valor que le pongas ()
console.log(cad.split(""));    // .split("") Nada        RT: separa letra por letra
console.log(cad.split(" "));   // .split(" ") Un espacio RT: separa palabra por palabra 
console.log(cad.split(";"));   // .split(";")            RT: No pasa nada, porque no hay ningun ;  en el string



console.log('        ');
console.log("************************* PRIMITIVOS: Numbers ***************");
console.log('        ');

let a=1
let b=2
let c=3.19
let d="1"
console.log(a,b,c);

// .toFixed(x)      Redondea a (x) digitos
console.log(c.toFixed(1));                              //RT: 3.2



// parseInt 
console.log(parseInt(c));             //Devuelve la parte entera 
console.log(parseFloat(c));           //Devuelve las dos partes

// ¿Para que sirve el parseInt?
console.log(typeof a,typeof d);      //RT : number  string
console.log(a+d);                    //RT : 11
// Esta CONCATENANDO:Esta uniendo el valor 1 (num) y el 1 (string)

// ENTONCES parseas
console.log(a+parseInt(d));           //RT : 2




console.log('        ');
console.log("************************* PRIMITIVOS: Booleans ***************");
console.log('        ');

let verdadero = true
let falso = false

console.log(verdadero,falso);
console.log(typeof verdadero);


console.log('        ');
console.log("************************* TRUTHY: Booleans ***************");
console.log('        ');
// TRUTHY Valores que tienden a verdadero
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
// FALSY Valores que tienden a falso
console.log(Boolean(0)); // RT: F
console.log(Boolean(false)); //RT: F
console.log(Boolean(null)); //RT: F
console.log(Boolean(0)); //RT: F
console.log(Boolean(NaN)); //RT: F
console.log(Boolean("")); //RT: F



console.log('        ');
console.log("************************* PRIMITIVOS: undefined  ***************");
console.log('        ');
                                    // No se inicializo la variable
let indefinida;                    // no se le asigno ningun valor
console.log(indefinida);
console.log(typeof indefinida);
// JS DETECTA que no le asignaste nigun valor y le pone UNDEFINED


console.log('        ');
console.log("************************* PRIMITIVOS: Null ***************");
console.log('        ');

// VOS sos el que establece que una variable NO TIENE VALOR
let sinValor = null
console.log(sinValor);
console.log(typeof sinValor);




///////////// Tanto undefined como null significan que la variable esta vacia
///////////// Lo que cambia es quien le adjudica ese comportamiento



console.log('        ');
console.log("************************* PRIMITIVOS: NaN  ***************");
console.log('        ');


//Nan = not a number

// Haces operaciones donde alguno no es un num

let noEsNumero ="hola"*1
console.log(noEsNumero);



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