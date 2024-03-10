const loginForm = document.querySelector("#loginForm");
const incorrectWarning = document.querySelector("#incorrectWarning");
const loginData = {
  password: "1234567890",
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  let formProps = Object.fromEntries(formData);

  if (formProps.password !== loginData.password) {
    incorrectWarning.classList.remove("hide");
  } else {
    incorrectWarning.classList.add("hide");
    localStorage.setItem("name", formProps.name)
    window.location.href = "../dashboard.html"
  }
});
