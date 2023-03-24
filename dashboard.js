const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const user = urlParams.get('user')
const userName = document.getElementById('user')

const p = document.createElement("p");
const node = document.createTextNode('Seja Bem vindo(a): ' + user);
p.appendChild(node);
const element = document.getElementById("teste");
element.appendChild(p);