function filtrarPorMarcaYModelo(){
    let inputMarca = document.getElementById("marcaCoche");
    let inputModelo = document.getElementById("modelo");
    let marcaCoche = inputMarca.value;
    let modelo = inputModelo.value;
    let cochesfiltrados = realizarBusquedaMarcayModelo(marcaCoche,modelo);
    mostrarPeliculasHTML(cochesfiltrados);
}

function realizarBusquedaMarcayModelo(marcaCoche,modelo){
    let cochesFiltrados = coches.filter( coche => coche.contieneMarca(marcaCoche) 
                                                                && coche.contieneModelo(modelo)
                                            );
    return cochesFiltrados;
}

function resetearFiltros(){
    mostrarCochesHTML(coches);
}


function realizarPruebasBusquedaMarcayModelo(){
    console.log("Pruebas de Busqueda por Marca y Modelo");
    let prueba1 = realizarBusquedaMarcayModelo("Citro", "A"); //Solo devuelve una pelicula
    console.log("Prueba1: realizarBusquedaMarcayModelo('Citro', 'A')");
    if(prueba1.length === 1){
        console.log("Prueba1 Correcta");
    }else{
        console.log("Prueba1 Incorrecta")
    }
    let prueba2 =realizarBusquedaMarcayModelo("Citroen", " Citroen Motosport ");// Devuelve tres peliculas
    console.log("Prueba2: realizarBusquedaMarcayModelo(\"Wars\", \" George     Lucas  \")");
    if(prueba2.length === 3){
        console.log("Prueba2 Correcta");
    }else{
        console.log("Prueba2 Incorrecta")
    }
    let prueba3 = realizarBusquedaMarcayModelo("Audi",""); // Vacio
    console.log("Prueba3: realizarBusquedaMarcayModelo(\"Audi\",\"\") ");

    prueba3.length === 0?console.log("Prueba 3 correcta"):console.log("Prueba 3 incorrecta");
    let prueba4 = realizarBusquedaMarcayModelo("","Mustang"); //Vacio
    console.log("Prueba4: realizarBusquedaMarcayModelo(\"\",\"Mustang\")");
    prueba4.length === 0?console.log("Prueba 4 correcta"):console.log("Prueba 4 incorrecta");
}

realizarPruebasBusquedaMarcayModelo();