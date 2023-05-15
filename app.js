const botaoPaginaInicial = document.getElementById("botaoPaginaInicial");
const botaoPaginaCompetencias = document.getElementById("botaoPaginaCompetencias");
const botaoPaginaExperiencias = document.getElementById("botaoPaginaExperiencias");

botaoPaginaInicial.addEventListener("click", chamarPaginaUm);
botaoPaginaCompetencias.addEventListener("click", chamarPaginaDois);
botaoPaginaExperiencias.addEventListener("click", chamarPaginaTres);

function chamarPaginaUm () {
    document.getElementById("divFotoEForma").style.display = "block";
    document.getElementById("divApresentacaoPaginaUm").style.display = "block";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
}

function chamarPaginaDois () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "flex";
    document.getElementById("mainPaginaTres").style.display = "none";
}

function chamarPaginaTres () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "block";
}