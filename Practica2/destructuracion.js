const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        ciudad: 'QRO',
        pais: 'MEX'
    }
};

//destructuracion

const { nombre, edad, direccion: { ciudad, pais } } = persona;

//mensaje
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años. Vivo en ${ciudad}, ${pais}.`);

