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

// gsap.to(".rect", { x: 200, duration: 2 });

gsap.to(".__first", {
  //x: 200,
  duration: 4,
  backgroundColor: "#ccc",
  yoyo: true, //反転繰り返し
  repeatDelay: 1,
  repeat: -1,
  ease: "power2.out"
});
gsap.to(".__second", {
  x: 100,
  duration: 4,
  backgroundColor: "red",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1
});
gsap.to(".__third", {
  x: 200,
  duration: 4,
  backgroundColor: "#ccc",
  yoyo: true,
  repeat: -1,
  repeatDelay: 2
});
