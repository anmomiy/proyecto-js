//Objetos
    //Productos
    class Producto{ //Objeto para los productos de tienda
        constructor(id,nombre,precio,cant,total){
            this.id = id;
            this.name = nombre;
            this.price = precio;
            this.quantity = cant;
            this.total = total;
        }
    }
const montoPagar = (cant,precio) => cant * precio;
const agregarCarrito = (objeto) =>{
    objeto.quantity != 0 && carrito.push(objeto);
    carrito.length != 0 && guardarLocal("carrito",JSON.stringify(carrito))
};
const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)};
  
//Traer Botones
let addAncho = document.getElementById('addAncho');
let addAngosto = document.getElementById('addAngosto');
let addBisteck = document.getElementById('addBisteck');
let addCarneMolida = document.getElementById('addCarneMolida');
let addEntrana = document.getElementById('addEntrana');
let addGuiso = document.getElementById('addGuiso');
let addLomoFino = document.getElementById('addLomoFino');
let addPicanha = document.getElementById('addPicanha');
let addCostilla = document.getElementById('addCostilla');
let addMolida = document.getElementById('addMolida');
let addPanceta = document.getElementById('addPanceta');
let addSolomillo = document.getElementById('addSolomillo');
let addPechuga = document.getElementById('addPechuga');
let addHamburguesa = document.getElementById('addHamburguesa');

//alertas 
const alertaAgregar = producto =>{
    Swal.fire({
        title: `Agregar al Carrito:`,
        text: `Deseas agregar ${producto.quantity} paquetes de ${producto.name} al carrito?`,
        showDenyButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: `Cancelar`,
        confirmButtonColor: '#000',
        denyButtonColor: '#ff6868',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
              title:`Producto agregado:`, 
              text:`Se agregó ${producto.quantity} paquetes de ${producto.name}`, 
              icon:'success',
              confirmButtonColor: '#000',
            })
          agregarCarrito(producto)
        } else if (result.isDenied) {
          Swal.fire({
              title:'No se ha agregado al carrito', 
              text:'', 
              icon:'error',
              confirmButtonColor: '#000',
            })
        }
      })
}
//array
const carrito = [];
//Evento botones
addAncho.onclick = evento =>{
    evento.preventDefault();
    const bAncho = evento.target.parentNode
    let cantAncho = bAncho.children[0].value
    let montoAPagar = montoPagar(cantAncho,49)
    let bifeAncho = new Producto(1,"Bife Ancho",49,cantAncho,montoAPagar)
    alertaAgregar(bifeAncho);
}
addAngosto.onclick = evento =>{
    evento.preventDefault();
    const bAngosto = evento.target.parentNode
    let cantAngosto = bAngosto.children[0].value
    let montoAPagar = montoPagar(cantAngosto,49)
    let bifeAngosto = new Producto(2,"Bife Angosto",49,cantAngosto,montoAPagar)
    alertaAgregar(bifeAngosto);
}
addBisteck.onclick = evento =>{
    evento.preventDefault();
    const bisteckLomo = evento.target.parentNode
    let cantBisteck = bisteckLomo.children[0].value
    let montoAPagar = montoPagar(cantBisteck,35)
    let bisteck = new Producto(3,"Bisteck Bola de Lomo", 35,cantBisteck,montoAPagar)
    alertaAgregar(bisteck);
}
addCarneMolida.onclick = evento =>{
    evento.preventDefault();
    const carneMol = evento.target.parentNode
    let cantCarneMolida = carneMol.children[0].value
    let montoAPagar = montoPagar(cantCarneMolida,32)
    let carneMolida = new Producto(4,"Carne Molida", 32,cantCarneMolida,montoAPagar)
    alertaAgregar(carneMolida);
}
addEntrana.onclick = evento =>{
    evento.preventDefault();
    const entrana = evento.target.parentNode
    let cantEntrana = entrana.children[0].value
    let montoAPagar = montoPagar(cantEntrana,45)
    let entranaFina = new Producto(5,"Entraña Fina",45,cantEntrana,montoAPagar)
    alertaAgregar(entranaFina);
}
addGuiso.onclick = evento =>{
    evento.preventDefault();
    const guiso = evento.target.parentNode
    let cantGuiso = guiso.children[0].value
    let montoAPagar = montoPagar(cantGuiso,33)
    let guisoEspecial = new Producto(6,"Guiso Especial", 33,cantGuiso,montoAPagar)
    alertaAgregar(guisoEspecial);
}
addLomoFino.onclick = evento =>{
    evento.preventDefault();
    const lomo = evento.target.parentNode
    let cantLomo = lomo.children[0].value
    let montoAPagar = montoPagar(cantLomo,69)
    let lomoFino = new Producto(7,"Lomo Fino", 69,cantLomo,montoAPagar)
    alertaAgregar(lomoFino);
}
addPicanha.onclick = evento =>{
    evento.preventDefault();
    const picana = evento.target.parentNode
    let cantPicanha = picana.children[0].value
    let montoAPagar = montoPagar(cantPicanha,59)
    let picanha = new Producto(8,"Picaña",59,cantPicanha,montoAPagar)
    alertaAgregar(picanha);
}
addCostilla.onclick = evento =>{
    evento.preventDefault();
    const costi = evento.target.parentNode
    let cantCostilla = costi.children[0].value
    let montoAPagar = montoPagar(cantCostilla,33)
    let costilla = new Producto(9,"Costilla", 33,cantCostilla,montoAPagar)
    alertaAgregar(costilla);
}
addMolida.onclick = evento =>{
    evento.preventDefault();
    const molCerdo = evento.target.parentNode
    let cantMolida = molCerdo.children[0].value
    let montoAPagar = montoPagar(cantMolida,19)
    let molida = new Producto(10,"Molida",19,cantMolida,montoAPagar)
    alertaAgregar(molida);
}
addPanceta.onclick = evento =>{
    evento.preventDefault();
    const pancetacpch = evento.target.parentNode
    let cantPanceta = pancetacpch.children[0].value
    let montoAPagar = montoPagar(cantPanceta,27)
    let panceta = new Producto(11,"Panceta c/p y c/h",27,cantPanceta,montoAPagar)
    alertaAgregar(panceta);
}
addSolomillo.onclick = evento =>{
    evento.preventDefault();
    const solomi = evento.target.parentNode
    let cantSolomillo = solomi.children[0].value
    let montoAPagar = montoPagar(cantSolomillo,32)
    let solomillo = new Producto(12,"Solomillo",32,cantSolomillo,montoAPagar)
    alertaAgregar(solomillo);
}
addPechuga.onclick = evento =>{
    evento.preventDefault();
    const pechuga = evento.target.parentNode
    let cantPechuga = pechuga.children[0].value
    let montoAPagar = montoPagar(cantPechuga,18)
    let pechugaPollo = new Producto(13,"Pechuga de pollo",18,cantPechuga,montoAPagar)
    alertaAgregar(pechugaPollo);
}
addHamburguesa.onclick = evento =>{
    evento.preventDefault();
    const hambur = evento.target.parentNode
    let cantHamburguesa = hambur.children[0].value
    let montoAPagar = montoPagar(cantHamburguesa,27.50)
    let hamburguesa = new Producto(14,"Hamburguesa clásica",27.50,cantHamburguesa,montoAPagar)
    alertaAgregar(hamburguesa);
}
console.log(carrito.length)

