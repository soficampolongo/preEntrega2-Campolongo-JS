const Producto = function(nombre,marca,precio,stock){
    this.nombre=nombre;
    this.marca=marca;
    this.precio=precio;
    this.stock=stock;
    
}


let producto1 = new Producto("delineador", "Maybelline", 3000, 50)
let producto2 = new Producto("delineador", "Rimmel", 3500, 50)
let producto3 = new Producto("mascara de pestañas", "Maybelline", 6000, 50)
let producto4 = new Producto("mascara de pestañas", "Rimmel", 8000, 50)
let producto5 = new Producto("rubor", "Maybelline", 2500, 50)
let producto6 = new Producto("rubor", "Rimmel", 3200, 50)
let producto7 = new Producto("labial", "Maybelline", 4000, 50)
let producto8 = new Producto("labial", "Rimmel", 4500, 50)

let lista = [producto1,producto2, producto3, producto4, producto5, producto6, producto7, producto8]

function filtrarProductos(){
    let palabraClave = prompt("Ingresa el maquillaje que quieres ver").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.nombre.toUpperCase().includes(palabraClave))


    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No se encontró ninguna coincidencia con: " + palabraClave)
    }
}
