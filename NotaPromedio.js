let primerExamen = parseFloat(prompt("Ingrese primera calificación. "))
let SegundoExamen = parseFloat(prompt("Ingrese segunda calificación. "))
let TercerExamen = parseFloat(prompt("Ingrese tercera calificación. "))


let pon1 = primerExamen * 0.25
let pon2 = SegundoExamen * 0.25
let pon3 = TercerExamen * 0.50

let promedioFinal = pon1 + pon2 + pon3

console.log("-El 25 % del exámen uno es: " + pon1)
console.log("-El 25 % del exámen dos es: " + pon2)
console.log("-El 50 % del exámen tres es: " + pon3)
console.log("-El promedio final es: " + promedioFinal)