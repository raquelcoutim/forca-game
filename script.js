frutas = ["maçã", "banana", "laranja", "manga", "tanjerina", "tamarindo", "carambola"]
objetosEscolares = ["lápis", "borracha", "caneta", "pincel", "caderno", "livro"]

let grupo
let palavra
let resposta
let palavraEscolhida

function gerarFrutas() {
    escolha = parseInt(Math.random() * 7)
    console.log(escolha)
    grupo = "frutas"
    palavraEscolhida = frutas[escolha]
    document.getElementById("grupo").innerHTML = grupo
    document.getElementById("qtd-letras").innerHTML = palavraEscolhida.length
    document.getElementById("initial-letter").innerHTML = palavraEscolhida.charAt(0)
}

function gerarObjetosEscolares() {
    escolha = parseInt(Math.random() * 6)
    console.log(escolha)
    grupo = "objetos escolares"
    palavraEscolhida = objetosEscolares[escolha]
    document.getElementById("grupo").innerHTML = grupo
    document.getElementById("qtd-letras").innerHTML = palavraEscolhida.length
    document.getElementById("initial-letter").innerHTML = palavraEscolhida.charAt(0)
}

function confirmar() {
    document.getElementById("palavraEscolhida").innerHTML = palavraEscolhida
    if (document.getElementById("palpite").value == palavraEscolhida) {
        document.getElementById("resultado").innerHTML = "VOCÊ GANHOU!"
    }
    else {
        document.getElementById("resultado").innerHTML = "VOCÊ PERDEU!"
    }
}