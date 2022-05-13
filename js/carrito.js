let mainCarrito = document.getElementById("mainCarrito");
texto = document.createElement("p");
texto.classList.add("textoAlerta")
texto.innerHTML = "No has seleccionado productos :(";
//Traer el objeto del Storage
const productosSeleccionados = JSON.parse(localStorage.getItem("carrito")) || (mainCarrito.appendChild(texto));
let producto;
let boton;
//Ubicacion en el html
let prodCarrito = document.getElementById("prodCarrito")
let precCarrito = document.getElementById("precCarrito")
let cantCarrito = document.getElementById("cantCarrito")
let montoCarrito = document.getElementById("montoCarrito")
let montoTotal = document.getElementById("montoTotal")
let posicionBoton = document.getElementById("posBoton")
//Funcion imprimir los productos 
let agregarProducto = (valor,lugar) =>{
    producto = document.createElement("p");
    producto.innerHTML = valor
    lugar.appendChild(producto)
}

let agregarBoton = (valor,lugar) =>{
    boton = document.createElement("button");
    boton.innerHTML = "Eliminar";
    lugar.appendChild(boton)
    boton.value = valor;
    boton.onclick = () => {
        Swal.fire({
            title: `Deseas quitar el producto del carrito?`,
            showDenyButton: true,
            confirmButtonText: 'Quitar',
            denyButtonText: 'Cancelar',
            confirmButtonColor: '#000',
            denyButtonColor: '#ff6868',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                mapa = productosSeleccionados.map( e => e.name)
                let posicion = mapa.indexOf(valor)
                productosSeleccionados.splice(posicion,1)
                localStorage.setItem("carrito",JSON.stringify(productosSeleccionados))
                window.location.reload()
            } else if (result.isDenied) {
              Swal.fire({
                  title:'No se retiró del carrito', 
                  text:'', 
                  icon:'error',
                  confirmButtonColor: '#000',
                })
            }
          })
        
    }
}

//Imprimir todos los productos del carrito
if(productosSeleccionados.length > 0){
    
    productosSeleccionados.forEach(e => {
        const {name,price,quantity,total} = e
        agregarProducto(name,prodCarrito);
        agregarProducto(price.toFixed(2),precCarrito);
        agregarProducto(quantity,cantCarrito);
        agregarProducto(total.toFixed(2),montoCarrito);
        agregarBoton(name,posicionBoton);
    });
    const totalCompra = productosSeleccionados.reduce((acc,el)=>acc+el.total,0);
    monto = document.createElement("p");
    monto.innerHTML = totalCompra.toFixed(2);
    montoTotal.appendChild(monto)
    localStorage.setItem("monto",totalCompra)
    irPagar = document.createElement("button");
    irPagar.innerHTML = "Comprar";
    irPagar.className = "botonPagar";
    montoTotal.appendChild(irPagar)
    irPagar.onclick =()=>{
        window.location ="../paginas/resumen-compra.html"
    } 
}

