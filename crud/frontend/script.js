const form = window.document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const nome = window.document.getElementById('nome').value
    const email = window.document.getElementById('email').value
    const tel = window.document.getElementById('tel').value

    console.log(nome)
    console.log(email)
    console.log(tel)

})

