$(document).ready(function() {

    // Sticky Navbar
    window.onscroll = function() {stickyFunction()};

    var navbar = document.getElementById("list");
    var sticky = navbar.offsetTop;

    function stickyFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        }
        else {
            navbar.classList.remove("sticky");
        }
    };

    // navTracker
    let mainNavLinks = document.querySelectorAll(".page-link");

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY - 50;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop + 500 &&
                section.offsetTop + section.offsetHeight > fromTop + 500
            ) {
                link.classList.add("active");
            }
            else {
                link.classList.remove("active");
            }
        });
    });

    // Smooth Anchor
    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
    $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
    });

    // Custom Scroll Bar
    let progress = document.getElementById("progressbar");
    let totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = function() {
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
    }

    // Home
    $("h1").slideDown(1700);
    setTimeout(function() {
        $("h2").slideDown(1700);
    },1000);

    $("li").delay(3000).fadeIn(1500);

    
    

});
