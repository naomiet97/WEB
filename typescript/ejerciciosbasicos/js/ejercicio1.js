"use strict";
//Pasar el siguiente código JavaScript a TypeScript 
// var nombre; nombre = "Pablo"; var edad;
// edad = 30;
// var PERSONAJE = {
//     nombre: nombre,
// edad: edad };
//VERSION 1
let nombre;
nombre = "Pablo";
let edad;
edad = 30;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
let p2 = { nombre: "Pablo", edad: 30 };
class Rombo {
    constructor(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    calcularArea() {
        return this.diagonalVertical * this.diagonalHorizontal;
    }
}
