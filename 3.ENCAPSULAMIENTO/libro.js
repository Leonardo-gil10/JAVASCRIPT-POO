//iniciamos clase
class Libros{

    //constructor
    constructor(titulo, autor, isbn, editorial){
        this._titulo = titulo
        this._autor = autor
        this._isbn = isbn
        this.editorial = editorial
    }

    //metodo getter
    obtener_titulo(){
        return this._titulo

    }
        
    obtener_autor(){
        return this._autor
    }
        
    
    obtener_isbn(){
        return this._isbn
    }
        
    
    //metodod setter
    nuevo_titulo(nuevo_titulo){
        this.__titulo = nuevo_titulo
    }
        
    nuevo_autor( nuevo_autor){
        this.__autor = nuevo_autor
    }
        
    
    nuevo_isbn( new_isbn){
        this.__isbn = new_isbn
    }
        
    
    //mostrar detalles
    
    mostrar(){
        document.write(`Titulo: ${ this.__titulo}` )
        document.write(`Autor: ${ this.__autor }`)
        document.write(`ISBN: ${this.__isbn }`)
        document.write(`Editorial: ${ this.editorial }`)
    }
        
}
   
             
//objeto
const libro = Libros("100 Años de soledad", "Gabriel Garcia Marquez",  9788497592208, "Editorial Sudamericana")

//imprimir 
libro.mostrar()
document.write("--------------------------------")
//imprimir el atributo encapsulado
libro.nuevo_titulo("Don Quijote de la Mancha")
document.write(`Titulo: ${ libro.obtener_titulo() }`)
libro.nuevo_autor(`Miguel de cervantes Saavedra`)
document.write(`Autor: ${ libro.obtener_autor() }`)
libro.nuevo_isbn(9789583004445)
document.write(`ISBN: ${libro.obtener_isbn() }`)
document.write(`Editorial: ${libro.editorial}`)