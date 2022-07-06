class partidoCreado{
    constructor(id, nombre, tel, cantidad, nivel, localidad){
        this.id = id;
        this.nombre = nombre;
        this.tel = tel;
        this.cantidad = cantidad;
        this.nivel = nivel;
        this.localidad = localidad;
    }
}
const partidos=[];


const usuarioCrear = document.getElementById('usuarioCrear');
const telCrear = document.getElementById('telCrear');
const cantidad = document.getElementById('cantidad');
const nivel = document.getElementById('nivel');
const localidad = document.getElementById('localidad');
const btnCrearPartido = document.getElementById('btnCrearPartido');

let usuarioCreador;
let telCreador;
let cantidadCreador;
let nivelCreador;
let localidadCreador;

usuarioCrear.onchange = () => {
}
telCrear.onchange = () => {
}
cantidad.onchange = () => {
}
nivel.onchange = () => {    
}
localidad.onchange = () => {
}
btnCrearPartido.onclick = () => {
    usuarioCreador = usuarioCrear.value;
    telCreador = telCrear.value;
    cantidadCreador = cantidad.value;
    nivelCreador = nivel.value;
    localidadCreador = localidad.value;
    console.log(`${usuarioCreador} + ${telCreador} + ${cantidadCreador} + ${nivelCreador} + ${localidadCreador}`);
    
    let id = (partidos.length) +1;
    let partidoNuevo = new partidoCreado(id,usuarioCreador, telCreador, cantidadCreador, nivelCreador, localidadCreador);
    partidos.push(partidoNuevo);
    console.log(partidos);
    subirPartido();
}

const subirPartido = () =>{
    const cardsPartidos = document.getElementById('cardsPartidos');
    cardsPartidos.innerHTML = "";
    for (const partido of partidos) {
        const nuevoCardPartido = document.createElement (`div`)
        nuevoCardPartido.className = "partidoCreado";
        nuevoCardPartido.innerHTML =`
                <div class="card " style="width: 18rem;">
                <ul class="list-group list-group-flush ">
                <li class="list-group-item ">Partido Numero ${partido.id}</li>
                <li class="list-group-item ">Nombre: ${partido.nombre}</li>
                <li class="list-group-item ">Telefono: ${partido.tel}</li>
                <li class="list-group-item ">Cantidad de Jugadores: ${partido.cantidad}</li>
                <li class="list-group-item ">Nivel de los Jugadores: ${partido.nivel}</li>
                <li class="list-group-item ">Localidad de los Jugadores: ${partido.localidad}</li>
                </ul>
                </div>
        `
        cardsPartidos.appendChild(nuevoCardPartido);
    }
}






