const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 10;
playerLivesCount.textContent = playerLives;

//Тут картинки
const getData = () => [
  {
    imgSrc: "./images/ohok.jpeg",
    name: "OhOk",
  },
  {
    imgSrc: "./images/facepalm.jpg",
    name: "Facepalm",
  },
  {
    imgSrc: "./images/fox.jpeg",
    name: "Fox",
  },
  {
    imgSrc: "./images/jdun.jpg",
    name: "Jdun",
  },
  {
    imgSrc: "./images/mimimi.jpg",
    name: "MiMiMi",
  },
  {
    imgSrc: "./images/rog.jpg",
    name: "Rogatyi",
  },
  {
    imgSrc: "./images/sleep.jpeg",
    name: "Sleepwalking",
  },
  {
    imgSrc: "./images/whaaat.jpg",
    name: "Whaaat",
  },
  {
    imgSrc: "./images/ohok.jpeg",
    name: "OhOk",
  },
  {
    imgSrc: "./images/facepalm.jpg",
    name: "Facepalm",
  },
  {
    imgSrc: "./images/fox.jpeg",
    name: "Fox",
  },
  {
    imgSrc: "./images/jdun.jpg",
    name: "Jdun",
  },
  {
    imgSrc: "./images/mimimi.jpg",
    name: "MiMiMi",
  },
  {
    imgSrc: "./images/rog.jpg",
    name: "Rogatyi",
  },
  {
    imgSrc: "./images/sleep.jpeg",
    name: "Sleepwalking",
  },
  {
    imgSrc: "./images/whaaat.jpg",
    name: "Whaaat",
  },
];

//Тут рандом картинок
const randomize = () => {
  const cardData = getData();

  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Тут игра
const cardGenerator = () => {
  const cardData = randomize();
  //HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //Инфа по карточкам
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Кнопки карточки

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  //Логика
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Try again");
      }
    }
  }
  //Победа
  if (toggleCard.length === 16) {
    restartWin("Next");
  }
};

//restart

const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");

    //random
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 10;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

const restartWin = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");

    //random
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 5;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
