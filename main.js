/// Page Home
const menuMain = document.querySelector(".header .header__navbar");
const btnClose = document.querySelector(".close-btn");
const btnOpen = document.querySelector(".menu-btn");
btnOpen.addEventListener("click", () => {
  menuMain.classList.add("active");
});
btnClose.addEventListener("click", () => {
  menuMain.classList.remove("active");
});
const menuProduct = document.querySelectorAll(".product-menu");
const productContent = document.querySelectorAll(".product-container");

function handleChangeTab(e) {
  const tabId = e.target.dataset.menu;
  menuProduct.forEach((el) => el.classList.remove("active"));
  e.target.classList.add("active");
  productContent.forEach((el) => {
    el.classList.remove("active");
    if (el.getAttribute("data-menu") === tabId) {
      el.classList.add("active");
    }
  });
}
menuProduct.forEach((el) => el.addEventListener("click", handleChangeTab));
//Page user
const menuUser = document.querySelectorAll(".user-menu");
const containerUser = document.querySelectorAll(".user-container");
menuUser.forEach((el) =>
  el.addEventListener("click", (e) => {
    const tabId = e.target.dataset.menu;
    menuUser.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    containerUser.forEach((el) => {
      el.classList.remove("active");
      if (el.getAttribute("data-menu") === tabId) {
        el.classList.add("active");
      }
    });
  })
);
var swiper = new Swiper(".banner__top--1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product__hot--slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
var swiper = new Swiper(".publisher__list", {
  slidesPerView: 8,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
///Page Detail
const imageMain = document.querySelector(".image-main");
const imageGroup = document.querySelectorAll(".image-small");

imageGroup[0].addEventListener("click", () => {
  imageMain.src = imageGroup[0].src;
});
imageGroup[1].addEventListener("click", () => {
  imageMain.src = imageGroup[1].src;
});
imageGroup[2].addEventListener("click", () => {
  imageMain.src = imageGroup[2].src;
});
imageGroup[3].addEventListener("click", () => {
  imageMain.src = imageGroup[3].src;
});
