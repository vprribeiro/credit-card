let numero_cartao = document.querySelector("#numero-cartao") as HTMLInputElement;

let nome_cartao = document.querySelector("#nome-cartao") as HTMLInputElement

let data_validade = document.querySelector("#data-validade") as HTMLInputElement

let codigo_seguranca = document.querySelector("#codigo-seguranca") as HTMLInputElement

let div_cartao_frente = document.querySelector("#div-cartao-frente") as HTMLElement
let div_cartao_verso = document.querySelector("#div-cartao-verso") as HTMLElement

codigo_seguranca.addEventListener("focus", () =>{
    document.querySelector<HTMLElement>(".div-flip").style.transform = "rotateY(180deg)"

}
)
codigo_seguranca.addEventListener("blur", () =>{
    document.querySelector<HTMLElement>(".div-flip").style.transform = "rotateY(0deg)"
})