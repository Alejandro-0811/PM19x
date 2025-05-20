const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

// buscar a luis
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis);

//imprimmir solo el nombre y edad de cada persona
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

//.reduce
const totalEdad = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);
console.log(`La suma total de las edades es: ${totalEdad}`);