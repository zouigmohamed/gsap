import gsap from "gsap";

// Select the main floating action button (FAB)
const fab = document.querySelector(".fab");

// Select all child action buttons
const children = document.querySelectorAll(".fab-child");

// Set how far the children spread out from the center
const radius = 100;

// Track whether menu is expanded or collapsed
let expanded = false;

fab.addEventListener("click", () => {
  expanded = !expanded;

  // Toggle button symbol (＋ / ×)
  fab.textContent = expanded ? "×" : "＋";

  if (expanded) {
    // Define arc of expansion: spread over 90 degrees
    const arcSpan = Math.PI / 0.9; // radians
    const startAngle = Math.PI / 2 + arcSpan / 2; // start at top-center

    children.forEach((child, i) => {
      // Distribute each child evenly across the arc
      const angle = startAngle - i * (arcSpan / (children.length - 1));

      // Polar to Cartesian conversion
      const x = Math.cos(angle) * radius;
      const y = -Math.sin(angle) * radius;

      // 🔜 Animation will go here
      gsap.to(child, {
        x: x,
        y: y,
        opacity: 1, // Fade in
        duration: 0.5,
        rotate: 360,
        ease: "expo.out(1,0.3)",
        scale: 1, // Scale to normal size
        delay: i * 0.1, // Stagger the animation
        pointerEvents: "auto", // Enable pointer events when expanded
      });
    });
  } else {
    children.forEach((child , i) => {
      // 🔜 Collapse animation will go here
      gsap.to(child, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "expo.in(1,0.3)",
        opacity: 0, // Fade out
        scale: 0.5, // Scale down
        rotate: 0,
        pointerEvents: "none", // Disable pointer events while collapsed
        delay: -i * 0.1,
      });
    });
  }
});
