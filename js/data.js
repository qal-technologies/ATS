document.addEventListener("DOMContentLoaded", async function () {
  let userName = this.documentElement.querySelector("div#user-name");
  let userId = this.documentElement.querySelector("div#user-id-no");
  let userPics = this.documentElement.querySelector("img#user-image");
  let userDept = this.documentElement.querySelector("#user-department");
  let userBalance = this.documentElement.querySelector("span#user-balance");
  let userNo = this.documentElement.querySelector("#user-number");

  let response = await fetch("../js/data.json");
  let data = await response.json();

  if (userName) {
    userName.innerHTML = data.user.name || "User";
  }

  if (userNo) {
    userNo.innerHTML = data.user.regNo || "Reg-12345";
  }
  if (userBalance) {
    userBalance.innerHTML = data.card.balance || "0.00";
  }

  if (userId) {
    userId.innerHTML = data.card.id || "1234567890";
  }

  if (userDept) {
    userDept.innerHTML = data.user.department || "Department";
  }

  if (userPics) {
    userPics.innerHTML = data.user.profilePics || "0.00";
  }
});
