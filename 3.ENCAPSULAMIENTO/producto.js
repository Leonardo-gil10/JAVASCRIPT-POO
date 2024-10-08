//creacion de la clase
class Productos{
    //constructor
    constructor(nombre, precio, cantidad, categoria){
        this._nombre = nombre;
        this._precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        }

        //metodo getter para nombre
        obtenerNombre() {
            return this._nombre;
        }
        //metodo getter para precio
        obtenerPrecio(){
            return this._precio;
        }

        //metodo setter para nombre
        establecerNombre(nuevo_nombre){
            this._nombre = nuevo_nombre
        }
        //metodo setter para precio
        establecerPrecio(nuevo_precio){
            this._precio = nuevo_precio;
        }

        //mostrar detalles del objeto
        mostrardetalles(){
            document.write(`Nombre: ${this._nombre}<br>`)
            document.write(`Precio: ${this._precio}<br>`)
            document.write(`Cantidad: ${this.cantidad}<br>`)
            document.write(`Categoria: ${this.categoria}<br>`)
        }
    }
    // objeto

    const producto = new Productos("Iphone 15", 4000000, 2, "Tecnologia");

    //imprimir
    producto.mostrardetalles();

    document.write("<hr>")

    //modificar atributos encapsulados usando getter y setter
    producto.establecerNombre("SAMSUNG S22");
    document.write(`Nombre: ${this._nombre() } <br>`)
    producto.establecerPrecio(3500000);
    document.write(`Precio: ${this._precio() }<hr>`)
    document.write(`Cantidad: ${this.cantidad() }`)
    document.write(`Categoria: ${this.categoria()}`)