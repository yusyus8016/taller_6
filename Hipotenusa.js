
   let ladoA = parseFloat(prompt("Ingrese medida del primer lado para calcular Hipotenusa. "))
   let ladoB = parseFloat(prompt("Ingrese medida del segundo lado. "))
   
   
   let raiz = ladoA * ladoA + ladoB * ladoB
   let h = Math.sqrt(raiz)
   
   console.log("La Hipotenusa del triángulo es: " + h )