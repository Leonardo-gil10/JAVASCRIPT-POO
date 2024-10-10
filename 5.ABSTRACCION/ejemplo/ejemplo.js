/**
 * Clase abstracta FormaGeometrica
 * Representa una forma geométrica genérica que debe implementar el método calcularArea.
 */
class FormaGeometrica {
    /**
     * Método abstracto calcularArea
     * Debe ser implementado por las subclases.
     * @throws {Error} Si el método no es implementado.
     */
    calcularArea() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}

/**
 * Clase Cuadrado
 * Hereda de FormaGeometrica e implementa el método calcularArea.
 */
class Cuadrado extends FormaGeometrica {
    /**
     * Constructor para crear un nuevo Cuadrado.
     * @param {number} lado - La longitud del lado del cuadrado.
     */
    constructor(lado) {
        super();
        this.lado = lado;
    }

    /**
     * Calcula el área del cuadrado.
     * @returns {number} El área del cuadrado.
     */
    calcularArea() {
        return this.lado ** 2;
    }
}

/**
 * Clase Circulo
 * Hereda de FormaGeometrica e implementa el método calcularArea.
 */
class Circulo extends FormaGeometrica {
    /**
     * Constructor para crear un nuevo Círculo.
     * @param {number} radio - El radio del círculo.
     */
    constructor(radio) {
        super();
        this.radio = radio;
    }

    /**
     * Calcula el área del círculo.
     * @returns {number} El área del círculo.
     */
    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases

const cuadrado = new Cuadrado(5);
document.write(`<p>Área del cuadrado: ${cuadrado.calcularArea()}</p>`);

const circulo = new Circulo(3);
document.write(`<p>Área del círculo: ${circulo.calcularArea()}</p>`);
