import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeat = document.querySelector(".repeat");
const animation = gsap.to(".box", {
  duration: 5,
  opacity: 1,
  rotation: 360,
  scale: 1.25,
  borderRadius: "50%",
});
play.addEventListener("click", () => {
    animation.play();
});
pause.addEventListener("click", () => {
    animation.pause();

});
resume.addEventListener("click", () => {
    animation.resume();
});
reverse.addEventListener("click", () => {
    animation.reverse();
});
restart.addEventListener("click", () => {
    animation.restart();
});
kill.addEventListener("click", () => {
    animation.kill();
});
yoyo.addEventListener("click", () => {
    animation.yoyo(true);
});
repeat.addEventListener("click", () => {
    animation.repeat(2);
});

gsap.from(".toast", {
  x: -300,
  duration: 1.2,
  ease: "power2.out",
});
gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
});
gsap.to(".btn", {
  y: -20,
  duration: 0.9,
  ease: "power4.out",
});