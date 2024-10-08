// Super clase
class Dispositivo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.capacidad_bateria = parseInt(prompt("Digite el porcentaje de bateria en mah:")); // se usa prompt para pedir input
    }

    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>DISPOSITIVO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca:", this.marca, "<br>");
        document.write("Modelo:", this.modelo, "<br>");
        document.write("Año:", this.año, "<br>");
        document.write("Capacidad bateria:", this.capacidad_bateria, "<br>");
    }
}

// Subclase Smartphone
class Smartphone extends Dispositivo {
    constructor(marca, color, modelo, año, sistemaoperativo) {
        super(marca, modelo, año); // hereda de dispositivo
        this.sistemaoperativo = sistemaoperativo;
        this.tipoconectividad = prompt("Ingrese el tipo de conectividad: "); // prompt para pedir input
    }

    encender() {
        document.write("sistemaoperativo:", this.sistemaoperativo, "<br>"); // imprime 
        if (this.capacidad_bateria > 0) {
            document.write("<hr>");
            document.write(`<div class="alert alert-success" role="alert">El Dispositivo ${this.marca}, Modelo ${this.modelo} año ${this.color} Esta encendido !! </div>`);
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">El Dispositivo ${this.marca}, Modelo ${this.modelo} año ${this.color} No enciende !! </div>`);
        }
    }
}

// Instanciando la subclase Carro
let objeto_smartphone = new Smartphone('XIAOMI', 'REDMI NOTE 11', '2023', ' ANDROID'); //objeto_carro
objeto_smartphone.registrar(); // registrando el smartphone
objeto_smartphone.encender(); // encendiendo el carro


