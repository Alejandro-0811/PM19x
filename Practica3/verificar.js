function verificarUsuario(usuario) 
{
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

// Ejemplo de uso
verificarUsuario("Alejandro")
    .then(mensaje => {
        console.log(mensaje); 
    })
    .catch(error => {
        console.log(error);
    });