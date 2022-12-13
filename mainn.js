/*
// crear usuario

const usuarios = ['alejo', 'agustin', 'moyano'];

let nuevoUsuario = '';

do {
    if ( nuevoUsuario !== '') {
        alert('ese nombre de usuario ya existe. ingrese uno nuevo!')
    }
    nuevoUsuario = prompt('Bienvenido/a a nuestra pagina de bebidas! por favor ingrese su nombre de usuario:').toLowerCase();

} while (usuarios.includes(nuevoUsuario));

usuarios.push(nuevoUsuario);

alert('el nombre nombre: '+nuevoUsuario+' se creo con exito')

// acceso +18
let edad = ''
let mayorEdad = true


 do {
     edad = prompt(nuevoUsuario+' ingrese su edad')
         if (edad >= 18) {
             alert(nuevoUsuario+' puedes ingresar, eres mayor de edad')
             mayorEdad = false
         } else {
             alert('lo siento '+nuevoUsuario+' el sitio no es apto para menores de edad')
         }
     
 } while (mayorEdad);

// compra o venta

let accion = prompt('que desea hacer? comprar o vender')

if (accion === 'comprar') {
    // compra
    let producto = ''
    let precio = 0
    let cantidad = 0
    let precioTotal = 0
    let cantidadTotal = 0
    let seguirComprando = false

    do {
        producto = prompt(nuevoUsuario+' que deseas comprar? skyy, smirnoff, speed, monster')
        cantidad = parseInt(prompt('cuantos necesitas?'))

        switch (producto) {
            case 'skyy':
                precio = 1500
                break;
            case 'smirnoff':
                precio = 1400
                break;
            case 'speed':
                precio = 400
                break;    
            case 'monster':
                precio = 500
                break;

            default:
                alert('lo siento, ese producto no esta disponible')
                precio = 0
                cantidad = 0
                break;
        }

        precioTotal += precio * cantidad

        cantidadTotal += cantidad

        seguirComprando = confirm('quiere seguir comprando?')

    } while (seguirComprando);

    // descuento
    let precioDescuento = 500;
    let totalInteres = 0;

    const restar = (a, b) => a - b;
    const sumar = (a, b) => a + b;
    const calcularInteres = (a, b) => a * b;

    if (precioTotal > 2000) {

        let precioFinal = restar(precioTotal, precioDescuento);
        alert('Has comprado '+cantidadTotal+' productos, y el total de la compra es '+precioTotal+', pero como has comprado demasiado, te hicimos un descuento. y te quedaria en  '+precioFinal);

        // pagar con descuento
        let pagar = parseInt(prompt('en cuantas cuotas deseas pagar: 1, 3, 6'));
        if (pagar == 1) {
            alert('tu compra es de '+precioFinal);
        } else if (pagar == 3) {
            totalInteres = calcularInteres(precioFinal, 0.10)
            precioInteres = sumar(precioFinal, totalInteres)
            alert('Pagando en 3 cuotas, tiene un interes del 10%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);

        } else if (pagar == 6) {
            totalInteres = calcularInteres(precioFinal, 0.20)
            precioInteres = sumar(precioFinal, totalInteres)
            alert('Pagando en 6 cuotas, tiene un interes del 20%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);
        }
        else {
            alert('selecciona una  las opciones anteriores');
            pagar = prompt('en cuantas cuotas deseas pagar');
        }
    } else {
        alert('has comprado: '+cantidadTotal+' productos y el total de la compra es: '+precioTotal)
        
        // pagar sin descuento
        let pagar = parseInt(prompt('en cuantas cuotas deseas pagar: 1, 3, 6'));
        if (pagar == 1) {
            alert('tu compra es de '+precioTotal);
        } else if (pagar == 3) {
            totalInteres = calcularInteres(precioTotal, 0.10)
            precioInteres = sumar(precioTotal, totalInteres)
            alert('Pagando en 3 cuotas, tiene un interes del 10%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);

        } else if (pagar == 6) {
            totalInteres = calcularInteres(precioTotal, 0.20)
            precioInteres = sumar(precioTotal, totalInteres)
            alert('Pagando en 6 cuotas, tiene un interes del 20%, que seria: '+totalInteres+ ', asi que su compra tendria un total de: '+precioInteres);
        }
        else {
            alert('selecciona una  las opciones anteriores');
            pagar = prompt('en cuantas cuotas deseas pagar');
        }
    }
    } else if (accion === 'vender') {
        class producto {
            constructor(nombre, precio) {
                this.nombre = nombre.toUpperCase();
                this.precio = Number(precio);
            }
        
            sumarIva() {
                this.precio = this.precio * 1.21;
            }
        }
        const productos = []
        
        let nombre = prompt('ingresa el producto que desees vender:');
        let precio = prompt('cual es su precio?')
        
        
        const producto1 = new producto(nombre, precio)
        
        productos.push(producto1)
        
        for (const producto of productos) {
            producto.sumarIva();
        } 

        alert('El producto que deseas vender: '+nombre+' despues de sumarle el IVA queda en: '+producto1.precio)
        console.log(productos)

        
    } else {
        alert('ingrese una de las opciones disponibles')
        accion = prompt('que desea hacer? comprar o vender')
        }
*/
        
            
        
