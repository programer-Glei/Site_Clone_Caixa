
let conteudo_pricipal = document.querySelector('.main-conteudo')
let ilustracao = document.querySelector('.ilustracao')
let Main_h1 = document.querySelector('.conteudo-principal article h1')
let Main_para = document.querySelector('.conteudo-principal article .para')
let Main_button = document.querySelector('.conteudo-principal article .button')
let Aside_h2 = document.querySelector('.conteudo-principal aside h2')
let Aside_title = document.querySelector('.conteudo-principal aside #aside-title')
let Aside_subtile = document.querySelector('.conteudo-principal aside #aside-subtitle')
let Aside_title1 = document.querySelector('.conteudo-principal aside #aside-title1')
let Aside_subtile1 = document.querySelector('.conteudo-principal aside #aside-subtitle1')
let Aside_title2 = document.querySelector('.conteudo-principal aside #aside-title2')
let Aside_subtile2 = document.querySelector('.conteudo-principal aside #aside-subtitle2')
let Aside_title3 = document.querySelector('.conteudo-principal aside #aside-title3')
let Aside_subtile3 = document.querySelector('.conteudo-principal aside #aside-subtitle3')


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
        Aside_h2.innerHTML = "Mais benefícios para o <br>trabalhador"
        Aside_title.innerHTML = "FGTS - Saque Aniversário"
        Aside_subtile.innerHTML = "Simule aqui o valor que você poderá <br>sacar."
        Aside_title1.innerHTML = "INSS"
        Aside_subtile1.innerHTML = "Receba seu benefício pela CAIXA. È <br> rápido e seguro"
        Aside_title2.innerHTML = "Abono Salarial"
        Aside_subtile2.innerHTML = "Verifique quem tem direito e como <br> sacar."
        Aside_title3.innerHTML = "Chat FGTS"
        Aside_subtile3.innerHTML = "Tire todas as suas dúvidas sobre os <br> novos saques do FGTS."
    }
}
