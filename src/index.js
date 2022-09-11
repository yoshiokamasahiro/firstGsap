import gsap from "gsap";
import "./styles.css";

gsap.to(".box01", {
  duration: 2,
  x: 500,
  rotate: 360,
  repeat: -1
});
