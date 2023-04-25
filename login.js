let password = document.getElementById('password')
let button = document.getElementById('button')
let eye = document.getElementById('eye')
var text1 = document.getElementById("password");
var text2 = document.getElementById("name");
var butt1 = document.getElementById("button1");

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

function check() {

  if (text1.value == null || text1.value == "" && (text2.value == null || text2.value == "")) {
    butt1.style.backgroundColor = "#edf1f5";
    butt1.style.color = "#000";
  }
  else {
    butt1.style.backgroundColor = "#1890ff";
    butt1.style.color = "#edf1f5";
  }
};