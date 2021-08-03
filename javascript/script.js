
let conteudo_pricipal = document.querySelector('.main-conteudo')


function marcador(event){
    const button = event.currentTarget

    console.log(event)
    console.log(button)
    //remova todas as .active

    const botoes = document.querySelectorAll("aside #menu-pincipal li")
    console.log("cheguei aqui")

    botoes.forEach((botoes) =>{
        botoes.classList.remove("active")
    })

    //adicionar a classe .active para este botão
    button.classList.add("active")
    console.log(conteudo_pricipal)
    if(button.id == "2"){
        console.log(button.id)
        conteudo_pricipal.style.backgroundImage = "url('img/trabalhador-home.jpg')"
    }
}
