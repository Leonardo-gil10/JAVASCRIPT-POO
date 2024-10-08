//defino la clase
class Animal{
    //Metodo Constructor
    constructor(nombre,edad,raza,alimento,color){
        this.nombre = nombre // propiedades para la instancia
        this.edad = edad
        this.raza = raza
        this.alimento = alimento
        this.color = color



    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Animal</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("edad: "+this.edad+"<br>")
        document.write("raza: "+this.raza+"<br>")
        document.write("alimento: "+this.alimento+"<br>")
        document.write("color: "+this.color+"<br>")
    }


    //metodo
    dormir(){
        document.write(" El Animal " +this.nombre + " Esta durmiendo ")
       
    }

}
//Metodo para instanciar la clase animal
let animal1 = new Animal("Conejo", "3 años", "Belier"," Legumbres", "Blanco")
let animal2 = new Animal("Gato", "2 años", "Siames"," Alimento para gatos", "Negro")
let animal3 = new Animal("Perro", "5 años", "Labrador"," Croquetas", "Cafe")

//Mostrar los detalles de cada objeto
animal1.mostrarDetalles()
animal1.dormir()
animal2.mostrarDetalles()
animal2.dormir()
animal3.mostrarDetalles()
animal3.dormir()
