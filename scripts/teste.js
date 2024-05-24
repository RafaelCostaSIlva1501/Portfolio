// Abre e fecha o menu inicial
document.getElementById("btnMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("open");
});

// Informações dos projetos guardados em objetos
const projects = [
    // Rpg Plus
    {
        title: "RPG +",
        img: "img/project-img/rpg-plus.jpg",
        tag: ["React", "JavaScript", "Css"],
        info: "RPG+ é uma plataforma de streaming que mergulha os entusiastas de rpg em um mundo de aventuras, narrativas envolventes e entretenimento imersivo. O coração do projeto reside em sua vasta biblioteca de episódios de RPGs, cuidadosamente organizados em categorias que abrangem uma ampla gama de gêneros, desde as aventuras de fantasia épica até os cenários de ficção científica futurista, há algo para todos os gostos e preferências.",
        code: "https://github.com/RafaelCostaSIlva1501/Rpg-Plus",
        view: "https://rpg-plus.vercel.app/",
    },
    // Chat Online
    {
        title: "Chat Online",
        img: "img/project-img/chat-online.jpg",
        tag: ["Html", "Css", "JavaScript", "Node JS"],
        info: "Meu primeiro projeto fullstack é um chat online simples e intuitivo. Ele permite que usuários se conectem instantaneamente e conversem em tempo real. Com uma interface limpa e amigável, os usuários podem trocar mensagens facilmente, proporcionando uma experiência de comunicação fluida e direta.",
        code: "https://github.com/RafaelCostaSIlva1501/Chat-Online",
        view: "https://chat-frontend-d9tu.onrender.com/",
    },
    // Snake Game
    {
        title: "Snake Game",
        img: "img/project-img/snake-game.jpg",
        tag: ["Html", "Css", "JavaScript"],
        info: "Snake Game é uma versão moderna do clássico jogo da cobrinha. Além da jogabilidade tradicional, o jogo oferece uma interface de configurações que permite aos jogadores ajustarem a velocidade da cobra, escolherem cores personalizadas e controlarem outras funções, proporcionando uma experiência de jogo altamente personalizável.",
        code: "https://github.com/RafaelCostaSIlva1501/Snake-Game",
        view: "https://rafaelcostasilva1501.github.io/Snake-Game/",
    },
    // Paint
    {
        title: "Paint",
        img: "img/project-img/paint.jpg",
        tag: ["Html", "Css", "JavaScript"],
        info: "Com este projeto de pintura interativa, você pode soltar a criatividade desenhando livremente, ajustando o tamanho do pincel, usando a borracha e o balde de tinta. Além disso, é possível salvar suas obras de arte em uma galeria pessoal e fazer o download das criações para compartilhar com o mundo!",
        code: "https://github.com/RafaelCostaSIlva1501/Paint",
        view: "https://rafaelcostasilva1501.github.io/Paint/",
    },
];

// Função que exibe os projetos
const showProjects = (index) => {
    const title = document.getElementById("projectTitle"); // Título
    const img = document.getElementById("projectImg"); // Imagem
    const tag = document.getElementById("projectTag"); // Tecnologias
    const info = document.getElementById("projectInfo"); // Sobre
    const code = document.getElementById("projectCode"); // Código fonte
    const view = document.getElementById("projectView"); // Visualização

    // Limpa o título anterior e coloca outro
    title.innerHTML = "";
    title.innerHTML = projects[index].title;

    // Limpa a imagem anterior e coloca outra
    img.src = "";
    img.src = projects[index].img;

    // Limpa as tags anteriores e coloca outras
    tag.innerHTML = "";
    projects[index].tag.forEach((tagName) => {
        const span = document.createElement("span");
        span.textContent = tagName;
        tag.appendChild(span);
    });

    // Limpa as informações anteriores e coloca outras
    info.innerHTML = "";
    info.innerHTML = projects[index].info;

    // Limpa o link do código fonte anterior e coloca outro
    code.href = "";
    code.href = projects[index].code;

    // Limpa o link do projeto anterior e coloca outro
    view.href = "";
    view.href = projects[index].view;
};

// Começa exibindo o primeiro projeto
showProjects(0);

//Define o índice inicialmente como 0
let projectIndex = 0;

// Função para exibir o projeto anterior
const backProject = () => {
    // Tira 1 do projectIndex
    projectIndex = projectIndex - 1;

    // Se o valor de projectIndex estiver menor que zero, ele vai para o valor máximo de acordo com a quantidade de elementos dentro do array "projects"
    if (projectIndex < 0) {
        projectIndex = projects.length - 1;
    }

    // Exibe um projeto de acordo com o seu índice
    showProjects(projectIndex);
};

// Função para exibir o próximo projeto
const nextProject = () => {
    // Adiciona 1 ao projectIndex
    projectIndex = projectIndex + 1;

    // Se o valor de projectIndex estiver maior que o valor máximo de acordo com a quantidade de elementos dentro do array "projects", volta para o primeiro projeto
    if (projectIndex > projects.length - 1) {
        projectIndex = 0;
    }

    // Exibe um projeto de acordo com o seu índice
    showProjects(projectIndex);
};

// Informações dos certificados guardados em objetos
const certified = [
    {
        title: "Certificado de HTML5 e CSS3",
        info: "Certificado emitido pelo Curso em Vídeo. Este curso me proporcionou uma base sólida em HTML e CSS, incluindo design responsivo e html semântico.",
        view: "",
    },
    {
        title: "Certificado de JavaScript",
        info: "Certificado emitido pelo Curso em Vídeo. Este curso me proporcionou uma base sólida em JavaScript, como estruturas de controle, manipulação do DOM e iteração com eventos.",
        view: "",
    },
    {
        title: "Certificado de AWS",
        info: "O projeto 'Teu Futuro re/start' me proporcionou uma base sólida em computação em nuvem e desenvolvimento de habilidades de Soft Skills.",
        view: "",
    },
];

// Função que exibe os certificados
const showCertified = (index) => {
    const title = document.getElementById("certifiedTitle"); // Título
    const info = document.getElementById("certifiedInfo"); // Informações
    const view = document.getElementById("certifiedView"); // Visualização

    // Limpa o título anterior e coloca outro
    title.innerHTML = "";
    title.innerHTML = certified[index].title;

    // Limpa as informações anteriores e coloca outras
    info.innerHTML = "";
    info.innerHTML = certified[index].info;

    // Limpa o link do certificado anterior e coloca outro
    view.href = "";
    view.href = certified[index].view;
};

// Começa exibindo o primeiro certificado
showCertified(0);

// Obtém o elemento que contém os certificados
const certifiedTag = document.getElementById("certified");
// Define o índice dos certificados inicialmente como 0
let certifiedIndex = 0;

// Função para exibir o certificado anterior
const backCertified = () => {
    // Tira 1 do certifiedIndex
    certifiedIndex = certifiedIndex - 1;

    // Se o valor de certifiedIndex estiver menor que zero, ele vai para o valor máximo de acordo com a quantidade de elementos dentro do array "certified"
    if (certifiedIndex < 0) {
        certifiedIndex = certified.length - 1;
    }

    // Exibe um certificado de acordo com o seu índice
    showCertified(certifiedIndex);

    // Adiciona animação para transição à esquerda
    certifiedTag.classList.add("animationR");

    // Remove a animação após um tempo
    const removeClass = () => {
        certifiedTag.classList.remove("animationR");
    };

    setTimeout(removeClass, 600);
};

// Função para exibir o próximo certificado
const nextCertified = () => {
    // Adiciona 1 ao certifiedIndex
    certifiedIndex = certifiedIndex + 1;

    // Se o valor de certifiedIndex estiver maior que o valor máximo de acordo com a quantidade de elementos dentro do array "certified", volta para o primeiro certificado
    if (certifiedIndex > certified.length - 1) {
        certifiedIndex = 0;
    }

    // Exibe um certificado de acordo com o seu índice
    showCertified(certifiedIndex);

    // Adiciona animação para transição à direita
    certifiedTag.classList.add("animationL");

    // Remove a animação após um tempo
    const removeClass = () => {
        certifiedTag.classList.remove("animationL");
    };

    setTimeout(removeClass, 600);
};

// Informações dos diferenciais guardados em objetos
const differential = [
    {
        title: "Código limpo",
        info: "Prezo por um código limpo e bem comentado, isso facilita a compreensão, colaboração e manutenção, tornando o desenvolvimento mais eficiente e escalável.",
    },
    {
        title: "Comunicação efetiva",
        info: "Boa capacidade de expressar ideias e soluções complexas de forma simples e compreensível para pessoas que não são programadoras",
    },
    {
        title: "Aprendizado contínuo",
        info: "Sempre em busca de conhecer novas tecnologias e tendências para melhorar minhas capacidades como desenvolvedor.",
    },
    {
        title: "Experiência em UI e UX",
        info: "Usabilidade, estética e experiência do usuário, me permitem criar interfaces e produtos mais atrativos e funcionais.",
    },
];

// Função que exibe os diferenciais
const showDifferential = (index) => {
    const title = document.getElementById("differentialTitle"); // Título
    const info = document.getElementById("differentialInfo"); // Informações

    // Limpa o título anterior e coloca outro
    title.innerHTML = "";
    title.innerHTML = differential[index].title;

    // Limpa as informações anteriores e coloca outras
    info.innerHTML = "";
    info.innerHTML = differential[index].info;
};

// Começa exibindo o terceiro diferencial
showDifferential(2);

// Obtém o elemento que contém os diferenciais
const differentialTag = document.getElementById("differential");
// Define o índice dos diferenciais inicialmente como 0
let differentialIndex = 0;

// Função para exibir o diferencial anterior
const backDifferential = () => {
    // Tira 1 do differentialIndex
    differentialIndex = differentialIndex - 1;

    // Se o valor de differentialIndex estiver menor que zero, ele vai para o valor máximo de acordo com a quantidade de elementos dentro do array "differential"
    if (differentialIndex < 0) {
        differentialIndex = differential.length - 1;
    }

    // Exibe um diferencial de acordo com o seu índice
    showDifferential(differentialIndex);

    // Adiciona animação para transição à esquerda
    differentialTag.classList.add("animationR");

    // Remove a animação após um tempo
    const removeClass = () => {
        differentialTag.classList.remove("animationR");
    };

    setTimeout(removeClass, 600);
};

// Função para exibir o próximo diferencial
const nextDifferential = () => {
    // Adiciona 1 ao differentialIndex
    differentialIndex = differentialIndex + 1;

    // Se o valor de differentialIndex estiver maior que o valor máximo de acordo com a quantidade de elementos dentro do array "differential", volta para o primeiro diferencial
    if (differentialIndex > differential.length - 1) {
        differentialIndex = 0;
    }

    // Exibe um diferencial de acordo com o seu índice
    showDifferential(differentialIndex);

    // Adiciona animação para transição à direita
    differentialTag.classList.add("animationL");

    // Remove a animação após um tempo
    const removeClass = () => {
        differentialTag.classList.remove("animationL");
    };

    setTimeout(removeClass, 600);
};

setInterval(nextCertified, 5500)

setInterval(nextDifferential, 7500)