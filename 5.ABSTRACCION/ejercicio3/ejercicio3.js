/**
 * Clase abstracta TareaEmpleado
 * Representa un empleado genérico que debe implementar el método realizarTarea.
 */
class TareaEmpleado {
    /**
     * Método abstracto realizarTarea
     * Debe ser implementado por las subclases.
     * @throws {Error} Si el método no es implementado.
     */
    realizarTarea() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}

/**
 * Clase Ingeniero
 * Hereda de TareaEmpleado e implementa el método realizarTarea.
 */
class Ingeniero extends TareaEmpleado {
    /**
     * Constructor para crear un Ingeniero.
     * @param {string} nombre - El nombre del ingeniero.
     */
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    /**
     * Implementa la tarea específica de un ingeniero.
     * @returns {string} La tarea realizada por el ingeniero.
     */
    realizarTarea() {
        return `${this.nombre} está diseñando un puente.`;
    }
}

/**
 * Clase Doctor
 * Hereda de TareaEmpleado e implementa el método realizarTarea.
 */
class Doctor extends TareaEmpleado {
    /**
     * Constructor para crear un Doctor.
     * @param {string} nombre - El nombre del doctor.
     */
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    /**
     * Implementa la tarea específica de un doctor.
     * @returns {string} La tarea realizada por el doctor.
     */
    realizarTarea() {
        return `${this.nombre} está realizando una cirugía.`;
    }
}

// Uso de las clases

const ingeniero = new Ingeniero("Carlos");
document.write(`<p>${ingeniero.realizarTarea()}</p>`);

const doctor = new Doctor("Ana");
document.write(`<p>${doctor.realizarTarea()}</p>`);
