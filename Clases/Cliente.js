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
    toString() {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Email: ${this.email}, Teléfono: (${this.areaTelefono}) ${this.telefono}, Contraseña: ${this.password}`;
    }
    altaNroCuenta() {
        const min = 100000;
        const max = 999999;
        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (clientes.some(function(cliente) {
            // verifico que no exista el numero de cuenta 
            return cliente.cuenta === numeroAleatorio;
        }));
        return numeroAleatorio;
    }

    grabarClientes(cliente) {
        clientes.push(cliente)
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
}