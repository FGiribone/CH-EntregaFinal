const formulario = document.querySelector("#form");
const botonValidar = document.querySelector("#botonValidar");
botonValidar.addEventListener("click", validarFormulario);
password1.addEventListener("input", validarContraseñas);
password2.addEventListener("input", validarContraseñas);

function validarFormulario() {
    event.preventDefault();

    // variable de control de flujo
    okFormulario = true;

    okFormulario = validarCamposVacios();

    if (okFormulario) {
        okFormulario = validarCorreoElectronico();
    }

    if (okFormulario) {
        okFormulario = validarAreaYTelefono();
    }

    if (okFormulario) {
        okFormulario = validarContraseñas();
    }

    if (okFormulario) {
        console.log("form ok -> " + okFormulario)
        nuevoCliente();
    }
}

function validarCamposVacios() {
    validacionVacios = true;
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const email = document.querySelector("#email");
    const areaTelefono = document.querySelector("#areaTelefono");
    const telefono = document.querySelector("#telefono");
    const password1 = document.querySelector("#password1");
    const password2 = document.querySelector("#password2");

    const campos = [nombre, apellido, email, areaTelefono, telefono, password1, password2];
    const camposError = [
        document.querySelector("#campoErrorNombre"),
        document.querySelector("#campoErrorApellido"),
        document.querySelector("#campoErrorEmail"),
        document.querySelector("#campoErrorAreaTelefono"),
        document.querySelector("#campoErrorTelefono"),
        document.querySelector("#campoErrorPassword1"),
        document.querySelector("#campoErrorPassword2"),
    ];

    for (let i = 0; i < campos.length; i++) {
        camposError[i].textContent = "";
        if (campos[i].value.length === 0) {
            camposError[i].textContent = "Campo vacío";
            validacionVacios = false;
        }
    }
    return validacionVacios;
}

function validarCorreoElectronico() {
    validacionEmail = true;
    const emailInput = document.querySelector("#email");
    const campoErrorEmail = document.querySelector("#campoErrorEmail");
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    campoErrorEmail.textContent = "";

    if (emailRegex.test(emailInput.value)) {
        campoErrorEmail.textContent = "";
        return true;
    } else {
        campoErrorEmail.textContent = "Email incorrecto, formato deseado nombredeusuario@dominio.com"; // Muestra un mensaje de error
        validacionEmail = false;
        return false;
    }
}

function validarAreaYTelefono() {
    validacionTelefono = true;
    const areaInput = document.querySelector("#areaTelefono");
    const telefonoInput = document.querySelector("#telefono");
    const campoAreaTelefono = document.querySelector("#campoErrorAreaTelefono");
    const campoTelefono = document.querySelector("#campoErrorTelefono");

    campoAreaTelefono.textContent = "";
    campoTelefono.textContent = "";

    // Valido campo "areaTelefono" según longitud -> https://www.argentina.gob.ar/pais/codigo-telefonia

    if (areaInput.value.length < 2 || areaInput.value.length > 4) {
        campoAreaTelefono.textContent = "El área debe tener al menos 2 dígitos";
        validacionTelefono = false;
    }
    if (telefonoInput.value.length < 8) {
        campoTelefono.textContent = "El telefono debe tener como minimo 8 digitos ";
        validacionTelefono = false;
    }
    return validacionTelefono;
}

function validarContraseñas() {
    validacionPwsd = false;
    const password1 = document.querySelector("#password1");
    const password2 = document.querySelector("#password2");
    const conditions = {
        letter: /[a-z]/,
        capital: /[A-Z]/,
        number: /\d/,
        length: /^(?!.*\s).{8,}$/,
    };
    const passwordValue = password1.value;
    const confirmPasswordValue = password2.value;
    let isInvalid = false;

    for (const condition in conditions) {
        const element = document.querySelector(`#${condition}`);
        if (condition === "blank") {
            if (passwordValue.includes(" ")) {
                element.classList.remove("valid");
                element.classList.add("invalid");
                isInvalid = true;
            } else {
                element.classList.remove("invalid");
                element.classList.add("valid");
            }
        } else {
            if (conditions[condition].test(passwordValue)) {
                element.classList.remove("invalid");
                element.classList.add("valid");
            } else {
                element.classList.remove("valid");
                element.classList.add("invalid");
                isInvalid = true;
            }
        }
    }

    const matchElement = document.querySelector("#match");
    if (passwordValue === confirmPasswordValue && passwordValue !== "") {
        matchElement.classList.remove("invalid");
        matchElement.classList.add("valid");
    } else {
        matchElement.classList.remove("valid");
        matchElement.classList.add("invalid");
        isInvalid = true;
    }

    const blankElement = document.querySelector("#blank");
    if (isInvalid) {
        blankElement.classList.remove("valid");
        blankElement.classList.add("invalid");
    } else {
        blankElement.classList.remove("invalid");
        blankElement.classList.add("valid");
    }
    return !isInvalid;
}

function nuevoCliente() {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const areaTelefono = document.querySelector("#areaTelefono").value;
    const telefono = document.querySelector("#telefono").value;
    const password = document.querySelector("#password1").value;

    const nuevoCliente = new Cliente(null, nombre, apellido, email, areaTelefono, telefono, password);
    nuevoCliente.grabarClientesEnStorage(nuevoCliente);
    console.log(nuevoCliente.toString());
    nuevoCliente.mostrarDatosAlCliente();
}