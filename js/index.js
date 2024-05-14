const addBtn = document.querySelector(".main-div .lower .fund");
const bookBtn = document.querySelector(".main-div .lower .book");
const searchBtn = document.querySelector(".map-search-icon");

// for updating user balance
window.onload = () => {
  const balance = localStorage.getItem("user-balance");

  const balanceInteger = JSON.parse(balance);
};

// for the drop down effect of the Map search bar
let clicked = false;

searchBtn.addEventListener("click", () => {
  clicked = !clicked;

  let mapHeader = document.querySelector("h2.map-header");
  if (clicked) {
    mapHeader.classList.remove("height-up");
    mapHeader.classList.add("height-down");
  } else {
    // mapHeader.classList.add("height-up");
    mapHeader.classList.remove("height-down");
  }
});

