$(document).ready(function () {
  // mobile menu toggle
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // on scroll / load
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // scroll top button
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).outerHeight();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $('.navbar').find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    const target = $(this).attr("href");

    if (target && target.startsWith("#") && $(target).length) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        500,
        "linear"
      );
    }
  });
});

// page visibility title
document.addEventListener("visibilitychange", function () {
  document.title = "Portfolio | Kalyan Kumar Shrestha";
  $("#favicon").attr("href", "assets/images/favicon.png");
});

// typed effect
var typed = new Typed(".typing-text", {
  strings: [
    "autonomous systems",
    "robotics",
    "embedded intelligence",
    "ROS ecosystem",
    "control systems",
    "computer vision and SLAM",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});

// optional: disable developer shortcuts
document.onkeydown = function (e) {
  if (e.keyCode === 123) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) return false;
  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false;
};

// scroll reveal
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* HOME */
srtop.reveal(".home .content h2", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });
srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 200 });
srtop.reveal(".home .github", { interval: 300 });
srtop.reveal(".home .gmail", { interval: 400 });
srtop.reveal(".home .outlook", { interval: 500 });
srtop.reveal(".home .phone", { interval: 600 });
srtop.reveal(".home .discord", { interval: 700 });

/* ABOUT */
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content p", { delay: 250 });
srtop.reveal(".about .content .box-container", { delay: 300 });
srtop.reveal(".about .content .resumebtn", { delay: 350 });
srtop.reveal(".about .image", { delay: 250 });

/* SKILLS */
srtop.reveal(".skills .container", { delay: 200 });
srtop.reveal(".skills .container .bar", { interval: 100 });

/* EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* PROJECTS - new section */
srtop.reveal(".projectsFX__top", { delay: 200 });
srtop.reveal(".projectsFX__featured", { delay: 250 });
srtop.reveal(".projectsFX__grid .fxCard", { interval: 150 });

/* EXPERIENCE - new section */
srtop.reveal(".expPoster .heading", { delay: 200 });
srtop.reveal(".expPosterGrid .expPosterCard", { interval: 180 });

/* FOOTER */
srtop.reveal(".footer .box", { interval: 150 });