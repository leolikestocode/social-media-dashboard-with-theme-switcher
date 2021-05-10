const colorSwitcher = document.querySelector("#theme-switcher");

colorSwitcher.addEventListener("click", function () {
  const body = document.querySelector("body");

  if (body.classList.contains("light-theme")) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    return;
  }

  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
});
