//Abre e fecha o menu inicial
document.getElementById("btnMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("open");
});

const projects = [
    {
        title: "RPG +",
        img: "img/project-img/rpg-plus.jpg",
        tag: ["React", "JavaScript", "Css"],
        info: "RPG+ é uma plataforma de streaming que mergulha os entusiastas de rpg em um mundo de aventuras, narrativas envolventes e entretenimento imersivo. O coração do projeto reside em sua vasta biblioteca de episódios de RPGs, cuidadosamente organizados em categorias que abrangem uma ampla gama de gêneros, desde as aventuras de fantasia épica até os cenários de ficção científica futurista, há algo para todos os gostos e preferências.",
        code: "https://github.com/RafaelCostaSIlva1501/Rpg-Plus",
        view: "https://rpg-plus.vercel.app/",
    },

    {
        title: "Chat Online",
        img: "img/project-img/chat-online.jpg",
        tag: ["Html", "Css", "JavaScript", "Node JS"],
        info: "Meu primeiro projeto fullstack é um chat online simples e intuitivo. Ele permite que usuários se conectem instantaneamente e conversem em tempo real. Com uma interface limpa e amigável, os usuários podem trocar mensagens facilmente, proporcionando uma experiência de comunicação fluida e direta.",
        code: "https://github.com/RafaelCostaSIlva1501/Chat-Online",
        view: "https://chat-frontend-d9tu.onrender.com/",
    },

    {
        title: "Snake Game",
        img: "img/project-img/snake-game.jpg",
        tag: ["Html", "Css", "JavaScript"],
        info: "Snake Game é uma versão moderna do clássico jogo da cobrinha. Além da jogabilidade tradicional, o jogo oferece uma interface de configurações que permite aos jogadores ajustarem a velocidade da cobra, escolherem cores personalizadas e controlarem outras funções, proporcionando uma experiência de jogo altamente personalizável.",
        code: "https://github.com/RafaelCostaSIlva1501/Snake-Game",
        view: "https://rafaelcostasilva1501.github.io/Snake-Game/",
    },

    {
        title: "Paint",
        img: "img/project-img/paint.jpg",
        tag: ["Html", "Css", "JavaScript"],
        info: "Com este projeto de pintura interativa, você pode soltar a criatividade desenhando livremente, ajustando o tamanho do pincel, usando a borracha e o balde de tinta. Além disso, é possível salvar suas obras de arte em uma galeria pessoal e fazer o download das criações para compartilhar com o mundo!",
        code: "https://github.com/RafaelCostaSIlva1501/Paint",
        view: "https://rafaelcostasilva1501.github.io/Paint/",
    },
];

const showProjects = (index) => {
    const title = document.getElementById("projectTitle");
    const img = document.getElementById("projectImg");
    const tag = document.getElementById("projectTag");
    const info = document.getElementById("projectInfo");
    const code = document.getElementById("projectCode");
    const view = document.getElementById("projectView");

    title.innerHTML = "";
    title.innerHTML = projects[index].title;

    img.src = "";
    img.src = projects[index].img;

    tag.innerHTML = "";
    projects[index].tag.forEach((tagName) => {
        const span = document.createElement("span");
        span.textContent = tagName;
        tag.appendChild(span);
    });

    info.innerHTML = "";
    info.innerHTML = projects[index].info;

    code.href = "";
    code.href = projects[index].code;

    view.href = "";
    view.href = projects[index].view;
};

showProjects(0);

let projectIndex = 0;

const backProject = () => {
    projectIndex = projectIndex - 1;

    if (projectIndex < 0) {
        projectIndex = projects.length - 1;
    }

    showProjects(projectIndex);
};

const nextProject = () => {
    projectIndex = projectIndex + 1;

    if (projectIndex > projects.length - 1) {
        projectIndex = 0;
    }

    showProjects(projectIndex);
};

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

const showCertified = (index) => {
    const title = document.getElementById("certifiedTitle");
    const info = document.getElementById("certifiedInfo");
    const view = document.getElementById("certifiedView");

    title.innerHTML = "";
    title.innerHTML = certified[index].title;

    info.innerHTML = "";
    info.innerHTML = certified[index].info;

    view.href = "";
    view.href = certified[index].view;
};

showCertified(0);

const certifiedTag = document.getElementById("certified");
let certifiedIndex = 0;

const backCertified = () => {
    certifiedIndex = certifiedIndex - 1;

    if (certifiedIndex < 0) {
        certifiedIndex = certified.length - 1;
    }

    showCertified(certifiedIndex);

    certifiedTag.classList.add("animationR");

    const removeClass = () => {
        certifiedTag.classList.remove("animationR");
    };

    setTimeout(removeClass, 600);
};

const nextCertified = () => {
    certifiedIndex = certifiedIndex + 1;

    if (certifiedIndex > certified.length - 1) {
        certifiedIndex = 0;
    }

    showCertified(certifiedIndex);

    certifiedTag.classList.add("animationL");

    const removeClass = () => {
        certifiedTag.classList.remove("animationL");
    };

    setTimeout(removeClass, 600);
};

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

const showDifferential = (index) => {
    const title = document.getElementById("differentialTitle");
    const info = document.getElementById("differentialInfo");

    title.innerHTML = "";
    title.innerHTML = differential[index].title;

    info.innerHTML = "";
    info.innerHTML = differential[index].info;
};

showDifferential(2);

const differentialTag = document.getElementById("differential");
let differentialIndex = 0;

const backDifferential = () => {
    differentialIndex = differentialIndex - 1;

    if (differentialIndex < 0) {
        differentialIndex = differential.length - 1;
    }

    showDifferential(differentialIndex);

    differentialTag.classList.add("animationR");

    const removeClass = () => {
        differentialTag.classList.remove("animationR");
    };

    setTimeout(removeClass, 600);
};

const nextDifferential = () => {
    differentialIndex = differentialIndex + 1;

    if (differentialIndex > differential.length - 1) {
        differentialIndex = 0;
    }

    showDifferential(differentialIndex);

    differentialTag.classList.add("animationL");

    const removeClass = () => {
        differentialTag.classList.remove("animationL");
    };

    setTimeout(removeClass, 600);
};
