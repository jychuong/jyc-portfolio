import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;

        this.room.children.forEach(child => {
            if (child.type === "RectAreaLight") {
                this.rectLight = child;
            }
        });
        this.room.children.forEach(child => {
            if (child.type === "PointLight") {
                this.pointLight = child;
            }
        });

        this.room.children.forEach((child) => {
            if (child.type === "RectAreaLight") {
                this.rectLight = child;
            }
        });


        GSAP.registerPlugin(ScrollTrigger);

        this.animations();
        this.setUpEvents();
    }


    enableCloseBtn() {
        document.getElementById('close-btn').style.display = 'block';
    }

    disableCloseBtn() {
        document.getElementById('close-btn').style.display = 'none';
    }


    setUpEvents() {
        window.addEventListener('resize', () => this.resize());
    }


    animations() {
        ScrollTrigger.matchMedia({
            //desktop

            "(min-width:1px)": () => {
                this.room.scale.set(1.3, 1.3, 1.3)
                this.room.position.set(-0.5, -0.8, 0)
                this.rectLight.width = 2
                this.rectLight.height = 2
                this.pointLight.intensity = 0.8

                document.getElementById('3d-proj').addEventListener('click', () => {
                    this.camera.controls.enabled = false;
                    document.getElementById('3d').style.display = 'block';
                    this.tl = new GSAP.timeline({
                        invalidateOnRefresh: false,
                    }).to(
                        this.room.scale, {
                        x: 4,
                        z: 4,
                        y: 4,
                        duration: 1.5
                    },
                        "same")
                        .to(this.room.position, {
                            x: -4.8,
                            y: 1,
                            z: 2,
                            duration: 1.5
                        }, "same")
                        .to(this.camera.orthographicCamera.position, {
                            z: -Math.PI / 6,
                            y: Math.PI / 6,
                            x: -Math.PI / 6,

                            duration: 1.5
                        }, "same")
                        .to(this.rectLight, {
                            width: 6,
                            height: 6,

                            duration: 1.5
                        }, "same")
                        .to(".section", {
                            x: "0vw",
                            duration: 1.5
                        }, "same")
                        .to(".main-nav", {
                            y: "-50vh",
                            duration: 1.5
                        }, "same")
                        .to(".hero", {
                            x: "-100vw",
                            duration: 1.5
                        }, "same");

                    GSAP.delayedCall(1.5, this.enableCloseBtn);

                });
                //////////////////////// digital illustartions /////////////////////////////////
                document.getElementById('digi').addEventListener('click', () => {
                    this.camera.controls.enabled = false;
                    document.getElementById('di').style.display = 'block';
                    this.tl2 = new GSAP.timeline();
                    this.tl2.to(
                        this.room.scale, {
                        x: 5,
                        z: 5,
                        y: 5,

                        duration: 1.5
                    },
                        "same")
                    this.tl2.to(this.room.position, {
                        x: 0,
                        y: 1,
                        z: 5,

                        duration: 1.5
                    }, "same")
                    this.tl2.to(this.camera.orthographicCamera.position, {
                        z: -Math.PI / 6,
                        y: 3,
                        x: 1,

                        duration: 1.5
                    }, "same")
                    this.tl2.to(this.rectLight, {
                        width: 7,
                        height: 7,

                        duration: 1.5
                    }, "same")
                    this.tl2.to(".section", {
                        x: "0vw",

                        duration: 1.5
                    }, "same")
                    .to(".main-nav", {
                        y: "-50vh",
                        duration: 1.5
                    }, "same")
                    .to(".hero", {
                        x: "-100vw",
                        duration: 1.5
                    }, "same");
                    GSAP.delayedCall(1.5, this.enableCloseBtn);
                });

                ///////////////////////////////////////////////about
                document.getElementById('about-info').addEventListener('click', () => {
                    this.camera.controls.enabled = false;
                    document.getElementById('about').style.display = 'block';
                    this.tl3 = new GSAP.timeline();
                    this.tl3.to(
                        this.room.scale, {
                        x: 1,
                        z: 1,
                        y: 1,
                        duration: 1.5
                    },
                        "same")
                    this.tl3.to(this.room.position, {
                        x: 1.2,
                        y: 0,
                        z: 0,

                        duration: 1.5
                    }, "same")
                    this.tl3.to(this.camera.orthographicCamera.position, {
                        z: -Math.PI / 6,
                        y: 3,
                        x: 1,

                        duration: 1.5
                    }, "same")
                    this.tl3.to(this.rectLight, {
                        width: 2,
                        height: 2,

                        duration: 1.5
                    }, "same")
                    this.tl3.to(this.pointLight.position, {
                        x: -0.4,
                        y: .12,
                        z: 0.06568,
                        duration: 1.5
                    }, "same");
                    this.tl3.to(this.pointLight, {
                        intensity: .8,
                        duration: 1.5
                    }, "same");
                    this.tl3.to(".section", {
                        x: "0vw",
                        duration: 1.5
                    }, "same")
                    .to(".main-nav", {
                        y: "-50vh",
                        duration: 1.5
                    }, "same")
                    .to(".hero", {
                        x: "-100vw",
                        duration: 1.5
                    }, "same");
                    GSAP.delayedCall(1.5, this.enableCloseBtn);
                });

                //////////////////////////////////// other////////////////////////////////
                document.getElementById('misc').addEventListener('click', () => {
                    this.camera.controls.enabled = false;
                    document.getElementById('other').style.display = 'block';
                    this.tl5 = new GSAP.timeline();
                    this.tl5.to(
                        this.room.scale, {
                        x: 4,
                        z: 4,
                        y: 4,
                        duration: 1.5
                    },
                        "same")

                    this.tl5.to(this.room.position, {
                        x: 4.4,
                        y: 1,
                        z: 5,
                        duration: 1.5
                    }, "same")
                    this.tl5.to(this.camera.orthographicCamera.position, {
                        x: 1,
                        y: 3,
                        z: -Math.PI / 6,
                        duration: 1.5
                    }, "same")
                    this.tl5.to(this.rectLight, {
                        width: 7,
                        height: 7,

                        duration: 1.5
                    }, "same")
                    this.tl5.to(this.pointLight.position, {
                        x: -0.4,
                        y: 0.3,
                        z: .1,
                        duration: 1.5
                    }, "same");
                    this.tl5.to(this.pointLight, {
                        intensity: 10,
                        duration: 1.5
                    }, "same");
                    this.tl5.to(".section", {
                        x: "0vw",

                        duration: 1.5
                    }, "same")
                    .to(".main-nav", {
                        y: "-50vh",
                        duration: 1.5
                    }, "same")
                    .to(".hero", {
                        x: "-100vw",
                        duration: 1.5
                    }, "same");
       
                    GSAP.delayedCall(1.5, this.enableCloseBtn);
                });
                /////////////reset ///////////////////
                document.getElementById('close-btn').addEventListener('click', () => {
                    // this.resetCamera();
                    this.disableCloseBtn();
                    this.camera.controls.enabled = true;
                    this.tl4 = new GSAP.timeline();

                    this.tl4.to(this.camera.orthographicCamera.position, {
                        x: -0.05155554232803819,
                        y: 3.1443428682390167,
                        z: 5.230721743030281,
                        duration: 1,
                    }, "same");

                    this.tl4.to(this.camera.orthographicCamera.rotation, {
                        x: -0.5707963267948967,
                        y: 0,
                        z: 0,
                        duration: 1,
                    }, "same");
                    this.tl4.to(this.room.scale, {
                        x: 1.3,
                        y: 1.3,
                        z: 1.3,
                        duration: 1,
                    }, "same");
                    this.tl4.to(this.room.position, {
                        x: -0.5,
                        y: 0,
                        z: 1.3,
                        duration: 1,
                    }, "same");
                    this.tl4.to(this.rectLight, {
                        width: 2,
                        height: 2,
                        duration: 1
                    }, "same");
                    this.tl4.to(this.pointLight.position, {
                        x: -0.5,
                        y: .1,
                        z: 0.05568,
                        duration: 1
                    }, "same");
                    this.tl4.to(this.pointLight, {
                        intensity: .8,
                        duration: 1
                    }, "same");
                    this.tl4.to(".section", {
                        x: "-100vw",
                        duration: 1
                    }, "same")
                    .to(".main-nav", {
                        y: "0vh",
                        duration: .8
                    }, "same")
                    .to(".hero", {
                        x: "0vw",
                        duration: 1
                    }, "same");

                });


            },
        });
    }

    resize() { }
    update() {
        window.requestAnimationFrame(() => this.update());
    }
}
