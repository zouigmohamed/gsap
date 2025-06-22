import gsap from "gsap";

const btn = document.querySelector(".scroll-to-top");
let isFloating = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btn.classList.add("show");
    if (!isFloating) {
      gsap.to(btn, {
        y: -10,
        duration: 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      isFloating = true;
    }
  } else {
    btn.classList.remove("show");
  }
});
btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    scale: 1.2,
    duration: 0.3,
    ease: "sine.inOut",
  });
});
btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    scale: 1,
    duration: 0.3,
    ease: "sine.inOut",
  });
});
btn.addEventListener("click", () => {
 window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
 });
});