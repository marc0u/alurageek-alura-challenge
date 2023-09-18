import { template } from "./template.js";

document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    pass: "",
  };
  const inputPass = document.querySelector("#pass");
  const form = document.querySelector(".form");
  inputEmail.addEventListener("input", validate);
  inputPass.addEventListener("input", validate);
  form.addEventListener("submit", sendData);

  function validate(e) {
    if (e.target.value.trim() === "") {
      template.showAlert(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
      email[e.target.id] = "";
      template.checkData(email);
      return;
    }
    if (e.target.id === "email" && !template.validateEmail(e.target.value)) {
      template.showAlert("El email no es valido", e.target.parentElement);
      email[e.target.id] = "";
      template.checkData(email);
      return;
    }
    template.cleanAlert(e.target.parentElement);
    email[e.target.id] = e.target.value.trim().toLowerCase();
    template.checkData(email);
  }

  function sendData(e) {
    e.preventDefault();
    form.appendChild(template.addSpinner());
    const spinner = document.querySelector(".spinner");
    setTimeout(() => {
      spinner.remove();
      resetForm();
      window.location.href = "/screens/administrator.html";
    }, 4000);
  }

  function resetForm() {
    email.email = "";
    email.pass = "";
    form.reset();
    template.checkData(email);
  }
});
