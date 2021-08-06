
let conteudo_pricipal = document.querySelector('.main-conteudo')
let ilustracao = document.querySelector('.ilustracao')
let Main_h1 = document.querySelector('.conteudo-principal article h1')
let Main_para = document.querySelector('.conteudo-principal article .para')
let Main_button = document.querySelector('.conteudo-principal article .button')


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
        ilustracao.style.display = "none"
        conteudo_pricipal.style.backgroundImage = "url('img/trabalhador-home.jpg')"
        Main_h1.classList.add("menor")
        Main_h1.innerHTML = "Benefícios para<br> Trabalhadores"
        Main_para.innerHTML = "O banco de todos os brasileiros tem orgulho de ser o banco de todos os trabalhadores."
        Main_button.innerHTML = "Conheça seus benefícios <span>▶</span>"
    }
}
