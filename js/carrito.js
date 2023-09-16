const productosEnCarritoLSS = JSON.parse(localStorage.getItem("productosEnCarrito"));

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");
const carritoAccionesVaciar = document.querySelector("#carritoAccionesVaciar");
const carritoAccionesComprar = document.querySelector("#carritoAccionesComprar");
let total = document.querySelector("#total");

// console.log(productosEnCarritoLS)

function cargarProductosAlCarrito() {

    
    if (productosEnCarritoLSS && productosEnCarritoLSS.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        
        contenedorCarritoProductos.innerHTML = "";
        
        productosEnCarritoLSS.forEach(producto => {
            const div = document.createElement("div");
        div.classList.add("carritoProducto");
        div.innerHTML = `
        <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carritoProductoTitulo">
        <small>Titulo</small>
        <h3>${producto.titulo}</h3>
        </div>
        <div class="carritoProductoCantidad">
        <small>Cantidad</small>
        <p>${producto.cantidad}</p>
        </div>
        <div class="carritoProductoPrecio">
        <small>Precio</small>
        <p>${producto.precio}</p>
        </div>
        <div class="carritoProductoSubtotal">
        <small>Subtotal</small>
        <p>${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carritoProductoEliminar" id="${producto.id}"> <i class="bi bi-trash3"></i></button>
        `;

        contenedorCarritoProductos.append(div);
    })
} else {
    
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
    
}
    
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosAlCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProducto);
    });
}

function eliminarProducto(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarritoLSS.findIndex(producto => producto.id === idBoton);
     
    productosEnCarritoLSS.splice(index, 1);
    cargarProductosAlCarrito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarritoLSS));
}

carritoAccionesVaciar.addEventListener("click", vaciarElCarrito);

function vaciarElCarrito() {
    productosEnCarritoLSS.length = 0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarritoLSS));
    cargarProductosAlCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarritoLSS.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0); 
    total.innerText = `$ ${totalCalculado}`;
}

carritoAccionesComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    productosEnCarritoLSS.length = 0;

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarritoLSS));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}

