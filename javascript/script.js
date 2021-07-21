
function marcador(event){
    const button = event.currentTarget

    console.log(button)
    //remova todas as .active

    const botoes = document.querySelectorAll("aside #menu-pincipal li")
    console.log("cheguei aqui")

    botoes.forEach((botoes) =>{
        botoes.classList.remove("active")
    })
}
