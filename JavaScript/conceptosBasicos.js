"use strict"; //para que te obligue a declarar variables
// console.log("Hola Mundo");
//alert("HOLA"); ALERTAS AL USUARIO
// var x = 2;
// prompt("Dame un número");
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0)

//         document.write("<p>PARRAFO PAR</p>");
//     else
//         document.write("PARRAFO IMPAR");
// }
// const pi = 3.1416; //constante
// let y; //undefined
// y = 5; // number
// y = "hola"; //string
// y = true;//boolean
// let number = prompt("Dame un número");
// alert("El número que has escrito es: " + number);


// const x = prompt("Dame un primer número");
// const y = prompt("Dame un segundo número");
// let p1 = prompt("Escriba un párrafo para el primer número");
// let p2 = prompt("Escriba un párrafo para el segundo número")
// for (let i = 0; i <= x; i++) {
//     if (i <= x) {
//         document.write("<p>" + p1 + "</p>");
//     } else if (i >= x) {
//         document.write("<p>" + p2 + "</p>");
//     }
// }


// let x = +prompt("Dame un primer número");
// let y = +prompt("Dame un segundo número");
// // let p2 = prompt("Escriba un párrafo para el segundo número")
// let greater;
// if (x > y) {
//     alert(x + " es mayor que " + y)
//     greater = x;
// } else if (y > x) {
//     alert(y + " es mayor que " + x)
//     greater = y;
// } else {
//     alert(x + " es igual que " + y);
//     greater = x;
// }

// for (let i = 1; i <= greater; i++) {
//     let p1 = prompt("Escriba un párrafo" + i);
//     document.write("<p>" + p1 + "</p>");
// }

// let grade = new Array(20);
// grade[0]=5;
// grade[1]=9;
// ...grade[];
// grade[20]=10;
// const vowels = "aeiouAEIOU"
// let nVowels = 0;
// for (let i = 0; i < text.length; i++) {
//     if (vowels.indexOf(text[i]) !== -1) {
//         nVowels++;
//     }
// }
// document.write("<p>" + "La oración que escribiste tiene " + nVowels + " vocales" + "</p>")


// for (let j = text.length; j >= 0; j--) {
//     console.log(text.charAt(j));
// }


// let text = prompt("Escriba una oración");
// let nVowels = 0;
// let reverseString = "";
// for (let i = 0; i < text.length; i++) {
//     if (text.charAt(i).toLowerCase() == "a" || text.charAt(i).toLowerCase() == "e" || text.charAt(i).toLowerCase() == "i" || text.charAt(i).toLowerCase() == "o" || text.charAt(i).toLowerCase() == "u")
//         nVowels = nVowels + 1;
//     reverseString = text.charAt(i) + reverseString;
// }
// alert("Cantidad de vocales es: " + nVowels + "\nCadena al revés: " + reverseString);



// 6*8
// 5 - 6
// 4 + 7 = 11
// if(!(x==y)) es igual que if(x!==y)

//     if (i.search(/vowels/)) {
//         console.log(vowels);
//     }

// }
// let num, num2;
// do {
//     num = +prompt("Escriba un número");
//     if (isNaN(num))
//         alert("No es un número");
// } while (isNan(num));
// do {
//     num2 = +prompt("Escriba otro número");
//     if (isNan(num2))
//         alert("No es un número");
// } while (isNan(num2));
// num = +num;
// num2 = +num2;
// let max = Math.max(num, num2);
// let min = Math.min(num, num2)

// let positives = 0;
// let negatives = 0;
// let even = 0;
// let odd = 0;
// let cadena = " ";
// for (let i = min; i <= max; i++) {
//     if (i > 0) {
//         positives++;

//     }
//     else if (i < 0) {
//         negatives++;
//     }
//     if (i % 2 !== 0) {
//         odd++;
//     } else {
//         even++;
//     }

//     console.log("Positive: " + positives++)
//     console.log("Negative: " + negatives++);
//     console.log("Odd: " + odd++);
//     console.log("Even: " + even++);
// }
// let sum = x + y;
// console.log("La suma: " + sum);




/*
1) PEDIR 2 NUMEROS (VALIDAR HASTA EL INFINITO QUE NOS LOS DA)
2) AVERIGUAR CUAL DE LOS DOS ES MÁS PEQUEÑO Y MAS GRANDE. 
METERLOS EN 2 VARIABLE (peque y grande)
3) RECORRER DE peque a grande (bucle)
4) CONTADORES positivos, negativos, pares, impares, suma	
5) FACTORIAL 6
6) IMPRIMIR RESULTADOS EN VARIOS CONSOLE o ALERT  
		6 -2

		
		CADENA:-2 -1 0 1 2 3 4 5 6		
		 PARES:5
	  IMPARES:4
	 POSITIVOS:7
	 NEGATIVOS:2
	 SUMA TOTAL:18
	FACTORIAL 6:720 = 6*5*4*3*2*1
  
  
  
  
 */ 
    // function pedirNumero(texto,texto2){
    //     let numero;
    //     do{
    //         numero=prompt(texto);
    //         if(numero=="")
    //             alert("Error!, el número no puede ser vacío");
    //         if(isNaN(numero))
    //             alert(texto2);
    //     }while(isNaN(numero) || numero=="");	
    //     return numero;
    // }

    // let num,num2;
    
    // num=+pedirNumero("Dame un número","Error!, te he dicho que me des un número");
    // num2=+pedirNumero("Dame otro número","Error!, te he dicho que me des otro número");
    // let peque,grande;
    
    // /*
    //     let peque=(num>num2)?num2:num;
    //     let grande=(num>num2)?num:num2;
    // */
    // /*
    //     let peque=Math.min(num,num2);
    //     let grande=Math.max(num,num2);
    // */
    
    // if(num>num2){
    //     peque=num2;
    //     grande=num;
    // }
    // else{
    //     peque=num;
    //     grande=num2;			
    // }

    // let cadena="";
    // let suma=0;
    // let factorial=1;
    // let positivos=0;
    // let negativos=0;
    // let pares=0;
    // let impares=0;
    // let empezar;
    // if(peque<1)
    //     empezar=peque;
    // else
    //     empezar=1;
    
    
    // for(let i=empezar;i<=grande;i++){	
    //     if(i>=peque){
    //         cadena=cadena+" "+i;
    //         if(i>=0)
    //             positivos++;
    //         else
    //             negativos++;
            
    //         if(i%2==0)
    //             pares++;
    //         else
    //             impares++;
            
    //         suma=suma+i;
    //     }
    //     if(i>0)
    //         factorial=factorial*i;
    // }
    // //for(let i=grande;i>=1;i--)
    //     //factorial=factorial*i;
    
    // console.log("CADENA:"+cadena);
    // console.log("PARES:"+pares);
    // console.log("IMPARES:"+impares);
    // console.log("POSITIVOS:"+positivos);
    // console.log("NEGATIVOS:"+negativos);
    // console.log("SUMA TOTAL:"+suma);
    // if(grande>0)
    //     console.log("FACTORIAL DE "+grande+":"+factorial);
    // else
    //     console.log("NO HAY FACTORIAL");
