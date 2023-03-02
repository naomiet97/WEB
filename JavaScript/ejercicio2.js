function askUser(option) {
    option = prompt("Escriba numero para escribir el numero de la tabla o display para el modo de visualización");

    if (option =="numero"){
        let num;
        do {
            num = prompt("Escriba un número del 1 al 10");
            if (num == "") alert("Error! el número no puede estar vacío");
            if (isNaN(num) || num > 10 || num <= 0) { alert(texto2) }
        } while (isNaN(num) || num > 10 || num <= 0 || num == "");
        return +num;
    } else if (option =="display"){
        let display;
        do {
            display = prompt("¿LISTA, PÁRRAFO o TABLA?")
            if (display != "LISTA" && display != "PARRAFO" && display != "TABLA") {
                alert("Tienes que elegir entre LISTA, PARRAFO o TABLA")
            }
        } while (display != "LISTA" && display != "PARRAFO" && display != "TABLA");
    }

}

let number1, number2;

number1 = askNum("Dame un número", "Error, quiero un número");
number2 = askNum("Dame un número", "Error, quiero un número");

let min = Math.min(number1, number2);
let max = Math.max(number1, number2);

if (display == "LISTA") {
    function list(min, max) {
        document.write("<ul>");
        for (let i = 1; i <= max; i++) {
            document.write("<li>" + min + " x " + i + " = " + min * i + "</li>")
            document.write("</ul>")
        }
    }
} else if (display == "TABLA") {
    function table(min, max) {
        document.write("<table>");
        for (let i = 1; i <= max; i++) {
            document.write("<tr> <td>" + min + " x " + i + "<td>" + "<td>" + "= " + "</td>" + " <td>" + (min * i) + "</td>" + "</tr>")
            document.write("</table>")
        }
    }
} else if (display == "PARRAFO") {
    function paragraph(min, max) {
        document.write("<div>");
        for (let i = 1; i <= max; i++) {
            document.write("<p>" + min + " x " + i + " = " + min * i + "</p> <br>");
        }
        document.write("</div>");

    }
}
