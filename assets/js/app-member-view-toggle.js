const listViewBtn = document.getElementById("listBtn");
const gridViewBtn = document.getElementById("gridBtn");
const memberCardGrid = document.querySelector(".member-card-grid");

let is_listView = false;
let is_gridView = false;

let listViewSwitch = () => {
  if (!is_listView) {
    listViewBtn.classList.add("fdx-icon-btn--selected");
    gridViewBtn.classList.remove("fdx-icon-btn--selected");
    memberCardGrid.classList.add("member-card-grid--list-view");
    is_listView = true;
  }
};

listViewBtn.addEventListener("click", listViewSwitch);

let gridViewSwitch = () => {
  if (!is_gridView) {
    gridViewBtn.classList.add("fdx-icon-btn--selected");
    listViewBtn.classList.remove("fdx-icon-btn--selected");
    memberCardGrid.classList.remove("member-card-grid--list-view");
    is_gridView = true;
  }
};

gridViewBtn.addEventListener("click", gridViewSwitch);
