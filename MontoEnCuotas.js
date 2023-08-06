
let ValorTotal= parseFloat(prompt("Ingrese el valor de la compra. "))

PrimeraCuota = ValorTotal
SegundaCuota = ValorTotal * (1 + 0.05)
SestaCuota = ValorTotal * (1 + 0.4)


totalSegundaCuota = SegundaCuota * 2
totalSestaCuota = SestaCuota * 6

console.log(" Formas de pago posibles: Primera cuota de " + PrimeraCuota+"$")
console.log(" Segunda cuota sera de " + SegundaCuota + "$ con recargo de 5%  " + totalSegundaCuota+"$")
console.log(" Sesta cuota sera de " + SestaCuota + "$ con recargo de 40% " + totalSestaCuota+"$")


