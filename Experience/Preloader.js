import { EventEmitter } from "events";
import Experience from "./Experience.js";
import GSAP from "gsap";
import convert from "./Utils/covertDivsToSpans.js"

export default class Preloader extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.room = this.resources.items.room;

        this.world.on("worldready", () => {
            this.setAssets();
            this.playIntro();
        });
    }
    setAssets() {
        convert(document.querySelector(".intro-text"));
        convert(document.querySelector(".intro-text2"));
        this.room = this.experience.world.room.actualRoom;
        this.roomChildren = this.experience.world.room.roomChildren;
    }
    firstIntro() {
        return new Promise((resolve) => {
            this.tl2 = new GSAP.timeline()
            this.tl2.to(".preloader", {
                opacity: 0,
                onComplete: () => {
                    document.querySelector(".preloader").classList.add("hidden");
                }
            })

            this.tl2.to(this.roomChildren.toys.scale, {
                ease: "back.out(1)", duration: .01,
            }, "same")
            this.tl2.to(".intro-text .animatedis", {
                yPercent: -100,
                stagger: 0.02,
                ease: "back.out(1.7)",
            }, "same")
            this.tl2.to(".intro-text2 .animatedis", {
                yPercent: -100,
                stagger: 0.05,
                ease: "back.out(1.7)",
            }, "same")
                .to(
                    ".main-nav",
                    {
                        opacity: 0,
                    },
                    "same"
                )
                .to(
                    ".hero-main-title",
                    {
                        x: "-100%",
                    },
                    "same"
                )
                .to(
                    ".hero-main-description",
                    {
                        x: "-100%",
                    },
                    "same"
                )
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 1,
                        onComplete: resolve,
                    },
                    "same"
                )
        });
    }

    secondIntro() {
        return new Promise((resolve) => {
            this.tl = new GSAP.timeline()
            this.tl.to(".intro-text .animatedis", {
                yPercent: 100,
                ease: "back.in(1.7)",
            })
            this.tl.to(".intro-text2 .animatedis", {
                yPercent: 100,
                ease: "back.in(1.7)",
            }, ">-0.5")
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 0,
                    },
                    "same"
                )
                .to(
                    ".toggle-bar",
                    {
                        opacity: 1,
                    },
                    "same"
                )
                .to(
                    ".main-nav",
                    {
                        opacity: 1,
                    },
                    "same"
                );

            this.tl.to(this.roomChildren.wall.scale, {
                x: 1, y: 1, z: 1,
                ease: "back.out(2)",
                duration: .5,
            }, "room", ">-0.5")
                .to(this.roomChildren.floor.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "room", ">-0.5")
                .to(this.roomChildren.bed.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "bed", ">-0.4")
                .to(this.roomChildren.toys.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.2")
                .to(this.roomChildren.pcdesk.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.45")
                .to(this.roomChildren.chair.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.2")
                .to(this.roomChildren.coaster.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.comp.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.ipad.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.monitor.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.monitor2.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.proctonroller
                    .scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.switch.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "comp", ">-0.3")
                .to(this.roomChildren.easel.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.35")
                .to(this.roomChildren.paints.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.35")
                .to(this.roomChildren.flowers.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "shelf", ">-0.3")
                .to(this.roomChildren.shelf.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, "shelf", ">-0.7")
                .to(this.roomChildren.snakeplant.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.8")
                .to(this.roomChildren.paintings.scale, {
                    x: 1, y: 1, z: 1,
                    ease: "back.out(2)",
                    duration: .5,
                }, ">-0.5")
                .to(".hero-main-title", {
                    x: '0%',
                    ease: "power1.out",
                    duration: .5,
                }, "last", ">-0.3")
                .to(".hero-main-description", {
                    x: '0%',
                    ease: "power1.out",
                    duration: .5,
                    onComplete: resolve
                }, "last", ">-0.3");
        });
    }

    onScroll(e) {
        if (e.deltaY > 0) {
            window.removeEventListener("wheel", this.scrollOnceEvent);
            this.playIntro2();
        }
    }
    
    onTouch(e) {
        this.initalY = e.touches[0].clientY;
    }

    onTouchMove(e) {
        let currentY = e.touches[0].clientY;
        let difference = this.initalY - currentY;
        if (difference > 0) {
            console.log("swipped up");
            this.removeEventListeners();
            this.playIntro2();
        }
        this.intialY = null;
    }

    removeEventListeners() {
        window.removeEventListener("wheel", this.scrollOnceEvent);
        window.removeEventListener("touchstart", this.touchStart);
        window.removeEventListener("touchmove", this.touchMove);
    }


    async playIntro() {
        await this.firstIntro();
        this.scrollOnceEvent = this.onScroll.bind(this)
        this.touchStart = this.onTouch.bind(this);
        this.touchMove = this.onTouchMove.bind(this);
        window.addEventListener("wheel", this.scrollOnceEvent);
        window.addEventListener("touchstart", this.touchStart);
        window.addEventListener("touchmove", this.touchMove);
        this.camera.controls.enabled = false;
    }
    async playIntro2() {
        await this.secondIntro();
        this.camera.controls.enabled = true;

    }
}