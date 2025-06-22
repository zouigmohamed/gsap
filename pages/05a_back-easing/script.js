import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();
  const tabWidth = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;
  gsap.to(indicator, {
    duration: 0.3,
    x: offset,
    width: tabWidth ,
    ease: "back.out(0.7)",
  });
}
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((t) => t.classList.remove("active"));
    e.currentTarget.classList.add("active");
    updateIndicator(tab);
  });
});
updateIndicator(document.querySelector(".tab.active"));