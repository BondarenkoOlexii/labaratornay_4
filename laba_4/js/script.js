// Слайдер "У центрі уваги"
const slides = [
  { img: "img/Dead_snow_2_poster.jpg", title: "Нацисти в снегу · 2013" },
  { img: "img/Dracula_1992_poster.jpg",  title: "Дракула · 1992" },
  { img: "img/Jeepers_Creepers.jpg",   title: "Джимперс Крипсер · 1991" }
];
let current = 0;
const heroImg = document.getElementById("heroImg");
const heroTitle = document.getElementById("heroTitle");
const dotsBox = document.getElementById("dots");

slides.forEach((_, i) => {
  const d = document.createElement("span");
  d.className = "dot";
  d.addEventListener("click", () => show(i));
  dotsBox.appendChild(d);
});

function show(i) {
  current = (i + slides.length) % slides.length;
  heroImg.style.opacity = 0;
  setTimeout(() => {
    heroImg.src = slides[current].img;
    heroImg.alt = slides[current].title;
    heroTitle.textContent = slides[current].title;
    heroImg.style.opacity = 1;
  }, 200);
  document.querySelectorAll(".dot").forEach((d, k) => d.classList.toggle("active", k === current));
}
document.getElementById("prev").addEventListener("click", () => show(current - 1));
document.getElementById("next").addEventListener("click", () => show(current + 1));
setInterval(() => show(current + 1), 5000);
show(0);

// Мобільне меню
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

// Випадаюче меню по кліку (для телефонів)
document.getElementById("dropToggle").addEventListener("click", (e) => {
  if (window.innerWidth <= 760) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle("open");
  }
});
