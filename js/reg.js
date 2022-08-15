// Capturar formulario registro

const formReg = document.getElementById('formularioRegistro');

    class usuariosCreador{
        constructor(nombre, apellido, telefono, email, password) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.email = email;
            this.password = password;
        }
    }


const usuarios=[];
    
formReg.addEventListener('submit', (e) => {

    e.preventDefault();

    swal({
        title: 'Bienvenido a la comunidad de PadelSearch',
        icon: 'success',
        confirm: 'Ok!'
    })


    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('emailReg').value;
    let password = document.getElementById('passwordReg').value;



    let usuarioNuevo = new usuariosCreador(nombre, apellido, telefono, email, password);
    usuarios.push(usuarioNuevo);
    console.log(usuarios);
    const subirUsuario = (clave, valor) => {
        localStorage.setItem(clave, valor);
    }
    subirUsuario ('usuario', JSON.stringify(usuarios));
})


// Formulario Logueo

const formLog = document.getElementById('formularioLog');

formLog.addEventListener('submit', (e) => {
    e.preventDefault();


const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('blur', () => {
if (email.value.length > 0 && email.value.includes ('@') && email.value.includes('.')){
    const error = document.getElementById('errorEmail');
    error.innerHTML = '<h5 class="text-success"> Email Correcto </h5>';
}else {
    const error = document.getElementById('errorEmail');
    error.innerHTML = '<h5 class="text-danger"> Email incorrecto</h5>';
}


const error = (email.value.length > 0 && email.value.includes ('@') && email.value.includes('.')) ? true : false;
error ? console.log('email correcto') : console.log('email incorrecto');

});

password.addEventListener('blur', () => {
    if (password.value.length > 6 ){
        const error = document.getElementById('errorPassword');
        error.innerHTML = '<h5 class="text-success"> Password Correcto </h5>';
    }else {
        const error = document.getElementById('errorPassword');
        error.innerHTML = '<h5 class="text-danger"> Password incorrecto</h5>';
    }
    

    const error = (password.value.length >= 6 ) ? true : false;
    error ? console.log('contraseña correcta') : console.log('contraseña inorrecta');
    
});

const emailDb = email.value
const passDb = password.value

const dbUsuarios = JSON.parse(localStorage.getItem('usuario'));
validacionEmail = dbUsuarios.find(usuario =>  usuario.email == emailDb);
validacionPass = dbUsuarios.find(usuario => usuario.password == passDb);
console.log(validacionEmail);
console.log(validacionPass);
if (validacionEmail && validacionPass) {

    swal({
        title: 'Inicio de sesion correcto',
        icon: 'success',
        confirm: 'Ok!'
    })
    const contBtn = document.getElementById('indexCrear');
    const btn =  '<button id="botonCrear" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Crear Partido</button>'
        
    
        contBtn.innerHTML = `
                            <h1>PadelSearch</h1>
                            <h2>Tu buscador de partidos</h2>
                            <p>Cansado de que tus amigos siempre te digan que si, pero a ultimo moemtno te cancelen?</p>
                            <strong>
                            <p>Tenemos tu solución. No busques en otra parte</p>
                            </strong>
                            <p>PadelSearch te ofrece la posibilidad de crear un partido de padel ingresando los jugadores faltantes y solo esperar a que alguien ingrese para organizar el partido</p>
                            <button id="botonCrear" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Crear Partido</button>`
    } else {
    swal({
        title: 'Error al iniciar session',
        icon: 'error',
        confirm: 'Ok!'
    })
}
});