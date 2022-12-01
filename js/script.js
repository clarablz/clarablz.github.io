/* Javascript */

/* GSAP Greensock */
gsap.registerPlugin(ScrollTrigger);
gsap.from(".name-title", {
    opacity: 0,
    top: 20,
    duration: 1.5,
    stagger: 0.5
});

gsap.from("#student-title", {
    opacity: 0,
    left: 800,
    duration: 1.5,
})

gsap.from("#freelance-title", {
    opacity: 0,
    left: 400,
    duration: 1.5,
})

// gsap.from("#about-title", {
//     opacity: 0,
//     top: 100,
//     duration: 0.4,
//     scrollTrigger: {
//         trigger: '#about-title',
//         start: 'center 80%',
//     }
// })

gsap.to(".about-img", {
    top: -2400,
    scrollTrigger: {
        trigger: "#about-section",
        start: 'center 50%',
        end: "+=2000",
        scrub: true,
        pin: true,
        markers: true,
        toggleActions: "restart restart restart none",
    }
})

gsap.to("#arrow-down", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-section",
        end: "-=400",
        scrub: true,
    }
})