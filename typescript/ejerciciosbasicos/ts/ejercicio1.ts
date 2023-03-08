
//Pasar el siguiente código JavaScript a TypeScript 

// var nombre; nombre = "Pablo"; var edad;
// edad = 30;
// var PERSONAJE = {
//     nombre: nombre,
// edad: edad };

//VERSION 1
let nombre: string;
nombre = "Pablo";
let edad: number;
edad = 30;
const PERSONAJE:object = {
    nombre: nombre,
    edad: edad
};


//VERSION 2
interface PERSONAJE2{
    nombre: string;
    edad: number;
}

let p2: PERSONAJE2 = { nombre: "Pablo", edad:30}





class Rombo {

    private diagonalVertical: number;
    private diagonalHorizontal: number;



    constructor(diagonalVertical: number, diagonalHorizontal: number) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }

    public calcularArea(): number {
        return this.diagonalVertical * this.diagonalHorizontal;
    }

}