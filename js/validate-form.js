import { template } from "./template.js";

document.addEventListener("DOMContentLoaded", function () {
  const formData = {
    Url: "https://picsum.photos/200/300?random=100",
    Nombre: "",
    Precio: "",
    Descripcion: "",
    Categoria: "",
  };
  const inputUrl = document.querySelector("#url-image");
  const category = document.querySelector("#category");
  const inputName = document.querySelector("#nom-product");
  const inputPrice = document.querySelector("#price");
  const inputDescription = document.querySelector("#description");
  const form = document.querySelector(".form");
  const formContainer = document.querySelector(".form__container");
  inputUrl.addEventListener("input", validate);
  inputName.addEventListener("input", validate);
  inputPrice.addEventListener("input", validate);
  inputDescription.addEventListener("input", validate);
  form.addEventListener("submit", sendData);
  category.addEventListener("click", (e) => {
    if (e.target.value == 0) {
      formData[e.target.name] = "";
      template.checkData(formData);
      return;
    }
    formData[e.target.name] = e.target.value;
    template.checkData(formData);
  });

  function validate(e) {
    if (e.target.value.trim() === "") {
      template.showAlert(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
      formData[e.target.name] = "";
      template.checkData(formData);
      return;
    }
    if (e.target.name === "Url" && !template.validateUrl(e.target.value)) {
      template.showAlert("La url no valida", e.target.parentElement);
      formData[e.target.name] = "";
      template.checkData(formData);
      return;
    }
    template.cleanAlert(e.target.parentElement);
    formData[e.target.name] = e.target.value.trim().toLowerCase();
    template.checkData(formData);
  }

  function sendData(e) {
    e.preventDefault();
    formContainer.appendChild(template.addSpinner());
    const spinner = document.querySelector(".spinner");
    setTimeout(() => {
      spinner.remove();
      resetForm();
    }, 3000);
  }

  function resetForm() {
    formData.Nombre = "";
    formData.Precio = "";
    formData.Descripcion = "";
    formData.Categoria = "";
    form.reset();
    template.checkData(formData);
  }
});
