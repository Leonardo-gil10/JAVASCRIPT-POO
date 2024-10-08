// Super clase
class Vehiculo {
    constructor(marca, color, modelo) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.numero_llantas = parseInt(prompt("No. de Llantas:")); // se usa prompt para pedir input
    }

    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>CARRO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca:", this.marca, "<br>");
        document.write("Color:", this.color, "<br>");
        document.write("Modelo:", this.modelo, "<br>");
        document.write("No. de Llantas:", this.numero_llantas, "<br>");
    }
}

// Subclase Carro
class Carro extends Vehiculo {
    constructor(marca, color, modelo, placa) {
        super(marca, color, modelo); // hereda de Vehiculo
        this.placa = placa;
        this.gasolina = parseInt(prompt("No. de Galones de Gasolina:")); // prompt para pedir input
    }

    encender() {
        document.write("Placa:", this.placa, "<br>"); // imprime la placa
        if (this.gasolina > 0) {
            document.write("<hr>");
            document.write('<div class="alert alert-success" role="alert">El carro ${this.marca}, con placa ${this.placa} de color ${this.color} enciende !! </div>');
        } else {
            document.write("<hr>");
            document.write('<div class="alert alert-danger" role="alert">El carro ${this.marca}, con placa ${this.placa} de color ${this.color} no enciende !! </div>');
        }
    }
}

// Instanciando la subclase Carro
let objeto_carro = new Carro('SUZUKI', 'Rojo', '2822', 'PPC 54C'); //objeto_carro
objeto_carro.registrar(); // registrando el carro
objeto_carro.encender(); // encendiendo el carro


