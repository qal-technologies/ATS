document.addEventListener("DOMContentLoaded", async () => {
  const studentId = document.querySelector("input#student-ID").value;
  const OTPBtn = document.querySelector("button#OTP-Btn");
  const OTP = document.querySelector("input#reset-otp");
  const OTPMsg = document.querySelector("p.otp-message");
  const OTPWarning = document.querySelector("p.otp-warning");
  const RestoreBtn = document.querySelector("button#restore");

  let response = await fetch("../js/data.json");
  let data = await response.json();

  let realID = data.card.id;

  OTPBtn.addEventListener("click", () => {
    if (studentId == realID && studentId !== "") {
      OTP.style.display = "grid";
      OTPBtn.style.display = " none";

      alert("Done");
    } else {
      OTP.style.display = "none";
      OTPBtn.style.display = "grid";

      alert("not done");
    }
  });
    
    
});
