let concesionario1 = new Concesionario("Pablo Motor");
let concesionario2 = new Concesionario("Citroen MotoSport");
let concesionario3 = new Concesionario("Las Quemadas");
let concesionario4 = new Concesionario("Automoviles Echevarria");

let listaConcesionarios= [concesionario1,concesionario2,concesionario3,concesionario4];

let coches = []

let cocheC = new Coche("Citroen","C5",concesionario2);
let cocheC2 = new Coche("Citroen","C8",concesionario2);
let cocheC3 = new Coche("Citroen","C4 Cactus",concesionario2);

coches.push(cocheC);
coches.push(cocheC2);
coches.push(cocheC3);

concesionario2.incluirCoche(cocheC);
concesionario2.incluirCoche(cocheC2);
concesionario2.incluirCoche(cocheC3);

let cocheA = new Coche("Audi","R8",concesionario1);
let cocheA2 = new Coche("Audi","A6",concesionario1);

coches.push(cocheA);
coches.push(cocheA2);


concesionario1.incluirCoche(cocheA);
concesionario1.incluirCoche(cocheA2);


let cocheF = new Coche("Ford","Mustang",concesionario4);
let cocheF2 = new Coche("Ford","Shelby",concesionario4);


coches.push(cocheF);
coches.push(cocheF2);

concesionario4.incluirCoche(cocheF);
concesionario4.incluirCoche(cocheF2);

mostrarCochesHTML(coches);