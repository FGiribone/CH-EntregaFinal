class Producto extends Categoria{
    constructor(idCategoria,nombreCategoria,descripcion,codigo,precio,stock,urlImagen){
        super(idCategoria,nombreCategoria);
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.precio = precio;
        this.stock = stock;
        this.urlimagen = urlImagen;
    }

    // GETS
    getDescripcion(){
        console.log('Descripcion: ');
        return this.descripcion;
    }
    getCodigo(){
        console.log('Codigo:')
        return this.codigo
    }
    getPrecio(){
        console.log('Precio: ')
        return this.precio
    }
    getStock(){
        console.log('Stock:')
        return this.stock
    }

    mostrarImagen() {
        const imagenElement = document.createElement('img');
        imagenElement.src = this.urlImagen;
        imagenElement.alt = this.nombre;
        document.body.appendChild(imagenElement);
    }

    mostrarCodigo(){
    console.log('Descripción: ${this.nombre}');
    console.log('precio: ${this.precio}');
    console.log('codigo: ${this.codigo}');
    }

}
