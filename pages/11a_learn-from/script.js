import gsap from 'gsap';
const repeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    y: 100,
    delay: 0.2,
    opacity: 0,
    scale: 0.5,
    duration: 2,
    ease: 'power4.out',
    stagger:0.2
})
repeat.addEventListener('click', () => {
    animation.restart();
    gsap.to(".repeat img", {
        rotate: 360,
        duration: 0.5,
        scale: 1.2,
        ease: 'power1.inOut',
     
    })
    gsap.set(".repeat img", {
      rotate: 0,
      scale: 1,
    });
});
