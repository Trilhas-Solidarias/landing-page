function show() {
    var senha = document.getElementById('senha')

    if (senha.type === 'password') {
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
}

document.getElementById('projetos').addEventListener('click', function () {
    this.classList.add('clicked')
})

// var nome = 'Naum'
// var sobreNome = 'Leal'
// var atraso = 200
// var textoElemento = document.querySelector('.apresentacao__conteudo__titulo')
// var textoColorido = document.querySelector('.titulo-destaque')

// var contadorNome = 0
// var contadorSobreNome = 0

// function escreverNome() {
//     if (contadorNome < nome.length) {
//         textoElemento.textContent += nome.charAt(contadorNome)
//         console.log('Escrevendo nome:', nome.charAt(contadorNome))
//         contadorNome++
//         setTimeout(escreverNome, atraso)
//     } else {
//         console.log('Nome completo escrito. Iniciando sobrenome...')
//         escreverSobreNome()
//     }
// }

// function escreverSobreNome() {
//     if (contadorSobreNome < sobreNome.length) {
//         textoColorido.textContent += sobreNome.charAt(contadorSobreNome)
//         console.log(
//             'Escrevendo sobrenome:',
//             sobreNome.charAt(contadorSobreNome)
//         )
//         contadorSobreNome++
//         setTimeout(escreverSobreNome, atraso)
//     }
// }

// // Inicia o processo escrevendo o nome primeiro
// escreverNome()
