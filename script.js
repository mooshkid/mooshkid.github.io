// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const backdrop = document.querySelector(".nav_backdrop");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    backdrop.classList.toggle("active");
}

window.addEventListener('mouseup', function(event){
	if (event.target != navMenu && event.target.parentNode != navMenu && event.target != hamburger && event.target != document.querySelector(".hamburger-inner") && event.target != document.querySelector(".hamburger-box")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        backdrop.classList.remove("active");
    }
});

// DISABLE CSS TRANSITION ON MEDIA QUERY 
stopResponsiveTransition();
function stopResponsiveTransition() {
    const classes = document.body.classList;
    let timer = null;
    window.addEventListener('resize', function () {
    if (timer){
        clearTimeout(timer);
        timer = null;
    }else {
        classes.add('stop-transition');
    }
    timer = setTimeout(() => {
        classes.remove('stop-transition');
        timer = null;
    }, 100);
    });
}

// GSAP BUBBLE ANIMATIONS
gsap.registerPlugin(MotionPathPlugin);
let bubble = document.querySelectorAll(".bubbles");
let headBubbles = document.querySelectorAll(".headBubbles");

const tl1 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
const tl3 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
const tl4 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

tl1
	.to(".bubbleGroup1", 8, {
		motionPath: {
			path: [
				{ x: 0, y: 500 },
				{ x: 50, y: -70 },
				{ x: -50, y: -140 },
				{ x: 0, y: -220 }
			],
			type: "cubic",
			curviness: 1,
			autoRotate: true
		},
		scale: 2
	})
	.to(".bubble1", { opacity: 0 })
	.to(".burst1", { opacity: 1 }, "-=.5");

tl2
	.to(".bubbleGroup2", 6, {
		motionPath: {
			path: [
				{ x: 0, y: 500 },
				{ x: -50, y: -20 },
				{ x: -50, y: -140 },
				{ x: 0, y: -250 }
			],
			type: "cubic",
			curviness: 1,
			autoRotate: true
		},
		scale: 1.2
	})
	.to(".bubble2", { opacity: 0 })
	.to(".burst2", { opacity: 1 }, "-=.5");

tl3
	.to(".bubbleGroup3", 5, {
		motionPath: {
			path: [
				{ x: 0, y: 500 },
				{ x: 50, y: -20 },
				{ x: 0, y: -100 },
				{ x: 0, y: -100 }
			],
			type: "cubic",
			curviness: 1,
			autoRotate: true
		}
	})
	.to(".bubble3", { opacity: 0 })
	.to(".burst3", { opacity: 1 }, "-=.5");

tl4
	.to(".bubbleGroup4", 10, {
		motionPath: {
			path: [
				{ x: 0, y: 500 },
				{ x: 50, y: -50 },
				{ x: 0, y: -100 },
				{ x: 20, y: -170 }
			],
			type: "cubic",
			curviness: 1,
			autoRotate: true
		}
	})
	.to(".bubble4", { opacity: 0 })
	.to(".burst4", { opacity: 1 }, "-=.5");

TweenMax.to(headBubbles, 2, {
	opacity: 0.3,
	stagger: { amount: 1 },
	ease: "back.out(4)",
	yoyo: true,
	repeat: -1
});

TweenMax.to("#water", {
	fill: "#64eafc",
	repeat: -1,
	yoyo: true
});
