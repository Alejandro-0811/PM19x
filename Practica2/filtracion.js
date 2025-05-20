const productos = [
  { nombre: "laptop", precio: 12000 },
  { nombre: "mouse", precio: 250 },
  { nombre: "teclado", precio: 750 },
  { nombre: "monitor", precio: 3000 }
];

// Filtramos los productos que tienen un precio mayor a 1000
const nombres = productos
  .filter(producto => producto.precio > 1000)
  .map(producto => producto.nombre);

  console.log(nombres);
