//NOME A SER INSERIDO//
var nome = "Elon M";
var cargo = "CTO - Growdev"

//ELEMENTOS A SER ALTERADOS//
var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

//FUNÇÃO NOME PARA ALTERAÇÃO//
function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}
function logarNome() {
    console.log(nome);
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;

}
//CLIQUE NOS BOTÕES//
function clickNoProjetos(){
console.log("clickNoProjetos");
texto2.style.display = "block";
texto1.style.display = "none";
}

function clickNoSobre(){
console.log("clicou no botao sobre");
texto1.style.display = "block";
texto2.style.display = "none";

}


colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);


