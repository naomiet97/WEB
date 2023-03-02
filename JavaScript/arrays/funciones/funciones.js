//Funciones: 

function saludar(nombre) {
    return `Hola ${nombre}`;
}

// console.log(saludar("nigger"));


function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 6))

//Función anónima (Se usa para llamar funciones dentro de otra función, como parámetro);


let arrayNum = [14, 26, 30, 4, 15, 6, 8, 2, 9];
function logicaOrdenacion(n1, n2) {
    return n1 - n2; // si pongo n2-n1 los devuelve en reversa.
}

console.log(arrayNum.sort(logicaOrdenacion)); //Tengo que darle a sort una función que devuelva lo que pide, en este caso n1-n2 para devolverlo de menor a mayor.


//ESTO ES UNA FUNCIÓN ANÓNIMA //SIN NOMBRE, PERO SE PUEDE METER EN UNA VARIABLE PARA LLAMARLA EN OTRO MOMENTO

// function (n1, n2) {

//     return n2 - n1;
// }

console.log(arrayNum.reverse((n1, n2) => { n1 - n2 }));



console.log(arrayNum.sort)
// 0) RECORRE UN ARRAY DE LOS DÍAS DE LA SEMANA DE 4 FORMAS DISTINTAS
// 1) DEVUELVE OTRO ARRAY DONDE CADA DIA DE LA SEMANA SE LE CONCATENE 
// 			  EL NÚMERO DE LA SEMANA DE 1 A 7
// 2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE
// 3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE
// 4) ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE.


let daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (let i = 0; i < daysOfWeek.length; i++) {

    console.log(daysOfWeek[i] + " " + (i + 1));


    // let holi = "hola";
    // let adios = "adios";
    // console.log(holi + adios);


    /*console.log(daysOfWeek[1]);
    console.log(daysOfWeek[2]);
    console.log(daysOfWeek[3]);
    */
}

//FUNCIÓN DE PRIMER ORDEN; RECIBE UN NUMERO Y DEVUELVE UNA FUNCIÓN
const wrapper = (num) => {
    return () => {
        return () => {
            return 5 + num;
        }
    }
}

console.log(wrapper(3)()());

//MODO MÁS USADO
const wrapper2 = (fn) => {
    console.log("Esto es antes de ejecutar fn()");
    let result = fn();
    return result;


}

console.log(wrapper2(function () {

    return 5 - 3;
}));

// 2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE

let words = ["Amigos", "Cocina", "Campos", "Conducir"];

const consonantFilter = words.filter((value) => {

    if ("AEIOUaeiou".includes(value[value.length - 1])) {
        return false;
    } else {
        return true;
    }
})

console.log(consonantFilter);



const consonantes = function (words) {
    if ("AEIOUaeiou".includes(words[words.length - 1])) {
        return false;
    } else {
        return true;
    }
}



console.log(words.filter(consonantes));

/*
const vowels = "AEIOUaeiou";
for (let v of vowels) {
    if (value[value.length - 1] == v) {
        
        return false;
    }
}
return true;

*/


// 3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE

const includesAOrEBoolean = daysOfWeek.some((value) => {
    for (let i = 0; i < daysOfWeek.length; i++) {
        if ((value[i]).includes(("z"))) {
            return false;
        } else {
            return true;
        }
    }
})

console.log(includesAOrEBoolean);


//PARA IMPRIMIR SOLO LOS DÍAS QUE CONTENGAN AEae
// const condition = (words) => /[AEae]/i.test(words);
const includesAOrE = daysOfWeek.filter((words) => /[AEae]/i.test(words));
console.log(includesAOrE);


// 4) ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE.

console.log(daysOfWeek.reverse((a, b) => { a - b }))

/*
1.Dada una matriz de números, usa el método Array.map() para multiplicar cada número por 2 y devolver una nueva matriz con los resultados.
2.Dada una matriz de nombres de frutas, use el método Array.filter() para devolver solo aquellos nombres que contienen la letra "a".
3.Dada una matriz de números, use el método Array.reduce() para sumar todos los números y devolver el resultado total.
4.Dada una matriz de objetos con propiedades nombre y edad, use el método Array.sort() para ordenar los objetos por edad de menor a mayor.
5.Dada una matriz de números, use el método Array.forEach() para imprimir cada número en la consola.

*/
//1
let num = [4, 5, 7, 2, 9];
const multiplyBy2 = num.map((n1) => {
    let numsByTwo = [0];
    return n1 * 2;
    numsByTwo.push(n1);
});
console.log(multiplyBy2);

//2

let fruits = ["Manzana", "Piña", "Naranja", "Limón"];
const fruitFilter = fruits.filter((containsA) => /[Aa]/i.test(containsA));
console.log(fruitFilter);

//3

let numbers = [1, 2, 3, 4, 5, 10];
const reduce = numbers.reduce(num => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
})

console.log(reduce)

//4
let persona = {
    nombre: ["Copito", "Juan"],
    edad: [200, 70],
}

const organizarPorEdad = persona.edad.sort((a, b) => a - b);
console.log(organizarPorEdad);


//5
let arrayNum2 = [3, 4, 8, 2, 9];
arrayNum2.forEach(e => console.log(e));


//6 Create an array of numbers and use the push() method to add a new number to the end of the array.
//7 Create an array of strings and use the join() method to join the strings into a single string.
//8 Create an array of numbers and use the sort() method to sort the numbers in ascending order.
//9 Create an array of numbers and use the reduce() method to calculate the sum of all the numbers.
//10 Create an array of objects and use the filter() method to filter out objects that meet a certain condition.
//11 Write a function that takes an array of numbers and returns a new array with only the even numbers.
//12 Write a function that takes an array of strings and returns a new array with the first letter of each string capitalized.
//13 Write a function that takes an array of numbers and returns the average of those numbers.
//14 Write a function that takes an array of objects and returns the names of the objects in a comma-separated string.
//15 Write a function that takes an array of numbers and returns a new array with each number squared.


//6 
let arrayAddNums = [1, 2, 3, 4,];
arrayAddNums.push(9);
console.log(arrayAddNums);


//7
let arrayJoinStrings = [" Hola", "me", "gustan", "los", "helados"];
let arrayAfterJoinStringMethod = arrayJoinStrings.join('*');
console.log(arrayAfterJoinStringMethod);

//8
let arrayToSort = [3, 4, 1, 9, 7];
let sortedArray = arrayToSort.sort((a, b) => a - b);
console.log(sortedArray);

//9
let arrayToReduce = [3, 5, 1, 9,];
const sum = arrayToReduce.reduce((a, b) => a + b);
console.log(sum);

//10

let arrayToFilter = {

    country: ["Germany", "Austria", "Belgium"],
    city: ["Frankfurt", "Hallstatt", "Brussels"]
}


const filterMethod = arrayToFilter.country.filter((containsO) => /[o]/i.test(arrayToFilter))
console.log(filterMethod);
//imprime el array de objetos que NO contenga la letra o, en caso de contenerlo alguno de los elementos, no imprime ninguno.


let arrayToFilter2 = [
    { name: "Kate", age: 25 },
    { name: "John", age: 29 },
    { name: "Jake", age: 45 }


]

const filterMethod2 = arrayToFilter2.filter((age) => age.age===25)
console.log(filterMethod2);
//imprime el array de objetos que NO contenga la letra o, en caso de contenerlo alguno de los elementos, no imprime ninguno.

//11
let arrayNumbers = [ 1,2,3,4,5,6,];
const arrayEvenNumbers = arrayNumbers.filter((num) => num%2===0);
console.log(arrayEvenNumbers);


