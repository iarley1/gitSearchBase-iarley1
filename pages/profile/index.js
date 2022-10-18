/* Desenvolva sua lógica aqui...*/
const ul = document.querySelector('ul')
const img = document.querySelector('img')
const nome = document.querySelector('.nome')
const bio = document.querySelector('.bio')
const valueInput = localStorage.getItem('input')



fetch(`https://api.github.com/users/${valueInput}`)
.then(response => {
    if(response.status === 200) {
        return response.json()
    }
    
})
.then(response => {
    img.src = response.avatar_url
    nome.innerText = response.name
    bio.innerText = response.bio
})

function api (value) {
    fetch(`https://api.github.com/users/${value}/repos`)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        renderizar(response, ul)
    })
}
api(valueInput)

function criarLi (repositorio) {
    const li = document.createElement('li')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const div = document.createElement('div')
    const botaoRepositorio = document.createElement('button')
    const botaoDemo = document.createElement('button')

    botaoRepositorio.classList.add('botao_repositoio')
    botaoRepositorio.innerText = "Repositorio"

    botaoDemo.classList.add('botao_demo')
    botaoDemo.innerText = "Demo"

    h2.innerText = repositorio.name
    p.innerText = repositorio.description

    li.append(h2, p, div)
    div.append(botaoRepositorio, botaoDemo)

    return li
}

function renderizar (repositorio, ul) {
    repositorio.forEach(element => {
        ul.appendChild(criarLi(element))
    });
}

