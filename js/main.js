/* 
Giribone Fabricio

**** PreEntrega1 **** 

Fragmento del proceso de carga de una lista de códigos de productos 
para luego guardarlos en un archivo de formato .xlsx y poder usarlo 
sobre un carrito de compra.


    //const estructura = new Estructura();
    //estructura.solicitarCarga();
    //alert("*** fin del programa ****");


**** PreEntrega2 **** 

 Avances sobre:
    ->index.html
clases 
    -> producto
    -> categoria
Se separa el proceso de crear un archivo .xlsx del main.js 
    -> clase Estructura)
dejando el main lo mas limpio posible y se crea como clase separada del main
*/

/*
const producto1 = new Producto(1,"Cosmetica","Crema 1",1,899.99,100)
const producto2 = new Producto(1,"Cosmetica","Crema 2",2,1499.99,100)
const producto3 = new Producto(1,"Cosmetica","Crema 3",3,2999.99,100)
const producto4 = new Producto(2,"Indumentaria","Anillos 1",4,899.99,100)
const producto5 = new Producto(2,"Indumentaria","Anillos 2",5,899.99,100)
const producto6 = new Producto(2,"Indumentaria","Anillos 3",6,899.99,100)
const producto7 = new Producto(2,"Indumentaria","PANTALON",7,11999.99,100)
const producto8 = new Producto(2,"Indumentaria","REMERA",8,5999.99,100)
const producto9 = new Producto(3,"HOGAR","SET DE ESCOBA",9,7999.99,100)



console.log(producto1)
console.log(producto1.getDescripcion() + " "+ producto1.getNombreCategoria());
producto1.mostrarCodigo();
*/


const Productos = [];
    Productos.push(new Producto(1,"Cosmetica",1,"Crema 1",899.99, 100,"./Image/ImgProductos/1.jpeg")),
    Productos.push(new Producto(1,"Cosmetica",2,"Crema 2",1499.99, 100,"./Image/ImgProductos/2.jpeg")),
    Productos.push(new Producto(1,"Cosmetica",3,"Crema 3",2999.99, 100,"./Image/ImgProductos/3.jpeg")),
    Productos.push(new Producto(2,"Indumentaria",4,"Anillos 1",899.99, 100,"./Image/ImgProductos/4.jpeg")),
    Productos.push(new Producto(2,"Indumentaria",5,"Anillos 2",899.99, 100,"./Image/ImgProductos/5.jpeg")),
    Productos.push(new Producto(2,"Indumentaria",6,"Anillos 3",899.99, 100,"./Image/ImgProductos/6.jpeg")),
    Productos.push(new Producto(2,"Indumentaria", 7,"PANTALON",11999.99, 100,"./Image/ImgProductos/7.jpeg")),
    Productos.push(new Producto(2,"Indumentaria",8,"REMERA",5999.99, 100,"./Image/ImgProductos/8.jpeg")),
    Productos.push(new Producto(3,"Hogar",9,"SET DE ESCOBA",7999.99, 99,"./Image/ImgProductos/9.jpeg"))


// JSON
 // Objeto -> JSON -> Objeto mediante parse
productosJSON = JSON.stringify(Productos);
sessionStorage.setItem('Productos', productosJSON);
productosJSON = JSON.parse(sessionStorage.getItem('Productos'));



