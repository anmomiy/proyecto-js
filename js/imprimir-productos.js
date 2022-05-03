const traerDatos = async () =>{
    const resp = await fetch('/js/data.json')
    const data = await resp.json()
    data.forEach( async (e) =>{
        //console.log(e.category)
        //console.log(e.content)
        prod = e.content;
        //console.log(prod.length)
        console.log(prod[0].name)
    })
}
/*secOfertas = document.getElementById("seccion-ofertas")*/
/*const crearCard = e =>{
    nombreSeccion = document.createElement("h3");
    nombreSeccion.innerHTML = e.category;
    secOfertas.appendChild(nombreSeccion);
    nombreSeccion.className = "prod-ofertas";
    nombreSeccion.idName ="ofertas";
    olSeccion = document.createElement("ol");
    olSeccion.appendChild(nombreSeccion);

}*/

traerDatos();