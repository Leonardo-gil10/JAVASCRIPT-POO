//defino la clase
class Carro{
    //Metodo Constructor
    constructor(marca,modelo,color,año,puertas){
        this.marca = marca // propiedades para la instancia
        this.modelo = modelo
        this.color = color
        this.año = año
        this.puertas = puertas



    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Carro</h3><br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("modelo: "+this.modelo+"<br>")
        document.write("color: "+this.color+"<br>")
        document.write("año: "+this.año+"<br>")
        document.write("puertas: "+this.puertas+"<br>")
    }


    //metodo
    encender(){
        document.write(" El Carro " +this.marca + " Esta Encendido")
       
    }

}
//Metodo para instanciar la clase Carro
let carro1 = new Carro("Toyota", "Highlander", "Plateado"," 2022 ", "5")
let carro2 = new Carro("Porsche", "911 Model", "Rojo"," 1973 ", "2")
let carro3 = new Carro("Tesla", "Model 3", "Negro"," 2024 ", "4")

//Mostrar los detalles de cada objeto
carro1.mostrarDetalles()
carro1.encender()
carro2.mostrarDetalles()
carro2.encender()
carro3.mostrarDetalles()
carro3.encender()

