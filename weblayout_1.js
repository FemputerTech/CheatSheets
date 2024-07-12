let favoritesList = document.getElementById("favorites-list");
let categoriesList = document.getElementById("categories-list");
const favorites = [
  {
    title: "Popular",
    icon: '<img src="square.fill.png" alt="Popular icon"/>',
  },
  {
    title: "Top Rated",
    icon: '<img src="square.fill.png" alt="Top rated icon"/>',
  },
  {
    title: "Upcoming",
    icon: '<img src="square.fill.png" alt="Upcoming icon"/>',
  },
];
const categories = [
  {
    title: "Action",
    icon: '<img src="square.fill.png" alt="Action icon"/>',
  },
  {
    title: "Adventure",
    icon: '<img src="square.fill.png" alt="Adventure icon" />',
  },
  {
    title: "Animation",
    icon: '<img src="square.fill.png" alt="Animation icon" />',
  },
  {
    title: "Comedy",
    icon: '<img src="square.fill.png" alt="Comedy icon" />',
  },
  {
    title: "Crime",
    icon: '<img src="square.fill.png" alt="Crime icon"/>',
  },
  {
    title: "Documentary",
    icon: '<img src="square.fill.png" alt="Documentary icon"/>',
  },
  {
    title: "Drama",
    icon: '<img src="square.fill.png" alt="Drama icon"/>',
  },
  {
    title: "Family",
    icon: '<img src="square.fill.png" alt="Family icon"/>',
  },
  {
    title: "Fantasy",
    icon: '<img src="square.fill.png" alt="Fantasy icon"/>',
  },
  {
    title: "History",
    icon: '<img src="square.fill.png" alt="History icon"/>',
  },
  {
    title: "Horror",
    icon: '<img src="square.fill.png" alt="Horror icon"/>',
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
