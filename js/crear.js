const formCreacion = document.getElementById('formularioCrear');
const btnCrear = document.getElementById('btnCrear');

    class partidosCreador{
        constructor(id, usuario, tel, cantidad, nivel, localidad){
            this.id = id;
            this.usuario = usuario;
            this.tel = tel;
            this.cantidad = cantidad;
            this.nivel = nivel;
            this.localidad = localidad
        }
    }

const partidos=[];

btnCrear.addEventListener('click', (e) => {console.log("asd");
    e.preventDefault();

    swal({
        title: 'Felicitaciones, tu partido a sido creado',
        icon: 'success',
        confirm: 'Ok!'
    })
    
    let id = (partidos.length) +1;
    let usuario = document.getElementById('usuarioCrear').value;
    let tel = document.getElementById('telCrear').value;
    let cantidad = document.getElementById('cantidad').value;
    let nivel = document.getElementById('nivel').value;
    let localidad = document.getElementById('localidad').value;


    let partidoNuevo = new partidosCreador(id, usuario, tel, cantidad, nivel, localidad);
    
    partidos.push(partidoNuevo);
    const subirPartido = (clave,valor) => {
        localStorage.setItem(clave, valor);
    }
    subirPartido('partido', JSON.stringify(partidos));
    })
