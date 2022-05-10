//Darle la misma estructura que tenía antes mi página de productos
/*
<div class="prodSeccion shadow-drop-2-center">
    <h3 id="ofertas" class="prod-ofertas">Ofertas del Mes</h3>
    <ol class="d-flex flex-wrap">
    <li class="card" style="width: 18rem;">
        <img class="card-img-top" src="..//assets/imagenes/bife-ancho-min.jpg" alt="Card image cap">
        <div class="card-body cuerpoCarta">
            <h4>Bife Ancho</h4>  
            <p class="card-text">S/49.00. Paquetes de aprox 1kg. Oferta válida hasta agotar stock.</p>
            <div>
                <select name="">
                    <option value="0" selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button id="addAncho">Agregar al Carrito</button>
            </div>
        </div>
    </li>
</div>
*/
let url = 'https://quinpro.free.beeceptor.com/productos' 
const traerDatos = async () =>{
    const resp = await fetch(url)
    const data = await resp.json()
    data.forEach( e =>{
        crearSeccion(e)

    })
}
let prodContenido = document.getElementById("prodContenido")
const crearSeccion = e =>{
    //div 1
    let seccion = document.createElement("div");
    seccion.className="prodSeccion shadow-drop-2-center";
    prodContenido.appendChild(seccion);
    //h3
    let nombreSeccion = document.createElement("h3");
    nombreSeccion.innerHTML = e.category;
    seccion.appendChild(nombreSeccion);
    nombreSeccion.className = e.class;
    nombreSeccion.id =e.id;
    //ol
    let olSeccion = document.createElement("ol");
    olSeccion.className="d-flex flex-wrap";
    seccion.appendChild(olSeccion);
    //contenido dentro del ol
    let prod = e.content;
        prod.forEach(element =>{
            crearCard(element,olSeccion);
        })
}
const crearCard = (element,lugar) =>{
    //li "card"
    let liCard = document.createElement("li");
    liCard.className="card";
    liCard.style="width: 18rem;";
    lugar.appendChild(liCard);
    //imagen del producto
    let imagen = document.createElement("img");
    imagen.className="card-img-top";
    imagen.src=element.image;
    liCard.appendChild(imagen);
    //div "cuerpo del card"
    let cuerpoCard = document.createElement("div");
    cuerpoCard.className="card-body cuerpoCarta";
    liCard.appendChild(cuerpoCard);
    //h4 nombre del producto
    let nombreProd = document.createElement("h4");
    nombreProd.innerHTML=element.name;
    cuerpoCard.appendChild(nombreProd);
    //p descripcion del producto
    let textoProd = document.createElement("p");
    textoProd.className = "card-text";
    textoProd.innerHTML = `S/${element.price} por paquete. ${element.description}`
    cuerpoCard.appendChild(textoProd);
    //div contenedor de cantidad y boton
    let cantDiv = document.createElement("div");
    cuerpoCard.appendChild(cantDiv);
    //select para la cantidad de productos. Máximo elegible = stock
    crearSelect(cantDiv, element.stock);
    //botón agregar carrito
    let botonProd = document.createElement("button");
    botonProd.id = element.button;
    botonProd.innerHTML = "Agregar al Carrito"
    cantDiv.appendChild(botonProd);
}
const crearSelect = (lugar, stock) =>{
    let selectList = document.createElement("select");
    lugar.appendChild(selectList);


    for (let i = 0; i < stock; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectList.appendChild(option);
    }
}

traerDatos();