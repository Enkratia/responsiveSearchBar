const inputBox = document.querySelector(".input-box"),
  search = document.querySelector(".search"),
  closeIcon = document.querySelector(".close-icon");

search.addEventListener("click", () => inputBox.classList.add("active"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("active"));