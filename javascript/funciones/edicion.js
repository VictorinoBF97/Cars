function incluirCoche(){
    let inputMarcaCoche = document.getElementById("marcaCoche");
    let inputModeloCoche = document.getElementById("modelo");
    let inputConcesionario = document.getElementById("concesionario");

    let esMarcaCorrecta = validarMarcaCoche(inputMarcaCoche);
    let esModeloCorrecto = validarModeloCoche(inputModeloCoche);
    let esConcesionarioCorrecto = validarConcesionario(inputConcesionario); 

    if(esMarcaCorrecta && esModeloCorrecto && esConcesionarioCorrecto){
        let modelo = listaModelos.find( modelo => modelo.marca === inputModeloCoche.value);
        if(modelo === undefined){
            modelo = new Modelo(inputModeloCoche.value);
            listaModelos.push(modelo);
        }
        let cocheNuevo = new Coche(inputMarcaCoche.value,modelo,inputConcesionario.value);
        coches.push(cocheNuevo);
        modelo.incluirCoche(cocheNuevo);
        incluirCocheHTML(cocheNuevo);
    }
}

function validarMarcaCoche(inputMarca){
    let esCorrecto = false;
    let marcaTratada = tratarCadenasInput(inputMarca.value);

    if(marcaTratada === null){
        marcarInputComoErroneo(inputMarca,"La marca es errónea");
    }else{
        esCorrecto = true;
        marcarInputComoCorrecto(inputMarca);
    }
    return esCorrecto;
}

function marcarInputComoCorrecto(input){
    input.className  = "correcto";
    let padre = input.parentNode;
    let spanError = document.querySelectorAll(`#${input.id} + span`);
    if(spanError.length > 0){
        padre.removeChild(spanError[0]);
    }
}


function marcarInputComoErroneo(input,textoError){
    input.className  = "incorrecto";
    let padre = input.parentNode;
    let spanError = document.querySelectorAll(`#${input.id} + span`);
    if(spanError.length === 0){
        let spanNuevo = document.createElement("span");
        spanNuevo.className = "error";
        spanNuevo.innerHTML = textoError;
        padre.appendChild(spanNuevo);
    }
}


function validarModelo(inputModeloCoche){
    let esCorrecto = false;
    let modeloTratado = tratarCadenasInput(inputModeloCoche.value);

    if(modeloTratado === null){
        marcarInputComoErroneo(inputModeloCoche,"El modelo es erróneo");
    }else{
        esCorrecto = true;
        marcarInputComoCorrecto(inputModeloCoche);
    }
    return esCorrecto;
}


function validarConcesionario(inputConcesionario){
    let esCorrecto = false;
    let concesionarioTratado = tratarCadenasInput(inputConcesionario.value);

    if(concesionarioTratado === null){
        marcarInputComoErroneo(inputConcesionario,"El concesionario es erróneo");
    }else{
        esCorrecto = true;  
        marcarInputComoCorrecto(inputConcesionario);
    }
    return esCorrecto;
}