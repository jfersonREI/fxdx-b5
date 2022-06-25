const favBtn = document.querySelector(".data-card-fav-btn");

let favToggle = () => {
  favBtn.classList.toggle("data-card-fav-btn--favorited");
};

favBtn.addEventListener("click", favToggle);
