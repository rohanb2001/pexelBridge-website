const form = document.querySelector("form");

let formValues = {};

function submitForm(e) {
  e.preventDefault();
  let { email } = formValues;
  Toastify({
    text: `${email} succesfully signed up.`,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  console.log(formValues);
}

function getFormValues(e) {
  formValues = { ...formValues, [e.target.name]: e.target.value };
}

// Add EventListeners
form.addEventListener("submit", submitForm);
form.addEventListener("change", getFormValues);
