let intro = document.querySelector(".intro");
let letterSpan = document.querySelectorAll(".letter");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    letterSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 50);
    });

    setTimeout(() => {
      letterSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 25);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2500);
    setTimeout(() => {
      document.querySelector("#header").classList.add("active");
      document.querySelector(".mobile-nav-toggle").classList.add("active");
      document.querySelector("#main").classList.add("active");
    }, 3300);
  });
});
