class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio); 
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(nombre) {
        const indice = this.productos.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
        if (indice !== -1) {
            this.productos.splice(indice, 1);
            console.log(`Producto "${nombre}" eliminado.`);
        } else {
            console.log(`Producto "${nombre}" no encontrado.`);
        }
    }
    generarTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio;
        }
        return total;
    }

    mostrarListado() {
        for (let i = 0; i < this.productos.length; i++) {
            const producto = this.productos[i];
            console.log(`- ${producto.nombre} - $${producto.precio}`);
        }
    }
}






const carrito = new Carrito();

let promptmenu = parseInt(prompt("1 para agregar productos\n2 para mostrar productos\n3 para eliminar el prodcuto\n4 para salir"))
while (promptmenu !==4) {
    switch (promptmenu) {
        case 1:
            let promptNombre = prompt("Escriba el nombre del producto:");
            let promptPrecio = prompt("Escriba el precio del producto:");
        

            if (promptNombre === "" || promptPrecio === "") {
                alert("Por favor, complete ambos campos (nombre y precio) antes de agregar el producto.");
            } else {
                let nuevoProducto = new Producto(promptNombre, promptPrecio);
                carrito.agregarProducto(nuevoProducto);
            }
            break;
            case 2:
                carrito.mostrarListado();
                console.log("Total: $" + carrito.generarTotal());
                break
            
            case 3: 
            let eliminarproductos = prompt("escriba el nombre del producto a eliminar")
            carrito.eliminarProducto(eliminarproductos);
                break

        default:
            alert("error, escriba un numero valido")
            break;
    }
    promptmenu = parseInt(prompt("1 para agregar productos\n2 para mostrar productos\n3 para eliminar el prodcuto\n4 para salir"))
}

alert("adios")