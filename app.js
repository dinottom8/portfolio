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
    document.getElementById("mainPaginaUm").style.display = "flex";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaCinco").style.display = "none";
    document.getElementById("botaoPaginaInicial").style.backgroundColor = "#DE95ED";
    document.getElementById("botaoPaginaCompetencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaExperiencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaProjetos").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaContato").style.backgroundColor = "#811498";

    document.getElementById("imagem1").src = "images/person-circle2.svg";
    document.getElementById("imagem2").src = "images/file-text.svg";
    document.getElementById("imagem3").src = "images/briefcase.svg";
    document.getElementById("imagem4").src = "images/columns-gap.svg";
    document.getElementById("imagem5").src = "images/envelope.svg";
}

function chamarPaginaDois () {
    document.getElementById("mainPaginaUm").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "flex";
    document.getElementById("mainPaginaCinco").style.display = "none";
    document.getElementById("botaoPaginaInicial").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaCompetencias").style.backgroundColor = "#DE95ED";
    document.getElementById("botaoPaginaExperiencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaProjetos").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaContato").style.backgroundColor = "#811498";

    document.getElementById("imagem1").src = "images/person-circle.svg";
    document.getElementById("imagem2").src = "images/file-text2.svg";
    document.getElementById("imagem3").src = "images/briefcase.svg";
    document.getElementById("imagem4").src = "images/columns-gap.svg";
    document.getElementById("imagem5").src = "images/envelope.svg";
}

function chamarPaginaTres () {
    document.getElementById("mainPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "block";
    document.getElementById("mainPaginaCinco").style.display = "none";
    document.getElementById("botaoPaginaInicial").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaCompetencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaExperiencias").style.backgroundColor = "#DE95ED";
    document.getElementById("botaoPaginaProjetos").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaContato").style.backgroundColor = "#811498";

    document.getElementById("imagem1").src = "images/person-circle.svg";
    document.getElementById("imagem2").src = "images/file-text.svg";
    document.getElementById("imagem3").src = "images/briefcase2.svg";
    document.getElementById("imagem4").src = "images/columns-gap.svg";
    document.getElementById("imagem5").src = "images/envelope.svg";
}

function chamarPaginaQuatro () {
    document.getElementById("mainPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "flex";
    document.getElementById("mainPaginaCinco").style.display = "none";
    document.getElementById("botaoPaginaInicial").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaCompetencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaExperiencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaProjetos").style.backgroundColor = "#DE95ED";
    document.getElementById("botaoPaginaContato").style.backgroundColor = "#811498";

    document.getElementById("imagem1").src = "images/person-circle.svg";
    document.getElementById("imagem2").src = "images/file-text.svg";
    document.getElementById("imagem3").src = "images/briefcase.svg";
    document.getElementById("imagem4").src = "images/columns-gap2.svg";
    document.getElementById("imagem5").src = "images/envelope.svg";
}

function chamarPaginaCinco () {
    document.getElementById("mainPaginaUm").style.display = "none";
    document.getElementById("mainPaginaDois").style.display = "none";
    document.getElementById("mainPaginaTres").style.display = "none";
    document.getElementById("mainPaginaQuatro").style.display = "none";
    document.getElementById("mainPaginaCinco").style.display = "flex";
    document.getElementById("botaoPaginaInicial").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaCompetencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaExperiencias").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaProjetos").style.backgroundColor = "#811498";
    document.getElementById("botaoPaginaContato").style.backgroundColor = "#DE95ED";

    document.getElementById("imagem1").src = "images/person-circle.svg";
    document.getElementById("imagem2").src = "images/file-text.svg";
    document.getElementById("imagem3").src = "images/briefcase.svg";
    document.getElementById("imagem4").src = "images/columns-gap.svg";
    document.getElementById("imagem5").src = "images/envelope2.svg";
}