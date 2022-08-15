let partidoGuardado=[];
const dibujarCards=(listaPartidos)=>{
    const cardsPartidos = document.getElementById('cardsPartidos');
    cardsPartidos.innerHTML = ``;
    listaPartidos.forEach(partido => {
        const nuevoCardPartido = document.createElement (`div`)
        nuevoCardPartido.className = "partidoCreado";
        nuevoCardPartido.innerHTML =`
            <div class="card " style="width: 18rem;">
            <ul class="list-group list-group-flush ">
            <li class="list-group-item ">Partido Numero ${partido.id}</li>
            <li class="list-group-item ">Nombre: ${partido.usuario}</li>
            <li class="list-group-item ">Telefono: ${partido.tel}</li>
            <li class="list-group-item ">Cantidad de Jugadores: ${partido.cantidad}</li>
            <li class="list-group-item ">Nivel de los Jugadores: ${partido.nivel}</li>
            <li class="list-group-item ">Localidad de los Jugadores: ${partido.localidad}</li>
            </ul>
            <a href="https://wa.me/54${partido.tel}?text=Hola%20${partido.usuario}%20quería%20unirme%20al%20partido%20que%20creaste%20en%20PadelSearch.%20Muchas%20Gracias." target="_blank"><button class="btn btn-primary">Unirse al partido</button></a>
            </div> 
            `
        cardsPartidos.appendChild(nuevoCardPartido);
    });
}
const obtenerPartidos = async () => {
            try {
                const partido = await fetch("../js/data/partidos.json");
                const partidoData = await partido.json();
                const listPartidos = partidoData;
                listPartidos.forEach(partido => {
                    if(partidoGuardado==null){
                        partido.id=1;
                        partidoGuardado=[partido];
                    }else{
                        let id = partidoGuardado.length+1;
                        partido.id=id;
                        partidoGuardado.push(partido);
                        console.log(partidoGuardado);
                    }
                });
                dibujarCards(partidoGuardado);
            } catch (error) {
                console.log(error);
            }
    }
const subirPartido = () =>{
        
    partidoGuardado = JSON.parse(localStorage.getItem("partido"));
    if (partidoGuardado==null){
        partidoGuardado=[];
    }
    obtenerPartidos();
    }

subirPartido();