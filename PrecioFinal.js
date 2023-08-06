
let totalApagar, descuento, iva
let precio1 = parseFloat(prompt("Ingrese el precio del artículo: "))

descuento = precio * 0.20 
iva = (precio1 - descuento)  * 0.15
totalApagar = precio1 - descuento + iva

console.log("-El precio con descuento es: " + (precio1 - descuento)+"$")
console.log("-El descuento aplicado es: " + descuento+"$")
console.log("-El iva aplicado es: " + iva +"$")
console.log("-El precio final con iva aplicado es: " + totalApagar+"$")
