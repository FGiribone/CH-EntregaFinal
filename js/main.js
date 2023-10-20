cargarProductosAlFront();
const carrito = [];


function cargarProductosAlFront() {
    fetch('Data/Products.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {

                const articleContainer = document.querySelector('.article-container');
                const article = document.createElement('article');
                article.classList.add('article-card');
                const figure = document.createElement('figure');
                figure.classList.add('article-image');
                const img = document.createElement('img');
                img.src = producto.urlImagen;
                figure.appendChild(img);
                const content = document.createElement('div');
                content.classList.add('article-content');
                const category = document.createElement('h1');
                category.classList.add('card-category');
                category.textContent = producto.nombreCategoria;
                const title = document.createElement('h3');
                title.classList.add('card-title');
                title.textContent = producto.descripcion;
                const price = document.createElement('p');
                price.classList.add('card-price');
                price.textContent = `$${producto.precio.toFixed(2)}`;

                const addToCartButton = document.createElement('button');
                addToCartButton.textContent = 'Agregar al carrito';
                addToCartButton.classList.add('add-product-to-cart');

                addToCartButton.addEventListener('click', () => {
                    reservaStock(producto.descripcion)
                        .then((reservaExitosa) => {
                            if (reservaExitosa) {
                                console.log("producto agregado, código del producto: " + producto.codigo);
                                guardarProductoLocalStorage(producto);
                                carrito.push(producto);
                                actualizarCarrito();
                            }
                            else {
                                console.log('Reserva cancelada');
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                });

                content.appendChild(category);
                content.appendChild(title);
                content.appendChild(price);
                content.appendChild(addToCartButton);
                article.appendChild(figure);
                article.appendChild(content);
                articleContainer.appendChild(article);

                const productosJSON = JSON.stringify(data);
                sessionStorage.setItem('Productos', productosJSON);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

function guardarProductoLocalStorage(producto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log("verifico localStorage si el producto llego al localstorage: ");
    console.log(producto);
}

function obtenerProductosDesdeStorage() {
    const productosJSON = sessionStorage.getItem('Productos');
    if (productosJSON) {
        return JSON.parse(productosJSON);
    } else {
        return [];
    }
}

function reservaStock(nombreProducto) {
    return new Promise((resolve, reject) => {
        Swal.fire({
            title: `¿Está seguro que desea agregar ${nombreProducto}?`,
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
        }).then((result) => {
            clearTimeout(cancelTimer);

            if (result.isConfirmed) {
                console.log(`Reserva de ${nombreProducto} confirmada.`);
                resolve(true);
            } else {
                console.log(`Reserva de ${nombreProducto} cancelada.`);
                resolve(false);
            }
        });

        // temporizador 
        const cancelTimer = setTimeout(() => {
            Swal.close();
            console.log(`Tiempo de espera de 10 segundos agotado. Reserva de ${nombreProducto} cancelada.`);
            reject('Tiempo de espera agotado');
        }, 10000);
    });
}


function actualizarCarrito() {
    const carritoTable = document.getElementById('carrito');
    const tbody = carritoTable.querySelector('tbody');
    const totalCell = document.getElementById('total');
    tbody.innerHTML = '';

    let total = 0;
    carrito.forEach(producto => {
        const row = document.createElement('tr');
        const productNameCell = document.createElement('td');
        productNameCell.textContent = producto.descripcion;
        const priceCell = document.createElement('td');
        priceCell.textContent = `$${producto.precio.toFixed(2)}`;
        total += producto.precio;

        row.appendChild(productNameCell);
        row.appendChild(priceCell);
        tbody.appendChild(row);
    });
    totalCell.textContent = `$${total.toFixed(2)}`;
}

