
function marcador(event){
    const button = event.currentTarget

    //remova todas as .active

    const botoes = document.querySelectorAll(".aside #menu-pincipal li")

    botoes.forEach((botao) =>{
        botao.classList.remove(".active")
    })
}
