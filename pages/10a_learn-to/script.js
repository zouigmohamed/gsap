import gsap from "gsap";


const showToastLoop = () =>{
gsap.to('.toast', {
    y:-120,
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power4.out",
    onComplete: ()=>{
        gsap.to('.toast', {
            delay: 2.5,
            y: 0,
            opacity: 0,
            scale: 0.65,
            duration: 0.7,
            onComplete: showToastLoop
        });
    }
})
}
showToastLoop();