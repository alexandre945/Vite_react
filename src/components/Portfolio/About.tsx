
import fotos from "../../assetes/image/fotos.png";

export function About() {
    return (
        <div className="mt-9 mb-6 px-10 flex space-x-10  gap-4 place-content-center">
            <div className="py-0 w-[900px]  border-4 border-brand-500 rounded-md h-full">
                <img src={fotos} />
            </div>
            <div className="mx-3 border-4 border-brand-500 px-6 py-2 rounded-md">
                <h1 className="text-center py-4">Sobre</h1>
                <p className="">Olá meu nome é Alexandre vou falar um pouco da minha trajetoría de estudos no mundo da progamaçâo
                   ,começei com Gustavo Guanabara conhecido da galera iniciante Ensina HTML, CSS, JavaScript,depois LNW um evento da 
                   Rocketseat para quem nâo conhece ele é uma Plataforma de Educaçâo em teclonogia,na ocasiâo o projeto foi uma Plataforma 
                   de Estudos onde o Aluno selecionava o Professor e Matéria foi o bastante para me encantar sobre as possibilidades,que o mundo 
                   da tecnologia pode nos proporcionar;<br></br>
                   __A partir daí começei a procurar conteúdo sobre Progamação, o Poblema é que tem muita informação, o que nâo deveria ser um Poblema
                   mas acaba sendo por não saber para onde seguir,Primeira dúvida Front-End ou Back-End se Back-End qual linguagem as opinioẽs são as mais 
                   diversas,uns dizem que PHP vai morrer que nâo tem comercio outros dizem  que PHP é linguágem de ganbiarra outros já diz 80% da web é PHP
                    e as duvidas são inúmeras até que você começa a se identificar com alguma linguagem ou ter mais facilidade para aprender esta ou aquela
                    linguagem além disso deve ver como é a busca por Profissionais que dominão esta linguagem no mercado de trabalho;<br></br>
                    __Hoje eu estou focado em Laravel, Docker, Laradock o Laravel hoje é um Frame-work muito completo com sintase muito dinâmica e uma comunidade
                    muito ativa com frequentes atualizaçoês e comércio bem aquecido para quem  programa com Laravel<br></br>
                    __E é claro outros conhecimentos básicos para um progamador como Git, GitHub, Bootstrap,e nesse projeto eu também estou trabalhando com Tailwind,
                    que é uma ferramenta que traz muita produtividade,estou a disposiçâo pelos meio de contato exitentes neste site.
                </p>
            </div>
        </div>

    )
}