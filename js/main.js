import { template } from "./template.js";

document.addEventListener("DOMContentLoaded", function () {
  const email = {
    name: "",
    message: "",
  };
  const inputName = document.querySelector("#name");
  const inputMessage = document.querySelector("#message");
  const formContainer = document.querySelector(".form__container");
  const form = document.querySelector(".form");

  inputName.addEventListener("input", validate);
  inputMessage.addEventListener("input", validate);
  form.addEventListener("submit", sendData);

  function validate(e) {
    if (e.target.value.trim() === "") {
      template.showAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
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
    formContainer.appendChild(template.addSpinner());
    const spinner = document.querySelector(".spinner");
    setTimeout(() => {
      spinner.remove();
      resetForm();
    }, 4000);
  }

  function resetForm() {
    email.name = "";
    email.message = "";
    form.reset();
    template.checkData(email);
  }
});
