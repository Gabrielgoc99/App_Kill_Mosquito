var altura = 0
var largura = 0

function ajustaTamanhoTela() {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)

}

ajustaTamanhoTela()

function posicaoRandomica() {

    /*Aqui, definimos as posições dos eixos X e Y, definindo a variável
    para ambos. Utilizamos o Math.floor para arredondar o número para
    baixo e o math.random para randomizar um tamanho, multiplicando
    pela largura e altura da tela, retirando 100px para evitar a 
    criação de barra de rolagem ou imagens cortadas na tela*/

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    /*Aqui definimos acessamos o body do arquivo html via DOM, criando
    o elemento da imagem e passando os parâmetros de tamanho e posição.*/
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }

}