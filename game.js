var altura = 0
var largura = 0

function ajustaTamanhoTela() {

    altura = window.innerHeight
    largura = window.innerWidth

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(altura, largura)

}

ajustaTamanhoTela()

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}