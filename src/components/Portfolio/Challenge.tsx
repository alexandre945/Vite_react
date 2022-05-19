
export function Challenge(){
    return(
        
        <div className="flex flex-col  items-center justify-center   text-left mt-8  ml-8 mr-8 border-4 border-brand-500 py-4 ">
           <h1 className="text-brand-500">Desafios deste Projeto</h1>
           <p className="px-4 ">__Vou começar contando desde quando criei meu primeiro Portifólio com html e css puro,achei que tinha ficado maximo,<br></br>
               hoje eu olho e vejo que realmemte nâo é nenhuma obra de arte mas serve para você comparar o quanto evoluiu,olhando <br></br>
               os Projetos de hoje e também as diferentes tecnologias que vamos  agregando debaixo do nosso guarda chuva de soluções<br></br>
               durante a trajetoria de aprendizado e de Estudos; Vamos lá falar espesificamente deste projeto a principio eu construi<br></br>
               com JavaScript puro gostei muito do resultado e chegou a hora de colocar em produçâo e  como eu já vinha dando uma olh-<br></br>
               adinha na heroku resolvi que seria por la só que na hora do deploy descobri que nâo dava suporte para javaScript puro mas<br></br>
               Também vi que que tinha suport para node.js depois de muitos estudos documentações e tutoriais no youtub atravez da exten-<br></br>
               ssâo  engine EJS  é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples para usar é só<br></br>
               da npm install ejs -save na pasta do projeto e na extenssão usar ejs ex: 'index.ejs' e tem que ter essa configuração no arquivo principal <br></br>
               onde roda sua aplicação app.set('view engine', 'ejs') lembrando que para usar app. tem que extanciar o express desta maneira const app <br></br>
               = express(); esse foi o primeiro dos desafios outro foi que quando, era  JavaScript puro e eu queria navegar por paginas era colocar <br></br>
               o nome do arquivo no href ex: href="/index" e no Node eu já tinha, que criar uma rota ex: app.get('/index',(request,response)res.file('e aqui dentro<br></br>
               o caminho do arquivo que vc quer renderizar em tela')) , para conseguir aplicar css tambem precisa de algumas configurações precisa,que css esteje na pasta public<br></br>
                e no arquivo principal tem que ter essa, configuração app.use(express.static('public')),vou deixar aqui o Link deste projeto em JavaScript puro hospedado na heroku<br></br>
                <a href="https://portifolios77.herokuapp.com" target="_blank">Portifólio</a>, ai veio a LNW Return projeto da Recketseat em react ,prisma,tailwind,Vite,e outras bibliotecas eu participei e consegui concluir o Projeto<br></br>
                ai a necessidade de colocar em platica o que tinha acabado de aprender em react entâo resolvi mudar denovo a linguagem do meu codico agora para react e aqui esta.

  
               
           </p>

        </div>
    )
}