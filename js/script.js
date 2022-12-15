//todo links nav
//todo hover social svg
//todo responsive

/* Javascript */

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navbar-items-wrapper li");
let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let menuActive = false;

window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

function navBarFunction() {
    document.querySelector(".navigation-bar").classList.toggle("responsive");
    menuActive = !menuActive;
    mouseCursor.classList.toggle("cursor-light");
}
let i = 0;

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".navigation-bar").classList.toggle("responsive");
        mouseCursor.classList.toggle("cursor-light");
        menuActive = !menuActive;
    })
})


navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        if (!menuActive) {
            mouseCursor.classList.remove('grow');
            link.classList.remove('hovered-link');
        }
    });
    link.addEventListener('mouseenter', () => {
        if (!menuActive) {
            mouseCursor.classList.add('grow');
            link.classList.add('hovered-link');
        }
    });

}
)


h1.forEach(h => {
    h.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow-bigger');
    });
    h.addEventListener('mouseenter', () => {
        mouseCursor.classList.add('grow-bigger');
    });

}
)


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
        trigger: "#feature-section-title",
        end: "-=400",
        scrub: true,
    }
})

gsap.from('#feature-title', {
    scrollTrigger: {
        trigger: "#feature-section-title",
        start: "center center",
        end: "+=1000",
        toggleActions: "restart restart restart none", //events : onEnter, onLeave, onEnterBack, onLeaveBacks
        scrub: true,
        pin: true //permet de fixer le poisson au centre, il ne descend pas avec le scroll
    }, scale: 3
});

// gsap.to('#roomee-mobile-mockup', {
//     scrollTrigger: {
//         trigger: "#feature-project-section",
//         start: "center center",
//         scrub: true,
//         pin: true,
//         toggleActions: "restart restart restart none"
//     },

// })


gsap.from('.logo', {
    scrollTrigger: {
        trigger: "#about-section",
        start: "center 85%",
        toggleActions: "play complete none reverse"
    }, opacity: 0, duration: 1
})

gsap.from('#project-title', {
    scrollTrigger: {
        trigger: "#project-title-wrapper",
        start: "center center",
        end: "+=1000",
        toggleActions: "restart restart restart none", //events : onEnter, onLeave, onEnterBack, onLeaveBacks
        scrub: true,
        pin: true //permet de fixer le poisson au centre, il ne descend pas avec le scroll
    }, scale: 3
});

gsap.from('.mockup-mobile-1-wrapper', {
    scrollTrigger: {
        trigger: "#project-1-section",
        start: "20% 80%",
        toggleActions: "play complete none reverse",
    }, opacity: 0, top: 40, duration: 1
})

gsap.from('#project-1-text-wrapper', {
    scrollTrigger: {
        trigger: "#project-1-section",
        start: "20% 80%",
        toggleActions: "play complete none reverse",
    }, opacity: 0, left: -20, duration: 1
})

gsap.from('.mockup-mobile-2-wrapper', {
    scrollTrigger: {
        trigger: ".mockup-mobile-2-wrapper",
        start: "20% 80%",
        toggleActions: "play complete none reverse",
    }, opacity: 0, top: 40, duration: 1
})

gsap.from('#project-2-text-wrapper', {
    scrollTrigger: {
        trigger: ".mockup-mobile-2-wrapper",
        start: "20% 80%",
        toggleActions: "play complete none reverse",
    }, opacity: 0, left: -20, duration: 1
})

gsap.from('.mockup-mobile-3-wrapper', {
    scrollTrigger: {
        trigger: ".mockup-mobile-3-wrapper",
        start: "20% 80%",
        toggleActions: "play complete none reverse",
    }, opacity: 0, top: 40, duration: 1
})

gsap.from('#project-3-text-wrapper', {
    scrollTrigger: {
        trigger: ".mockup-mobile-3-wrapper",
        start: "20% 80%",
        toggleActions: "play complete none reverse",
    }, opacity: 0, left: -20, duration: 1
})


gsap.to('body', {
    scrollTrigger: {
        trigger: "#contact-section",
        scrub: true,
        toggleActions: "play complete none reverse",
        start: "0% 50%",
        end: "0% 0%",
    }, backgroundColor: "#2F322D", duration: 1
})

gsap.to('.cursor', {
    scrollTrigger: {
        trigger: "#contact-section",
        toggleActions: "play complete none reverse",
        start: "0% 50%",
    },
    border: "1px solid #f5f5f5"
})

contact_wrapper = document.querySelector('#contact-title-wrapper')
button = document.querySelector(".copy-button");
contact_toggle = document.querySelector(".contact-toggle");

contact_toggle.addEventListener("click", function () {
    button.innerHTML = "Copié !";
    button.classList.add('copy-button-clicked');
    navigator.clipboard.writeText("clara.balzano@gmail.com");
    event.preventDefault();
});


contact_toggle.onmouseenter = function () {
    button.classList.add('copy-button-visible');
    button.classList.remove('copy-button-invisible');
    button.classList.remove('copy-button-clicked');
}

contact_toggle.onmouseleave = function () {
    button.classList.add('copy-button-invisible');
    button.classList.remove('copy-button-visible');
    button.classList.remove('copy-button-clicked');
    button.innerHTML = "Copier l'e-mail";
}

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

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}