class Coche{
    constructor(marca,modelo,concesionario){
        this.marca=marca;
        this.modelo=modelo;
        this.concesionario=concesionario;
    }

get marca(){
    return this._marca;
}

get modelo(){
    return this._modelo;
}

get concesionario(){
    return this._concesionario;
}

set marca(marca){
    this._marca = marca;
}

set modelo(modelo){
    this._modelo = modelo;
}

set concesionario(concesionario){
    this._concesionario = concesionario;
}

mostrarEnHTML(nodoHTML){
    let bloque = document.createElement("div");
    bloque.className = "coche";
    let marca = document.createElement("h1");
    marca.innerHTML = this.marca;
    let modelo = document.createElement("h2");
    modelo.innerHTML = this.modelo;
    let concesionario = document.createElement("p");
    concesionario.innerHTML = this.concesionario.nombre;

    bloque.append(marca);
    bloque.append(modelo);
    bloque.append(concesionario);
    nodoHTML.appendChild(bloque);

}

contieneMarca(marca){
    let contiene = false;
    let marcaTratada = tratarCadenasInput(marca);
    if(marcaTratada !== null){
        contiene = this.marca.toUpperCase().includes(marcaTratada);
    }
    return contiene;
}

contieneConcesionario(concesionario){
    let contiene = false;
    let concesionarioTratado = tratarCadenasInput(concesionario);
    if(concesionarioTratado != null){
        contiene = this.concesionario.marca.toUpperCase().includes(concesionarioTratado);
        }
    return contiene;
    }
}

class Concesionario{

    constructor(nombre){
        this.nombre=nombre;
        this.coches = [];
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get coches(){
        return this._coches;
    }

    set coches(coches){
        this._coches = coches;
    }

    incluirCoche(coche){
        this._coches.push(coche);
    }

}