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
    top: -2100,
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
        end: "-=300",
        scrub: true,
    }
})

gsap.to(".about-wrapper", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#feature-section",
        end: "-=400",
        scrub: true,
    }
})

gsap.from('#feature-title', {
    scrollTrigger: {
        trigger: "#feature-title",
        start: "center center",
        markers: true,
        end: "+=1000",
        toggleActions: "restart restart restart none", //events : onEnter, onLeave, onEnterBack, onLeaveBacks
        scrub: true,
        pin: true //permet de fixer le poisson au centre, il ne descend pas avec le scroll
    }, scale: 3
});





/* smooth scroll on mouse wheel 
code from https://stackoverflow.com/questions/47011055/smooth-vertical-scrolling-on-mouse-wheel-in-vanilla-javascript */

function init() {
    new SmoothScroll(document, 100, 12)
}

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement
            || document.documentElement
            || document.body.parentNode
            || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
        && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}