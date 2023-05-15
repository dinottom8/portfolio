const botaoPaginaInicial = document.getElementById("botaoPaginaInicial");
const botaoPaginaCompetencias = document.getElementById("botaoPaginaCompetencias");

botaoPaginaInicial.addEventListener("click", chamarPaginaUm);
botaoPaginaCompetencias.addEventListener("click", chamarPaginaDois);

function chamarPaginaUm () {
    document.getElementById("divFotoEForma").style.display = "block";
    document.getElementById("divApresentacaoPaginaUm").style.display = "block";
    document.getElementById("mainPaginaDois").style.display = "none";
}

function chamarPaginaDois () {
    document.getElementById("divFotoEForma").style.display = "none";
    document.getElementById("divApresentacaoPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "flex";
}