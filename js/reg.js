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
    const subirUsuario = (clave, valor) => {
        localStorage.clear();
        localStorage.setItem(clave, valor);
    }
    subirUsuario ('usuario', JSON.stringify(usuarios));
})


// Formulario Logueo

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


    //Me gustaria que estos console log hicieran el inner de arriba pero no lo logre hacer. Segun 
    //entendi solo puede asignarse una linea de codigo con el operador ternario

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

    // const error = (password.value.length >= 6 ) ? true : false;
    // error.innerHTML = '<h5 class="text-success"> Password Correcto </h5>' : error.innerHTML = '<h5 class="text-danger"> Password incorrecto</h5>';



    
});
