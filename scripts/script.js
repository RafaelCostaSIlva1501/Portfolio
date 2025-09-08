import { DOM } from "./DOM.js";
import { projects, skills, creative } from "./data.js";

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

const replace = () => {
  DOM.section.forEach((e) => {
    e.style.display = "none";
  });

  DOM.btn.forEach((e) => {
    e.style.background = "none";
    e.style.color = "var(--c2)";
  });
};

replace();

DOM.btn[0].style.backgroundColor = "var(--c2)";
DOM.btn[0].style.color = "var(--c6)";
DOM.section[0].style.display = "flex";

DOM.btn.forEach((e, i) => {
  e.addEventListener("click", () => {
    replace();

    DOM.section[i].style.display = "flex";

    e.style.backgroundColor = "var(--c2)";
    e.style.color = "var(--c6)";
  });
});

skills.forEach((e) => {
  const article = createElement("article");

  const div1 = createElement("div");

  const h2 = createElement("h2");
  h2.textContent = e.title;

  const div2 = createElement("div");

  e.icon.forEach((e) => {
    const img = createElement("img");
    img.src = `img/icons/${e}.png`;
    img.alt = `${e} Logo`;

    div2.appendChild(img);
  });

  const p = createElement("p");
  p.textContent = e.text;

  DOM.skills.appendChild(article);
  article.appendChild(div1);
  div1.appendChild(h2);
  div1.appendChild(div2);
  article.appendChild(p);
});

projects.forEach((e) => {
  const article = createElement("article");
  DOM.projects.appendChild(article);

  const img = createElement("img");
  img.src = `img/project/${e.img}.jpg`;
  img.alt = `${e.title} banner`;
  article.appendChild(img);

  const section = createElement("section");
  article.appendChild(section);

  const h2 = createElement("h2");
  h2.textContent = e.title;
  section.appendChild(h2);

  const p = createElement("p");
  p.textContent = e.text;
  section.appendChild(p);

  const div = createElement("div");
  article.appendChild(div);

  const github = createElement("a");
  github.href = e.github;
  github.innerHTML = "Github";
  div.appendChild(github);

  const view = createElement("a");
  view.href = e.view;
  view.innerHTML = "Ver projeto";
  div.appendChild(view);
});

creative.forEach((e) => {
  const article = createElement("article");

  const img = createElement("img");
  img.src = `img/project/${e.img}.jpg`;

  const div = createElement("div");

  const h3 = createElement("h3");
  h3.textContent = e.title;

  const p = createElement("p");
  p.textContent = e.text;

  DOM.creative.appendChild(article);
  article.appendChild(img);
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
});
