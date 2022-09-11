import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles.css";

const box01 = document.querySelectorAll(".box01");
gsap.to(box01, {
  duration: 2,
  x: 500,
  rotate: 360,
  repeat: -1
});

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".js-animation-fadein",
  {
    y: -50,
    autoAlpha: 0
  },
  {
    y: 0,
    autoAlpha: 1,
    delay: 1,
    duration: 2,
    //repeat: -1, //-1はリピート
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".js-animation-fadein",
      start: "top center"
    }
  }
);
