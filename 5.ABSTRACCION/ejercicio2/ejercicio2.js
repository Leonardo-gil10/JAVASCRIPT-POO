/**
 * Clase abstracta Empleado
 * Representa un empleado genérico que debe implementar el método calcularSalario.
 */
class Empleado {
    /**
     * Método abstracto calcularSalario
     * Debe ser implementado por las subclases.
     * @throws {Error} Si el método no es implementado.
     */
    calcularSalario() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}

/**
 * Clase EmpleadoTiempoCompleto
 * Hereda de Empleado e implementa el método calcularSalario.
 */
class EmpleadoTiempoCompleto extends Empleado {
    /**
     * Constructor para crear un empleado de tiempo completo.
     * @param {number} salarioMensual - El salario mensual del empleado.
     */
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    /**
     * Calcula el salario del empleado de tiempo completo.
     * @returns {number} El salario mensual.
     */
    calcularSalario() {
        return this.salarioMensual;
    }
}

/**
 * Clase EmpleadoPorHoras
 * Hereda de Empleado e implementa el método calcularSalario.
 */
class EmpleadoPorHoras extends Empleado {
    /**
     * Constructor para crear un empleado por horas.
     * @param {number} horasTrabajadas - El número de horas trabajadas.
     * @param {number} tarifaPorHora - La tarifa por hora.
     */
    constructor(horasTrabajadas, tarifaPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    /**
     * Calcula el salario del empleado por horas.
     * @returns {number} El salario basado en horas trabajadas.
     */
    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso de las clases

const empleadoTiempoCompleto = new EmpleadoTiempoCompleto(350000);
document.write(`<p>Salario del empleado de tiempo completo: ${empleadoTiempoCompleto.calcularSalario()}</p>`);

const empleadoPorHoras = new EmpleadoPorHoras(5500, 8);
document.write(`<p>Salario del empleado por horas: ${empleadoPorHoras.calcularSalario()}</p>`);
