console.log("JS 已載入");

// loading screen
window.onload = function () {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("content").style.display = "block";
};

// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  normalizeScroll: true
});

// Horizontal scroll
if (document.getElementById("portfolio")) {
  const sections = gsap.utils.toArray(".horiz-gallery-wrapper");

  sections.forEach((sec) => {
    const strip = sec.querySelector(".horiz-gallery-strip");

    let scrollLength = strip.scrollWidth - window.innerWidth;

    gsap.to(strip, {
      x: () => -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: sec,
        pin: true,
        scrub: true,
        end: () => `+=${strip.scrollWidth}`
      }
    });
  });
}


  window.onload = function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  };
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


