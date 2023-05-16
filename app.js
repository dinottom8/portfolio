const botaoPaginaInicial = document.getElementById("botaoPaginaInicial");
const botaoPaginaCompetencias = document.getElementById("botaoPaginaCompetencias");
const botaoPaginaExperiencias = document.getElementById("botaoPaginaExperiencias");
const botaoPaginaProjetos = document.getElementById("botaoPaginaProjetos");
const botaoPaginaContato = document.getElementById("botaoPaginaContato");

botaoPaginaInicial.addEventListener("click", chamarPaginaUm);
botaoPaginaCompetencias.addEventListener("click", chamarPaginaDois);
botaoPaginaExperiencias.addEventListener("click", chamarPaginaTres);
botaoPaginaProjetos.addEventListener("click", chamarPaginaQuatro);
botaoPaginaContato.addEventListener("click", chamarPaginaCinco);

function chamarPaginaUm () {
    document.getElementById("divFotoEForma").style.display = "block";
    document.getElementById("divApresentacaoPaginaUm").style.display = "block";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaCinco").style.display = "none";
}

function chamarPaginaDois () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "flex";
    document.getElementById("mainPaginaCinco").style.display = "none";
}

function chamarPaginaTres () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "block";
    document.getElementById("mainPaginaCinco").style.display = "none";
}

function chamarPaginaQuatro () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "flex";
    document.getElementById("mainPaginaCinco").style.display = "none";
}

function chamarPaginaCinco () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaCinco").style.display = "flex";
}