let numero_cartao = document.querySelector("#numero-cartao");
let nome_cartao = document.querySelector("#nome-cartao");
let data_validade = document.querySelector("#data-validade");
let codigo_seguranca = document.querySelector("#codigo-seguranca");
let div_cartao_frente = document.querySelector("#div-cartao-frente");
let div_cartao_verso = document.querySelector("#div-cartao-verso");
codigo_seguranca.addEventListener("focus", () => {
    document.querySelector(".div-flip").style.transform = "rotateY(180deg)";
});
codigo_seguranca.addEventListener("blur", () => {
    document.querySelector(".div-flip").style.transform = "rotateY(0deg)";
});
