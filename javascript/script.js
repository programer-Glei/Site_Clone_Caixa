
let conteudo_pricipal = document.querySelector('.main-conteudo')
let ilustracao = document.querySelector('.ilustracao')
let img = document.querySelector('ilustracao img')
let Main_h1 = document.querySelector('.conteudo-principal article h1')
let Main_article = document.querySelector('.conteudo-principal article')
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
    if(button.id == "1"){
        ilustracao.style.display = "block"
        ilustracao.classList.add("absoluto")
        conteudo_pricipal.style.backgroundImage = ""
        Main_h1.classList.remove("menor")
        Main_article.classList.remove("absoluto")
        Main_h1.innerHTML = "PRONAMPE <br> na CAIXA"
        Main_para.innerHTML = "Com o PRONAMPE sua empresa tem crédito com taxas reduzidas e carência para começar a pagar."
        Main_button.innerHTML = "Saiba mais <span>▶</span>"
        Aside_h2.innerHTML = "Mais destaques"
        Aside_title.innerHTML = "CAIXA + empresas"
        Aside_subtile.innerHTML = "Com o PRONAMPE sua empresa tem crédito com taxas reduzidas e carência para começar a pagar."
        Aside_title1.innerHTML = "Trabalhe na CAIXA"
        Aside_subtile1.innerHTML = "Você tem interesse em trabalhar na CAIXA? Saiba como."
        Aside_title2.innerHTML = "Negocie suas dívidas"
        Aside_subtile2.innerHTML = "Se você está com dificuldade de pagamento de seu empréstimo, cartão de crédito ou financiamento habitacional, regularize suas dívidas agora mesmo. A CAIXA sempre tem uma solução que cabe no seu bolso."
        Aside_title3.innerHTML = "Fale Conosco"
        Aside_subtile3.innerHTML = "Atendimento CAIXA - 0800 104 0104 <br> CAIXA Cidadão - 0800 726 0207 <br> Negociação de Dívidas via chat <br> SAC CAIXA - 0800 726 0101 <br> Ouvidoria CAIXA - 0800 725 7474 <br> Canal de Denúncia <br> Consumidor.gov.br"
    }
    if(button.id == "2"){
        console.log(button.id)
        ilustracao.style.display = "none"
        conteudo_pricipal.style.backgroundImage = "url('img/trabalhador-home.jpg')"
        Main_h1.classList.add("menor")
        Main_article.classList.remove("absoluto")
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
    if(button.id == "3"){
        ilustracao.style.display = "block"
        ilustracao.classList.remove("absoluto")
        conteudo_pricipal.style.backgroundImage = ""
        Main_h1.classList.add("menor")
        Main_article.classList.add("absoluto")
        Main_h1.innerHTML = "Auxílio <br> Emergencial"
        Main_para.innerHTML = "​Um suporte financeiro para <br> trabalhadores informais."
        Main_button.innerHTML = "Saiba mais <span>▶</span>"
        Aside_h2.innerHTML = "Mais destaques"
        Aside_title.innerHTML = "CAIXA + empresas"
        Aside_subtile.innerHTML = "Com o PRONAMPE sua empresa tem crédito com taxas reduzidas e carência para começar a pagar."
        Aside_title1.innerHTML = "Trabalhe na CAIXA"
        Aside_subtile1.innerHTML = "Você tem interesse em trabalhar na CAIXA? Saiba como."
        Aside_title2.innerHTML = "Negocie suas dívidas"
        Aside_subtile2.innerHTML = "Se você está com dificuldade de pagamento de seu empréstimo, cartão de crédito ou financiamento habitacional, regularize suas dívidas agora mesmo. A CAIXA sempre tem uma solução que cabe no seu bolso."
        Aside_title3.innerHTML = "Fale Conosco"
        Aside_subtile3.innerHTML = "Atendimento CAIXA - 0800 104 0104 <br> CAIXA Cidadão - 0800 726 0207 <br> Negociação de Dívidas via chat <br> SAC CAIXA - 0800 726 0101 <br> Ouvidoria CAIXA - 0800 725 7474 <br> Canal de Denúncia <br> Consumidor.gov.br"
    }
}
