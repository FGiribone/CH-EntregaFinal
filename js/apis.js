// Llamado a la api DOLARAPI
fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => actualizarCuadro('blue', data))
    .catch(error => console.error('Error: ', error));

fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => actualizarCuadro('oficial', data))
    .catch(error => console.error('Error: ', error));

fetch("https://dolarapi.com/v1/dolares/bolsa")
    .then(response => response.json())
    .then(data => actualizarCuadro('bolsa', data))
    .catch(error => console.error('Error: ', error));

fetch("https://dolarapi.com/v1/dolares/contadoconliqui")
    .then(response => response.json())
    .then(data => actualizarCuadro('contadoconliqui', data))
    .catch(error => console.error('Error: ', error));

fetch("https://dolarapi.com/v1/dolares/solidario")
    .then(response => response.json())
    .then(data => actualizarCuadro('solidario', data))
    .catch(error => console.error('Error: ', error));

fetch("https://dolarapi.com/v1/dolares/mayorista")
    .then(response => response.json())
    .then(data => actualizarCuadro('mayorista', data))
    .catch(error => console.error('Error: ', error));



    function actualizarCuadro(id, data) {
        const cuadro = document.getElementById(id);
        cuadro.style.display = 'block';
        
        const mensajeElement = cuadro.querySelector(`#${id}-mensaje`);
        cuadro.querySelector(`#${id}-compra`).textContent = `Compra: ${data.compra}`;
        cuadro.querySelector(`#${id}-venta`).textContent = `Venta: ${data.venta}`;
        cuadro.querySelector(`#${id}-fecha`).textContent = `Fecha de Actualización: ${formatearFecha(data.fechaActualizacion)}`;
        mensajeElement.textContent = " ";
        mensajeElement.style.fontWeight = "normal";
    }
    
    function formatearFecha(fecha) {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(fecha).toLocaleDateString('es-AR', options);
    }