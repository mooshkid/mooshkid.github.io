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