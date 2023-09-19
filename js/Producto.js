class Producto{
    constructor(descripcion,codigo,precio,stock,urlImagen,categoria){
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.precio = precio;
        this.stock = stock;
        this.urlimagen = urlImagen;
        this.categoria = categoria;
    }

    // GETS
    getDescripcion(){
        console.log('Descripcion: ${this.descripcion')
    }
    getCodigo(){
        console.log('Codigo: ${this.Codigo')
    }
    getPrecio(){
        console.log('Precio: ${this.precio')
    }
    getStock(){
        console.log('Stock: ${this.stock')
    }
    getCategoria(){
        console.log('Categoria: ${this.categoria')
    }

    mostrarCodigo(){
    console.log('Descripción: ${this.nombre}');
    console.log('precio: ${this.precio}');
    console.log('codigo: ${this.codigo}');
    console.log('Categoria:${this.categoria.nombre}')
    }
    
    mostrarImagen() {
        const imagenElement = document.createElement('img');
        imagenElement.src = this.urlImagen;
        imagenElement.alt = this.nombre;
        document.body.appendChild(imagenElement);
    }

}
