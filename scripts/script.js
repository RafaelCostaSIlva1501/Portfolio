document.getElementById("btnMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("open");
});

const btnShowProject = document.querySelectorAll(".btn-show-project");
const showProject = document.querySelectorAll(".show-project");

showProject[0].style.display = "flex";

//Exibe e esconde os projetos exibidos no painel
btnShowProject.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        openProjectsPanel();
        showProject.forEach((show) => (show.style.display = "none"));
        showProject[index].style.display = "flex";
    });
});

//Abre o painel de exibição de projetos
const openProjectsPanel = () => {
    document.getElementById("showProject").style.display = "flex";
};

//Fecha o painel de exibição de projetos
const closeProjectsPanel = () => {
    document.getElementById("showProject").style.display = "none";
};

const btnReplaceProject = document.querySelectorAll(".btn-replace-project");
const projectContent = document.querySelectorAll(".show-project-content");

projectContent[0].style.display = "flex";

btnReplaceProject.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        projectContent.forEach((content) => (content.style.display = "none"));
        projectContent[index].style.display = "flex";
    });
});

let infoIndex = 0;

const replaceInfoProject = (classImgTxt) => {
    const replaceImgTxt = document.querySelectorAll(classImgTxt);

    replaceImgTxt.forEach((replace) => (replace.style.display = "none"));

    if (infoIndex < 0) {
        infoIndex = replaceImgTxt.length - 1;
    } else if (infoIndex > replaceImgTxt.length - 1) {
        infoIndex = 0;
    }

    replaceImgTxt[infoIndex].style.display = "block";
};

const backInfo = (classImgTxt) => {
    infoIndex = infoIndex - 1;
    replaceInfoProject(classImgTxt);
};

const nextInfo = (classImgTxt) => {
    infoIndex = infoIndex + 1;
    replaceInfoProject(classImgTxt);
};

const replaceSlide = (slideClass, btnSlideClass) => {
    const slide = document.querySelectorAll(slideClass);
    const btnSlide = document.querySelectorAll(btnSlideClass);

    btnSlide.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            slide.forEach((slide) => (slide.style.display = "none"));
            slide[index].style.display = "flex";

            btnSlide.forEach((btn) => (btn.style.border = "none"));
            btn.style.border = "2px solid black";
        });
    });

    btnSlide[0].style.border = "2px solid black";
};

replaceSlide(".certification-slide", ".certification-btn");

replaceSlide(".diferencial-slide", ".diferencial-btn");

const projects = [
    //Snake Game
    {
        title: "Snake Game",
        img: [
            "../img/snake-game-img/snakeThumb1.png",
            "../img/snake-game-img/snakeThumb2.png",
            "../img/snake-game-img/snakeThumb3.png",
        ],
        infos: [
            "O jogo apresenta uma estrutura HTML, com seções para configurações, tela do jogo, e botões de controle. O CSS é utilizado para estilizar os elementos visuais do jogo, como botões, menu e canvas.",

            "O JavaScript controla toda a lógica do jogo, incluindo movimento da cobra, detecção de colisões, geração de comida, pontuação e configurações. Também responde às interações do usuário, como cliques em botões e teclas do teclado, para controlar a cobrinha e interagir com o jogo.",

            "O jogo oferece uma variedade de configurações que podem ser ajustadas pelo jogador, como velocidade da cobra, cores da cobra e da comida, e estilos de controle. O jogador pode pausar e retomar o jogo a qualquer momento, além de reiniciá-lo após o fim da partida.",
        ],
    },

    //Paint
    {
        title: "Paint",
        img: [
            "../img/paint-img/paintThumb1.png",
            "../img/paint-img/paintThumb2.png",
            "../img/paint-img/paintThumb3.png",
        ],
        infos: [
            "A página permite aos usuários desenhar livremente no canvas usando diferentes ferramentas, como pincel, balde de tinta e borracha.",

            "Além disso, é possível ajustar o tamanho do pincel e escolher cores personalizadas.",

            "Os desenhos podem ser salvos localmente e posteriormente visualizados na galeria de imagens integrada.",
        ],
    },

    //Breakout game
    {
        title: "Breakout Game",
        img: [],
        infos: [],
    },

    //Lista de Tarefas
    {
        title: "",
        img: [],
        infos: [],
    },

    //Chat Online
    {
        title: "",
        img: [],
        infos: [],
    },
];

document.getElementById("replaceImg").addEventListener("mouseenter", function() {
    document.getElementById("imgGithub").src = "img/midia-icons/github-logo.png";
    console.log()
});

// Adicione este bloco de código se você deseja restaurar a imagem original quando o mouse sai do link
document.getElementById("replaceImg").addEventListener("mouseleave", function() {
    document.getElementById("imgGithub").src = "img/midia-icons/github-logo-white.png";
});

