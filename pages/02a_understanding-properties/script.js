import gsap from "gsap";

gsap.to(".box", {
  duration: 2,
  x: 300,
  y: 200,
  opacity: 0.5,
  rotation: 320,
  scale: 1.5,
  backgroundColor: "#ff0000",
  ease: "power1.inOut",
  onComplete: () => {
    console.log("Animation completed!");
  },
});


