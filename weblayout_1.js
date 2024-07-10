let favoritesList = document.getElementById("favorites-list");
let categoriesList = document.getElementById("categories-list");
const favorites = [
  {
    title: "favorite item 1",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "favorite item 2",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "favorite item 3",
    icon: '<img src="square.fill.png" />',
  },
];
const categories = [
  {
    title: "item 1",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "item 2",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "item 3",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "item 4",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "item 5",
    icon: '<img src="square.fill.png" />',
  },
  {
    title: "item 6",
    icon: '<img src="square.fill.png" />',
  },
];

function handleSidebarData(sidebarData, sidebarList) {
  sidebarData.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item";

    const iconDiv = document.createElement("div");
    iconDiv.innerHTML = `${item.icon}`;
    iconDiv.className = "sidebar-icon";

    const titleDiv = document.createElement("div");
    titleDiv.textContent = `${item.title}`;
    titleDiv.className = "sidebar-title";

    li.appendChild(iconDiv);
    li.appendChild(titleDiv);

    sidebarList.appendChild(li);
  });
}

const cards = [
  {
    title: "card 1",
  },
  {
    title: "card 2",
  },
  {
    title: "card 3",
  },
  {
    title: "card 4",
  },
  {
    title: "card 5",
  },
  {
    title: "card 6",
  },
  {
    title: "card 7",
  },
  {
    title: "card 8",
  },
];

function handleCards(cards) {
  let cardContainer = document.querySelector(".card-container");

  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "card";

    const articleDiv = document.createElement("div");
    articleDiv.className = "card-title";
    articleDiv.textContent = card.title;

    article.appendChild(articleDiv);
    cardContainer.appendChild(article);
  });
}

handleSidebarData(favorites, favoritesList);
handleSidebarData(categories, categoriesList);
handleCards(cards);
