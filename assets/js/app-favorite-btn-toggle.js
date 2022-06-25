const favBtn = document.querySelector(".data-card-fav-btn");
let is_favorite = false;

let favToggle = () => {
  if (!is_favorite) {
    favBtn.classList.add("data-card-fav-btn--favorited");
    favBtn.setAttribute("aria-label", "Unfavorite");
    is_favorite = true;
    console.log(is_favorite);
  } else {
    favBtn.classList.remove("data-card-fav-btn--favorited");
    favBtn.setAttribute("aria-label", "Favorite");
    is_favorite = false;
    console.log(is_favorite);
  }
};

favBtn.addEventListener("click", favToggle);
