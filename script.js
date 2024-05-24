// function show() {
//     var senha = document.getElementById('senha')

//     if (senha.type === 'password') {
//         senha.type = 'text'
//     } else {
//         senha.type = 'password'
//     }
// }

// document.getElementById('projetos').addEventListener('click', function () {
//     this.classList.add('clicked')
// })

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.cabecalho__menu__link')

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'))
            // Add active class to the clicked link
            this.classList.add('active')
        })

        // Adiciona a classe active ao link correspondente à página atual
        if (link.href === window.location.href) {
            link.classList.add('active')
        }
    })
})
