/* Desenvolva sua lógica aqui...*/
const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')



form.addEventListener('submit', event => {
    event.preventDefault()
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => {
        if(response.status === 200) {
            localStorage.setItem('input', input.value)
            button.innerHTML = '<div class="spinner"</div>'
            setTimeout(() => {
                window.location.assign('./pages/profile/profile.html')
            }, 2000)
        }else {
            alert("Este usuario não existe")
        }
    })   
})

function ativarBotao() {
    if (input.value) {
      button.disabled = false
      return
    }
    button.disabled = true
  }