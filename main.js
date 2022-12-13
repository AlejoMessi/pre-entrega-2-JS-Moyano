// carrito
const carrito = [];

// filtro para ordenar
const ordenarPorMenor = () => {
    bebidas.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};
const ordenarPorMayor = () => {
    bebidas.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

//mostrar la lista al usuario
const mostrarListaOrdenada = () => {
    const listaOrdenada = bebidas.map(bebidas => {
        return '- '+bebidas.nombre+' $'+bebidas.precio
    });
    alert('lista de precios'+'\n'+listaOrdenada.join('\n'));
    comprarBebidas(listaOrdenada);
};

// compra
const comprarBebidas = (listaOrdenada) => {
    let seguirComprando;
    let bebidaNombre = '';
    let bebidaCantidad = 0;    

    do {
        bebidaNombre = prompt('Que bebida deseas comprar'+'\n'+listaOrdenada.join('\n'));
        bebidaCantidad = parseInt(prompt('cuantas queres comprar?'));

        const bebida = bebidas.find(bebida => bebida.nombre.toLowerCase() === bebidaNombre.toLowerCase());

        if (bebida) {
            agregarAlCarrito(bebida, bebida.id, bebidaCantidad);
        } else {
            alert('La bebida que buscas no la tenemos en nuestro catalogo');
        }

        seguirComprando = confirm('Queres agregar otra bebida?')

    } while (seguirComprando);

    confirmarCompra();
};


// Agregar al carrito
const agregarAlCarrito = (bebida, bebidaId, bebidaCantidad) => {
    const bebidaRepetida = carrito.find(bebida => bebida.id === bebidaId);

    if (bebidaRepetida) {
        bebidaRepetida.cantidad += bebidaCantidad
    } else {
        bebida.cantidad += bebidaCantidad
        carrito.push(bebida)
    }
    console.log(carrito)
};
console.log(carrito)
// eliminar del carrito
const eliminarDelCarrito = (bebidaNombre) => {
    carrito.forEach((bebida, indice) => {
        if (bebida.nombre.toLowerCase() === bebidaNombre) {
            if (bebida.cantidad > 1) {
                bebida.cantidad--
            } else {
                carrito.splice(indice, 1)
            }
        }
    })
    confirmarCompra()
};

// confirmar la compra
const confirmarCompra = () => {
    const listaDeBebidas = carrito.map(bebida => {
        return ' -'+bebida.nombre+' - Cantidad: '+bebida.cantidad
    });

    const confirmar = confirm('Tu compra es: '
        +'\n'+listaDeBebidas.join('\n')
        +'\n\nSi desea continuar, precione ACEPTAR, pero si desea eliminar algun producto, precione CANCELAR'
    );

    if (confirmar) {
        finalizarCompra(listaDeBebidas)
    } else {
        const bebidaParaEliminar = prompt('Que producto desea eliminar?');
        eliminarDelCarrito(bebidaParaEliminar);
    }
};

// finalizar la compra
const finalizarCompra = (listaDeBebidas) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0);
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);

    alert('Detalles de tu compra:'
        +'\n'+listaDeBebidas.join('\n')
        +'\n\nTotal de productos: '+cantidadTotal
        +'\nEl total de la compra es: '+precioTotal
        +'\n\nGracias por su compra!'
    );
};
// preguntar si quiere poner el filtro 
const comprar = () => {
    const filtroPrecio = confirm('¿Queres ordenar la lista de productos del más barato al más caro?');
    if (filtroPrecio) {
        ordenarPorMenor()
    } else {
        ordenarPorMayor()
    }
};

comprar()