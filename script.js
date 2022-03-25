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

// BUBBLE ANIMATIONS
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


// SLARK MINIONS????
// https://greensock.com/forums/topic/14818-infinitely-repeating-svg-clouds/
var tl = null;
var vw = window.innerWidth;
var vh = window.innerHeight;

var firstRun = -4;

$(".minion").each(function(i, cloud) {
  animateCloud(cloud);
});

firstRun = 1

$(window).resize(function() {
  vw = window.innerWidth;
  vh = window.innerHeight;
});

function animateCloud(cloud) {
  
  var height = cloud.offsetHeight * 0.5;
  
  TweenLite.set(cloud, {
    scale: random(0.5, 5),
    xPercent: -100,
    yPercent: -50,
    x: vw,
    y: random(height, vh - height)
  });
  
  TweenLite.to(cloud, random(1, 3), {
    x: -vw,
    xPercent: 0,
    delay: random(2) * firstRun,
    onComplete: animateCloud,
    onCompleteParams: [cloud]
  });
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

// SKILLS TAB
function clickTab(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// FOOTER ANIMATIONS
// window load event makes sure image is // loaded before running animation
$(window).on("load", function() {

    var tl = new TimelineMax({repeat:-1});
    tl.to(".tidehunter", 20, {
        backgroundPosition: "1920px bottom",
        autoRound:false,
        ease: Linear.easeNone
    });

    var tl2 = new TimelineMax({repeat:-1});
    tl2.to(".tentacles", 200, {
        backgroundPosition: "5000px bottom",
        autoRound:false,
        ease: Linear.easeNone
    });
    return
});
