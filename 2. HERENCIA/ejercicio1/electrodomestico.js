// Super clase
class Electrodomestico {
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumo_electrico = parseInt(prompt("ingrese el consumo en kwh:")); // se usa prompt para pedir input
    }

    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMESTICO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca:", this.marca, "<br>");
        document.write("Color:", this.color, "<br>");
        document.write("Capacidad:", this.capacidad, "<br>");
        document.write("consumo_electrico:", this.consumo_electrico, "<br>");
    }
}

// Subclase Carro
class Refrigerador extends Electrodomestico {
    constructor(marca, color, capacidad, tiporefrigerador) {
        super(marca, color, capacidad); // hereda de Vehiculo
        this.tiporefrigerador = tiporefrigerador;
        this.temperatura = parseInt(prompt("Ingrese la temperatura:")); // prompt para pedir input
    }

    ajustar() {
        document.write("tiporefrigerador:", this.tiporefrigerador, "<br>"); // imprime el tipo de refrigerador
        if (this.temperatura > 10) {
            document.write("<hr>");
            document.write(`<div class="alert alert-success" role="alert">El electrodomestico ${this.marca}, de color ${this.color} con capacidad ${this.capacidad} tiene una temperatura estable !! </div>`);
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">El electrodomestico ${this.marca}, de color ${this.color} con capacidad ${this.capacidad} no enciende !! </div>`);
        }
    }
}

// Instanciando la subclase Carro
let objeto_refrigerador = new Refrigerador('HACEB', 'GRIS', '2000LT', ' FROST'); //objeto_carro
objeto_refrigerador.registrar(); // registrando 
objeto_refrigerador.ajustar()


