const favBtn = document.querySelector(".data-card-fav-btn");
let is_favorite = false;

let favToggle = () => {
  if (!is_favorite) {
    favBtn.classList.add("data-card-fav-btn--favorited");
    favBtn.setAttribute("aria-label", "Unfavorite");
    is_favorite = true;
  } else {
    favBtn.classList.remove("data-card-fav-btn--favorited");
    favBtn.setAttribute("aria-label", "Favorite");
    is_favorite = false;
  }
};

favBtn.addEventListener("click", favToggle);
