function tratarCadenasInput(cadena){
    let cadenaResultante = null;
    if(typeof(cadena) === "string"){
        let cadenaTratada = cadena.trim().toUpperCase();
        cadenaTratada = cadenaTratada.replace(/\s{2,}/g," ");
        if(cadenaTratada !== ""){
            cadenaResultante = cadenaTratada;
        }
    }
    return cadenaResultante;
}

function mostrarCochesHTML(cochesMostrar){
    let divCoches  = document.getElementById("coches");
    divCoches.innerHTML = "";
    if(cochesMostrar.length === 0){
        divCoches.innerHTML = "NO HAY COCHES QUE MOSTRAR";
    }else{
        cochesMostrar.forEach( coche => coche.mostrarEnHTML(divCoches));
    }
}

function incluirCocheHTML(coche){
    let divCoches  = document.getElementById("coches");
    coche.mostrarEnHTML(divCoches);
}