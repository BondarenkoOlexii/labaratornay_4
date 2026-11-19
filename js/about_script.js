// ===== Мобільне меню =====
const burger = document.getElementById("burger");
if (burger) {
  burger.addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("open");
  });
}

// Випадаюче меню по кліку (на телефонах)
const dropToggle = document.getElementById("dropToggle");
if (dropToggle) {
  dropToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 760) {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle("open");
    }
  });
}

// ===== Слайдер (є тільки на головній) =====
const hero = document.getElementById("hero");
if (hero) {
  const slides = [
    { full: true, img: "img/banner.png", title: "Світ кіно — ціни світові, якість українська" },
    { img: "img/Dead_snow_2_poster.jpg", title: "Нацисти в снегу · 2013 · 18+" },
    { img: "img/Dracula_1992_poster.jpg", title: "Дракула · 1992 · 18+" },
    { img: "img/Jeepers_Creepers.jpg", title: "Джимперс Крипсер · 1991 · 18+" }
  ];
  let current = 0;
  const heroBg = document.getElementById("heroBg");
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
    const s = slides[current];
    hero.classList.add("fade");
    setTimeout(() => {
      heroBg.src = s.img;
      heroBg.alt = s.full ? s.title : "";
      if (!s.full) { heroImg.src = s.img; heroImg.alt = s.title; }
      heroTitle.textContent = s.title;
      hero.classList.toggle("full", !!s.full);
      hero.classList.remove("fade");
    }, 250);
    document.querySelectorAll(".dot").forEach((d, k) => d.classList.toggle("active", k === current));
  }

  document.getElementById("prev").addEventListener("click", () => show(current - 1));
  document.getElementById("next").addEventListener("click", () => show(current + 1));
  setInterval(() => show(current + 1), 6000);
  show(0);
}
