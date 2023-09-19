class Producto{
    constructor(descripcion,codigo,precio,urlImagen,categoria){
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.precio = precio;
        this.urlimagen = urlImagen;
        this.categoria = categoria;
    }

    obtenerCodigo(){
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
