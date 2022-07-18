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
btnCrearPartido.onclick = (e) => {
    e.preventDefault();

        swal({
        title: 'Tu partido ha sido creado con exito',
        icon: 'success',
        confirm: 'Ok!'
    }).then( result => {
        if (result) {
            Toastify({
            text: 'Tu partido ha sido creado',
            duration: 3000,
            gravity: 'bottom',
            className: 'popUpToastify',
            style:{
                background: 'linear-gradient(60deg, rgba(26,90,168,1) 0%, rgba(22,54,93,1) 35%, rgba(18,56,89,1) 100%)',
            }
            }).showToast();
        }
    } ) 
}

        

    usuarioCreador = usuarioCrear.value;
    telCreador = telCrear.value;
    cantidadCreador = cantidad.value;
    nivelCreador = nivel.value;
    localidadCreador = localidad.value;
    let id = (partidos.length) +1;
    
    let partidoNuevo = new partidoCreado(id,usuarioCreador, telCreador, cantidadCreador, nivelCreador, localidadCreador);
    partidos.push(partidoNuevo);
    const guadarPartidos = (clave, valor) => {
        localStorage.clear();
        localStorage.setItem(clave, valor);
    }
    guadarPartidos (`partido`, JSON.stringify(partidos));
    
    console.log(partidoNuevo);










