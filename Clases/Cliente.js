const clientes = [];
class Cliente {
    constructor(cuenta, nombre, apellido, email, areaTelefono, telefono, password) {
        this.cuenta = this.altaNroCuenta();
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.areaTelefono = areaTelefono;
        this.telefono = telefono;
        this.password = password;
    }

    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEmail() {
        return this.email;
    }
    getTelefono() {
        return `Teléfono: (${this.areaTelefono}) ${this.telefono}`;
    }

    mostrarClientes() {
        console.log("Lista de clientes:")
        for (const cliente of clientes) {
            console.log("Nombre: " + cliente.getNombre());
            console.log("Apellido: " + cliente.getApellido());
            console.log("Email: " + cliente.getEmail());
            console.log("Teléfono: " + cliente.getTelefono());
            console.log("Cuenta: " + cliente.cuenta); // Mostrar el número de cuenta
            console.log("-----------------------------------");
        }
    }
    // usando toString
    toString() {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Email: ${this.email}, Teléfono: (${this.areaTelefono}) ${this.telefono}`;
    }
    // usando sweetAlert
    mostrarDatosAlCliente() {
        Swal.fire("Tus datos fueron guardados", 
        `Nombre: ${this.nombre} Apellido: ${this.apellido} Email: ${this.email} Teléfono: ${this.areaTelefono} - ${this.telefono}`, "success");
    }

    altaNroCuenta() {
        const min = 100000;
        const max = 999999;
        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (clientes.some(function (cliente) {
                // verifico que no exista el numero de cuenta 
                return cliente.cuenta === numeroAleatorio;
            }));
        return numeroAleatorio;
    }

    grabarClientesEnStorage(cliente) {
        const clientesGuardados = JSON.parse(localStorage.getItem('clientes')) || [];
        clientesGuardados.push(cliente);
        const clientesJSON = JSON.stringify(clientesGuardados);
        localStorage.setItem('clientes', clientesJSON);
    }

}