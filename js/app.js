"use strict";

//COOKIES
const cookies = document.querySelector(".cookies");
//ACEPTAR COOKIES
const aceptar = document.querySelector(".accept");
//MANAGE COOKIES
const manage = document.querySelector(".manage");

//X COOKIES
const x = document.querySelector(".x");
//CERRAR COOKIES
x.addEventListener("click", (e) => {
  e.preventDefault();
  cookies.style = `display:none`;
});

aceptar.addEventListener("click", () => {
  cookies.style = `display:none`;
});

manage.addEventListener("click", () => {
  cookies.style = `display:none`;
});
