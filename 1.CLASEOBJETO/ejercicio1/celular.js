//defino la clase
class Celular{
    //Metodo Constructor
    constructor(marca,bateria,color,modelo,camara){
        this.marca = marca // propiedades para la instancia
        this.bateria = bateria
        this.color = color
        this.modelo = modelo
        this.camara = camara



    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Dispositivo Movil</h3><br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("bateria: "+this.bateria+"<br>")
        document.write("color: "+this.color+"<br>")
        document.write("Modelo: "+this.modelo+"<br>")
        document.write("camara: "+this.camara+"<br>")
    }



    //metodo para encender celular
    encender(){
        //Atributo privado para solo encender celular
        let energia = parseInt(prompt("Digite el valor de la carga: "));
        // Evaluamos si tiene carga el celular
        if (energia > 0){
            document.write("El celular : " + this.modelo + " se puede encender <br>");
            document.write( `||||||||||| ${energia} % de carga <br>` );
            document.write(`<hr>`);
        } else{
            document.write("El celular : " + this.modelo + " no se puede encender <br>");
            document.write(` ||||||||||| ${energia} % de carga <br>` );
            document.write(`<hr>`);
        }
    }

}
//Metodo para instanciar la clase celular
let celular1 = new Celular("Xiaomi", "80 %", "Azul"," Redmi Note 11", "128 mpx")
let celular2 = new Celular("Samsung", "75 %", "Negro", "Galaxy A20", "32 mpx")
let celular3 = new Celular("Apple", "100 %", "Gris", "iphone 11", "64 mpx")

//Mostrar los detalles de cada objeto
celular1.mostrarDetalles()
celular1.encender()
celular2.mostrarDetalles()
celular2.encender()
celular3.mostrarDetalles()
celular3.encender()