var texto = 'Naum '
var texto2 = 'Leal'

var atraso = 200
var textoElemento = document.querySelector('.apresentacao__conteudo__titulo')

var strongElement = document.createElement('strong') // Criar um novo elemento strong
strongElement.classList.add('titulo-destaque') // Definir a classe do novo strong

var contadorDeLetras = -1
function escreverTexto() {
    if (contadorDeLetras < texto.length) {
        textoElemento.textContent += texto.charAt(contadorDeLetras)
        contadorDeLetras++
        setTimeout(escreverTexto, atraso)
    } else {
        escrever() // Chamar a função escrever() após escrever o texto "NAUM"
    }
}

function escrever() {
    var contadorDeLetras2 = 0 // Reiniciar o contador
    function escrever2() {
        if (contadorDeLetras2 < texto2.length) {
            strongElement.textContent += texto2.charAt(contadorDeLetras2)
            contadorDeLetras2++
            setTimeout(escrever2, atraso)
        }
    }
    escrever2() // Iniciar a função escrever2()
    textoElemento.appendChild(strongElement) // Adicionar o novo strong como filho do h1
}

escreverTexto()
