const containerPrincipal = document.querySelector(".container-principal");
const containerPerguntas = document.querySelector(".container-perguntas");
const containerAlternativas = document.querySelector(".container-alternativas");
const containerResultado = document.querySelector(".container-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const historia = [
    {
        enunciado: "Você é um(a) jovem cientista ambiental que descobre uma IA revolucionária capaz de monitorar e prever mudanças climáticas. O que você faz primeiro?",
        alternativas: [
            "Testa a IA para prever desastres naturais em regiões vulneráveis.",
            "Aplica a IA para otimizar a gestão de resíduos sólidos na sua cidade."
        ]
    },
    {
        enunciado: "Os primeiros testes com a IA são promissores, mas há preocupações sobre o impacto da tecnologia. Como você responde às críticas?",
        alternativas: [
            "Organiza uma palestra comunitária para explicar os benefícios da IA na sustentabilidade.",
            "Foca em melhorar a transparência e a ética no uso da IA."
        ]
    },
    {
        enunciado: "Durante os testes, você descobre que a IA pode sugerir políticas ambientais eficazes, mas nem todos os líderes políticos apoiam a ideia. Qual abordagem você adota?",
        alternativas: [
            "Convoca especialistas para criar um relatório técnico e convencer os líderes.",
            "Usa a IA para gerar visualizações impactantes que mostrem os benefícios das políticas sugeridas."
        ]
    },
    {
        enunciado: "A IA identificou uma floresta em risco extremo de desmatamento. Para protegê-la, você pode:",
        alternativas: [
            "Desenvolver um sistema de drones guiados por IA para monitorar a área.",
            "Mobilizar a comunidade local para criar uma rede de proteção ambiental."
        ]
    },
    {
        enunciado: "Após anos de trabalho, a IA revolucionou a sustentabilidade ambiental na sua região. Como você celebra este marco?",
        alternativas: [
            "Escreve um artigo científico detalhando a jornada e o impacto.",
            "Cria uma campanha global de conscientização ambiental usando IA."
        ]
    },
];

let etapaAtual = 0;

function mostraPergunta() {
    const etapa = historia[etapaAtual];
    containerPerguntas.textContent = etapa.enunciado;
    containerAlternativas.innerHTML = "";

    etapa.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.classList.add("alternativa");
        botao.addEventListener("click", () => avancaHistoria(index));
        containerAlternativas.appendChild(botao);
    });
}

function avancaHistoria(index) {
    console.log(`Escolha feita: ${historia[etapaAtual].alternativas[index]}`);
    etapaAtual++;
    if (etapaAtual < historia.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    containerPrincipal.style.display = "none";
    containerResultado.style.display = "block";
    textoResultado.textContent = "Parabéns! Sua jornada com a Inteligência Artificial transformou o mundo e inspirou uma nova era de sustentabilidade ambiental.";
}

// Inicializa a história
mostraPergunta();



