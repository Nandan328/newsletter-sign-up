const email = document.getElementById("mail");
const submit = document.getElementById("submit");
const notValid = document.getElementById("valid");
const umail = document.getElementById("userMail");
const dismiss = document.getElementById("dismiss");
const cont = document.getElementById("cont");
const succCont = document.getElementById("succCont");

submit.addEventListener("click", () => {
  const mail = email.value;
  if (mail === "") {
    email.classList.add("notValid");
    notValid.style.visibility = "visible";
  } else {
    if (mail.includes("@") && mail.includes(".")) {
      if (email.classList.contains("notValid")) {
        email.classList.remove("notValid");
        notValid.style.visibility = "hidden";
      }
      cont.style.display = "none";
      succCont.style.display = "block";
      umail.innerHTML = mail;
    } else {
      email.classList.add("notValid");
      notValid.style.visibility = "visible";
    }
  }
});

dismiss.addEventListener("click", () => {
  cont.style.display = "flex";
  succCont.style.display = "none";
  email.value = "";
});
