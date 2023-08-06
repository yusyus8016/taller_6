
    let gastoHotel = parseFloat(prompt("ingresse cuantos días quedará en el Hotel."))
    let numDias = parseInt(prompt("Número de días que viajará. "))
    let gastoComida = parseFloat(prompt("Gasto de comida por día. "))

      totalcheque = (gastoHotel*numDias)+(gastoComida*numDias)+(numDias*200)
          
      
        console.log("-Total Hotel es: " + gastoHotel*numDias)
        console.log("-Total Comida es: " + gastoComida*numDias)
        console.log("-Total dinero de viaje: "+ totalcheque)
        console.log("-Total Otros gastos es: " + numDias*200)

       