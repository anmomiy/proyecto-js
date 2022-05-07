//Traer el objeto del Storage
const productosSeleccionados = JSON.parse(localStorage.getItem("carrito"))
const montoTotal = JSON.parse(localStorage.getItem("monto"))
const crearNumero = () =>{

    let num = Math.floor(Math.random()*9000000+1000000);
    localStorage.setItem("numeroCompra",num)
}
const imprimirProductos = () =>{
    let resumenCompra = document.getElementById("resumen-compra");
    let numeroOrden = document.createElement("h2");
    if (localStorage.getItem("numeroCompra")) {
        numero = localStorage.getItem("numeroCompra")
    } else {
        crearNumero();
        numero = localStorage.getItem("numeroCompra")
    }
    numeroOrden.innerHTML = "Orden de compra: #" + numero;
    resumenCompra.appendChild(numeroOrden)
    let filaProd = document.createElement("section");
    resumenCompra.appendChild(filaProd);
    let nombre = document.createElement("h3");
    nombre.innerHTML=`Producto`;
    filaProd.appendChild(nombre);
    let cantidad = document.createElement("h3");
    cantidad.innerHTML=`Cantidad`;
    filaProd.appendChild(cantidad);
    let total = document.createElement("h3");
    total.innerHTML=`Total`;
    filaProd.appendChild(total);
    productosSeleccionados.forEach(e => {
        let filaProd = document.createElement("section");
        resumenCompra.appendChild(filaProd);
        let nombreProducto = document.createElement("p");
        nombreProducto.innerHTML=e.name;
        filaProd.appendChild(nombreProducto);
        let cantidadProducto = document.createElement("p");
        cantidadProducto.innerHTML=e.quantity;
        filaProd.appendChild(cantidadProducto);
        let totalProducto = document.createElement("p");
        totalProducto.innerHTML=`S/${e.total.toFixed(2)}`;
        filaProd.appendChild(totalProducto);
    });

    let monto = document.createElement("p");
    monto.className="montoResumen"
    monto.innerHTML = `Monto total: S/${montoTotal.toFixed(2)}`;
    resumenCompra.appendChild(monto);
}
imprimirProductos();
