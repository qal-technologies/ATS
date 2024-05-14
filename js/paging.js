window.onunload = () => {
  let lastPage = window.location.href;

  sessionStorage.setItem("lastPage", lastPage);
};
