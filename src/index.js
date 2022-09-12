import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles.css";
//h2アニメーション 代入
const elmh2 = document.createElement("h2");
const divTarget = document.getElementById("header");
elmh2.textContent = "HELLO　GSAP";
divTarget.appendChild(elmh2);
//console.log(elmh2);
gsap.to(elmh2, {
  x: 0,
  duration: 2,
  color: "red",
  //scale: 1.5,
  repeat: -1,
  repeatDelay: 2,
  //opacity:0.2,
  yoyo: true
});

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
  x: 200,
  duration: 2,
  backgroundColor: "red",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  ease: "expo.out"
});
gsap.to(".__third", {
  x: 300,
  duration: 2,
  backgroundColor: "#ccc",
  yoyo: true,
  repeat: -1,
  repeatDelay: 2,
  rotate: 360,
  ease: "Power4.out"
});

for (let i = 0; i < 100; i++) {
  const tile = document.createElement("div");
  tile.classList.add("container__tile__tiles");
  document.querySelector(".container__tile").appendChild(tile);
}
gsap.from(".container__tile__tiles", {
  y: 100,
  opacity: 0,
  //stagger: 0.2,
  stagger: {
    each: 0.2,
    from: "random" //ランダム
    //from: "center"
  },
  duration: 0.5,
  ease: "Power4.out",
  repeat: -1,
  repeatDelay: 1,
  yoyo: true
});
gsap.to(".container__tile__tiles:nth-child(2n)", {
  backgroundColor: "#ABE588",
  duration: 0.6
});
gsap.to(".container__tile__tiles:nth-child(3n)", {
  backgroundColor: "darkcyan",
  duration: 0.8
});
