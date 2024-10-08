class Empleado{
    //Metodo Constructor
    constructor(nombre,edad,cargo,salario,area){
        this.nombre = nombre // propiedades para la instancia
        this.edad = edad
        this.cargo = cargo
        this.salario = salario
        this.area = area



    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Epleado</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Edad: "+this.edad+"<br>")
        document.write("Cargo: "+this.cargo+"<br>")
        document.write("Salario: "+this.salario+"<br>")
        document.write("Area: "+this.area+"<br>")
    }


    //metodo
    laborar(){
        document.write(" El Empleado " +this.nombre + " Esta Laborando")
       
    }

}
//Metodo para instanciar la clase Empleado
let empleado1 = new Empleado("Leonardo", "30 años", "Auxiliar Contable"," 1500000 ", "Contable")
let empleado2 = new Empleado("Jorge", "26 años", "Administrador"," 1300000 ", "Administrativa")
let empleado3 = new Empleado("Deimer", "29 años", "Economista"," 2000000 ", "Publicidad")


//Mostrar los detalles de cada objeto
empleado1.mostrarDetalles()
empleado1.laborar()
empleado2.mostrarDetalles()
empleado2.laborar()
empleado3.mostrarDetalles()
empleado3.laborar()


