class Categoria{
    constructor(idCategoria, nombreCategoria){
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
    }

     // GETS
     
    getId(){
        console.log('Id: ')
        return this.idCategoria;
    }
    getNombreCategoria(){
        console.log('Categoria: ')
        return this.nombreCategoria;
    }
}