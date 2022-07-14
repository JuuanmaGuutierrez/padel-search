const subirPartido = () =>{
    const partidoGuardado = JSON.parse(localStorage.getItem("partido"));
    const cardsPartidos = document.getElementById('cardsPartidos');
    cardsPartidos.innerHTML = ``;
    console.log(cardsPartidos);
    for (const partido of partidoGuardado) {
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
                <a href="https://wa.me/54${partido.tel}?text=Hola%20${partido.nombre}%20queria%20unirme%20al%20partido%20que%20creaste%20en%20PadelSearch.%20Muchas%20Gracias." target="_blank"><button class="btn btn-primary">Unirse al partido</button></a>
                </div>
        `
        cardsPartidos.appendChild(nuevoCardPartido);
    }
}
subirPartido();