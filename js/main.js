const productos = [
    {
        id: "airPods 3",
        titulo: "airPods 3",
        imagen: "./img/airPods/airPods3.png",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 240
    },
    {
        id: "airPods Pro",
        titulo: "airPods Pro",
        imagen: "./img/airPods/airPodsPro.png",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 220
    },
    {
        id: "airPods Pro 2",
        titulo: "airPods Pro 2",
        imagen: "./img/airPods/airPodsPro2.png",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 270
    },
    {
        id: "iPhone 11",
        titulo: "iPhone 11",
        imagen: "./img/IP/11.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 520
    },
    {
        id: "iPhone 12",
        titulo: "iPhone 12",
        imagen: "./img/IP/12.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 660
    },
    {
        id: "iPhone 12 Mini",
        titulo: "iPhone 12 Mini",
        imagen: "./img/IP/12mini.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 630
    },
    {
        id: "iPhone 13",
        titulo: "iPhone 13",
        imagen: "./img/IP/13.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 790
    },
    {
        id: "iPhone 13 Pro",
        titulo: "iPhone 13 Pro",
        imagen: "./img/IP/13Pro.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 1080
    },
    {
        id: "iPhone 14 Plus",
        titulo: "iPhone 14 Plus",
        imagen: "./img/IP/14Plus.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 1250
    },
    {
        id: "iPhone 14 Pro Max",
        titulo: "iPhone 14 Pro Max",
        imagen: "./img/IP/14ProMax.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 1380
    },
    {
        id: "iPhone SE",
        titulo: "iPhone SE",
        imagen: "./img/IP/se.png",
        categoria: {
            nombre: "iPhones",
            id: "iPhones"
        },
        precio: 440
    },
    {
        id: "iPad 9na",
        titulo: "iPad 9na",
        imagen: "./img/iPads/iPad9na.png",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 650
    },
    {
        id: "iPad Mini 6",
        titulo: "iPad Mini 6",
        imagen: "./img/iPads/iPadMini6.png",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 585
    },
    {
        id: "iPad Pro",
        titulo: "iPad Pro",
        imagen: "./img/iPads/iPadPro.png",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 1190
    },
    {
        id: "MacBook Air M1",
        titulo: "MacBook Air M1",
        imagen: "./img/macs/airM1.png",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1070
    },
    {
        id: "MacBook Air M2",
        titulo: "MacBook Air M2",
        imagen: "./img/macs/airM2.png",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1380
    },
    {
        id: "MacBook Pro 12inch",
        titulo: "MacBook Pro 12inch",
        imagen: "./img/macs/macPro12pul.png",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 2250
    },
    {
        id: "MacBook Pro 14inch",
        titulo: "MacBook Pro 14inch",
        imagen: "./img/macs/macPro14pul.png",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 2700
    }
]

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".botonAgregar");
const numerito = document.querySelector("#numerito");


// CARGO LOS PRODUCTOS MEDIANTE EL DOM A TRAVES DE UNA FUNCION:
// 1) CREO LA FUNCION QUE VA A TENER PARAMETRO!
// 2) A LA CONSTANTE QUE REPRESENTA EL CONTENEDOR DE LOS PRODUCTOS EN EL HTML LA CARGO CON UN ESPACIO EN BLANCO PARA EVITAR SOBRE CARGA DE PRODCUTOS MAS ADELANTE
// 3) HAGO UN FOREACH DE LOS PRODUCTOS QUE VOY A ELEGIR, Y POR CADA UNO DE ELLOS CREO UN DIV, CON UNA CLASE, E INSERTO EL HTML AGREGANDO LAS PROPIEDADES DE CADA UNO MEDIANTE EL "$[]".
// 4) HAGO EL APPEND PARA UBICAR ESE DIV EN EL CONTENEDOR DE PRODUCTOS
// 5) INSERTO LA FUNCION QUE ACTUALIZA LOS BOTONES (QUE CREARE DESPUES)

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="imagenProducto" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="detalleProducto">
                <h4 class="tituloProducto">${producto.titulo}</h4>
                <p class="precioProducto">$${producto.precio}</p>
                <button class="botonAgregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();

}

// INVOCO ESA FUNCION DE CARGA DE PRODUCTOS
// HAGO UN FOREACH DE CADA BOTON DE LAS CATEGORIAS DE PRODUCTOS EN EL CUAL CADA UNO TENGA UN EVENTO ASOCIADO DE CLICK QUE AL REALIZARLO, REMUEVA LA CLASE ACTIVE DE TODOS , Y SE LA AGREGUE AL BOTON EN CUESTION.


cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
})


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".botonAgregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productosEnCarrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if (productosEnCarrito.some(producto => producto.id === idBoton )) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito()
    
    localStorage.setItem("productosEnCarrito",  JSON.stringify(productosEnCarrito));
    console.log(productosEnCarrito)
}   

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}

