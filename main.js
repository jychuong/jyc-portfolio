import './style.css'
import Experience from "./Experience/Experience.js";
import gsap from 'gsap';

const experience = new Experience(document.querySelector(".experience-canvas"));
gsap.from('.toggle-bar', { duration: 1.8, x: '150%', ease: 'power1.out', delay: .5, duration: .8 });
console.log("Portfolio inspired by https://bokoko33.me/ ");

