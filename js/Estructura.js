
class Estructura{
    constructor (nombre,arrayList){
        this.nombre = nombre;
        this.arrayList = arrayList;
    }

    solicitarCarga(){
        let condicion = true;        
        while(condicion){
            // Variables internas de control 
            let codigos = [];       // lista de códigos
            let nombre;             // nombre del archivo
            let carga = 1;          // variable de control de carga

            codigos.splice() // vacio la lista
                
            // solicito Nombre del archivo

            nombre = prompt("ingrese el nombre del archivo: ");
            alert("nombre ingresado: " + nombre + ".xlsx")
    
            // solicito Codigos 
            while (carga != 0) {
                carga = prompt("ingrese los codigos:  *** finalice la carga ingresando 0 ***");
                console.log("usted ingresó:" + carga);
                codigos.push(carga);
                if(carga == 0){ // elimino el 0 de mi lista
                    codigos.pop(0)
                }
            }

            // envio los parametros al constructor 
            const estructura = new Estructura(nombre,codigos);
            
            // consulto si desea continuar
            estructura.mostrarEstructura(codigos);
            estructura.crearArchivoXLSX(nombre,codigos);
            condicion = this.finalizarPrograma();
        }
    }

    mostrarEstructura(arrayList){
        let mensaje = "Lista de códigos: \n"
            for (let i = 0; i < arrayList.length; i++) {
                mensaje += arrayList[i] + "\n"
            }
            alert(mensaje)
    }

    crearArchivoXLSX(nombreArchivo, codigos) {
    // Crear un objeto de libro de trabajo de Excel
    var workbook = XLSX.utils.book_new();
    
    // Crear una hoja de trabajo
    var hojaDeTrabajo = XLSX.utils.json_to_sheet(codigos);
    
    // Agregar la hoja de trabajo al libro de trabajo
    XLSX.utils.book_append_sheet(workbook, hojaDeTrabajo, "MiHojaDeTrabajo");
    
    // Convertir el libro de trabajo a una matriz de bytes
    var libroDeTrabajoComoArrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
    // Crear un objeto Blob a partir del array de bytes
    var blob = new Blob([libroDeTrabajoComoArrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Guardar el archivo con FileSaver.js
    saveAs(blob, nombreArchivo + ".xlsx");
    }

    finalizarPrograma(){
        let condicion = true;
        let opcion = prompt("desea salir? \n 1 -> continuar \n 0 -> Salir ");
            if(opcion == 0){
                condicion = false;
            }
        return condicion;
    }
}