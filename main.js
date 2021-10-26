/*//CLASE V - CONTRUCCION DE OBJETOS
//objetivos literales
const servicio1 = {
     detalleA:"Interior",
     detalleB:"Exterior",
     detalleC:"Encerado",
        Modelo:"Vehiculo Pequeño",
        precio: 15000
}

console.log(servicio1);

const servicio2 = {
     detalleA:"Interior",
     detalleB:"Exterior",
     detalleC:"Encerado",
        Modelo:"Vehiculo Mediano",
        precio: 25000
}

console.log(servicio2);

const servicio3 = {
     detalleA:"Interior",
     detalleB:"Exterior",
     detalleC:"Encerado",
        Modelo:"Vehiculo Grande",
        precio: 35000*/
// }

// console.log(servicio3);

// //Funcion constructora
// function servicio(modelo, servicioA, servicioB, servicioC, precio){
//         this.modelo = modelo;
//         this.servicioA = servicioA;
//         this.servicioB = servicioB;
//         this.servicioC = servicioC;
//         this.precio = precio;
// }

// let servicio1 = new servicio("vehiculo grande", "Interior", "Exterior", "Encerado", 35000);
// console.log(servicio);
// let miModelo = prompt("Ingresa el Modelo a lavar (Pequeño-Mediano-Grande)");
// let miServicioA = prompt("Ingresa si desea Limpieza Interior (si / No)");
// let miServicioB = prompt("Ingresa si desea Limpieza Exterior (si / no)");
// let miServicioC = prompt("Ingresa si deseas encerado (si / no)");

// let miServicio = new servicio(miModelo, miServicioA, miServicioB, miServicioC);
// console.log(miServicio);

// //Función constructora con objetos literales como parametros y metodos
// function servicio(objLiteral){
//        this.lavadoInterior = objLiteral.lavadoInterior;
//        this.lavadoExterior = objLiteral.lavadoExterior;
//        this.mostrarServicio = function(){
//             console.log("Este lavado es " + this.lavadoInterior);
//        }
// }

// let miServicio = new servicio({lavadoInterior:"completo", lavadoExterior:"completo"});
// console.log(miServicio);
// //Usando el metodo aprendido 
// miServicio.mostrarServicio();

//OBJETOS -- Acontinuación se detalla información: 
//**CATEGORIAS**, son los Tipos de vehiculos a lavar:
// CategoriaA (Pequeños): Sedan - Coupe - Citicar
// CategoriaB (Medianos): Station Wagon - Camioneta 1 cabina - Todo terreno
// CategoriaC (Grandes): Camionetas xl - Van - Suv. todo terreno - Familiares 

//**SERVICIOS**, son los tipos de lavados:
//ServicioA: (Interior)
//ServicioB: (Exterior)
//ServicioC: (Encerado)
//ServicioD: (Completo)

//**PRECIOS**, precios por categoria y servicio: 

//CategoriaA + ServicioD: $15.000 = precioA
//CategoriaB + ServicioD: $25.000 = precioB
//CategoriaC + ServicioD: $35.000 = precioC


class Categorias{
     lavados(categoriaA, categoriaB, categoriaC, servicioA, servicioB, servicioC, servicioD, precioA, precioB, precioC){
        this.categoriaA = categoriaA;
        this.categoriaB = categoriaB;
        this.categoriaC = categoriaC;
        this.servicioA = servicioA;
        this.servicioB = servicioB;
        this.servicioC = servicioC;
        this.servicioD = servicioD;
        this.precioA = precioA;
        this.precioB = precioB;
        this.precioC = precioC;
     }

     modificarPrecio(){
         let nuevoPrecio = parseFloat(prompt("Ingresa el precio Actualizado"));
         this.precioA = nuevoPrecio;
     }
     mostrarLava(){
         console.log(" El servicio es " + this.categoriaA + " Tipo de lavado " + this.servicioD + " El precio es " + this.precioA);        
     }
}
     const lava = new Categorias("Pequeño", "Completo", 15000);
     console.log(lava);
     lava.modificarPrecio();
     lava.mostrarLava();
