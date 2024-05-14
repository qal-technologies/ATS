const backBtn = document.querySelector("div.backBtn");

backBtn.addEventListener("click", () => {
  let lastPage = sessionStorage.getItem("lastPage");
  let currentPage = window.location.href;

  if (lastPage !== currentPage) {
    window.location.href = lastPage || "./index.html";
    if ((window.location.href = "./user.html")) {
      window.location.href = "./index.html";
    }
  } else {
    window.location.href = "./index.html";
  }
});
