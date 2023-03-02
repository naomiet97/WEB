let array = [3, 4, 5, 6];
console.log(array.join("==>"));
array.push(7, 8);
console.log(array.join("==>"));
array.shift(1, 2);
console.log(array.join("==>"));
array.splice(3, 3);
console.log(array.join("==>"));
array.reverse();
console.log(array.join("==>"));
array.sort();
console.log(array.join("==>"));


//EJERCICIO 10

let weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
weekdays.forEach(function (day) {
    console.log(day);
})

for (let i = 0; i < weekdays.length; i++) {
    console.log(weekdays[i])
}

for (let i in weekdays) {
    console.log(weekdays[i]);
}

let i = 0;
while (i < weekdays.length) {
    console.log(weekdays[i]);
    i++
}

for (let index in weekdays) {
    console.log(weekdays[index])
}

for (let item of weekdays) {
    console.log(item);

}

// 0) RECORRE UN ARRAY DE LOS DÍAS DE LA SEMANA DE 4 FORMAS DISTINTAS
// 1) DEVUELVE OTRO ARRAY DONDE CADA DIA DE LA SEMANA SE LE CONCATENE 
// 			  EL NÚMERO DE LA SEMANA DE 1 A 7
// 2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE
// 3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE
// 4) ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE.


let week = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
weekdays.forEach(function (day) {
    console.log(day);
})

let daysOfWeek = new Array(week);
let day = 0;
for(let i = 0; i < daysOfWeek.length; i++)
console.log(daysOfWeek.map(function (day) {
    return day + days.indexOf(day);
}));

let days = new Array(week);
days.filter(function (day){
    return day
});
console.log(days);

days.some(function(day){
    return day;
    console.log(days);

})

days.sort(function (a, b) {
    return days;
    console.log(days);

})