let password = document.getElementById('password')
let button = document.getElementById('button')
let eye = document.getElementById('eye')

function ShowPassword() {
    if (password.type == 'password') {
        password.type = 'name'
        eye.classList.remove('bi-eye')
        eye.classList.add('bi-eye-slash')
    } else {
        password.type = 'password'
        eye.classList.remove('bi-eye-slash')
        eye.classList.add('bi-eye')
    }
}