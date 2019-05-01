var burger = document.getElementById("burger");
var list = document.querySelector(".list");

burger.addEventListener("click", function () {
    list.classList.toggle("show");
});