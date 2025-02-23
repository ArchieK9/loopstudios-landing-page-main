"use strict";

let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let ham = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
    let isNavOpen = nav.style.display === "flex";

    if (isNavOpen) {
        nav.style.display = "none"; // Hide nav
        ham.style.display = "block"; // Show hamburger
        close.style.display = "none"; // Hide close icon
    } else {
        nav.style.display = "flex"; // Show nav
        ham.style.display = "none"; // Hide hamburger
        close.style.display = "block"; // Show close icon
    }
});
