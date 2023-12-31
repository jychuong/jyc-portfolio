import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";


export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.obj = {
            colorObj: { r: 0, g: 0, b: 0 },
            intensity: 3,
        }

        this.setSunlight();

    }

    setGUI() {
        this.gui.addColor(this.obj, "colorObj").onChange(() => {
            this.sunLight.color.copy(this.obj.colorObj);
            this.ambientlight.color.copy(this.obj.colorObj);
            console.log(this.obj.colorObj);
        });
        this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
            this.sunLight.intensity = this.obj.intensity;
            this.sunLight.ambientlight = this.obj.ambientlight;

        })
    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#FFFFFF", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;

        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);

        this.ambientlight = new THREE.AmbientLight("#FFFFFF", .9);
        this.scene.add(this.ambientlight);
    }

    switchTheme(theme) {
        if (theme === "dark") {
            GSAP.to(this.sunLight.color, {
                b
                    :
                    0.28627450980392155,
                g
                    :
                    0.10980392156862745,
                r
                    :
                    0.07058823529411765,
            });

            GSAP.to(this.ambientlight.color, {
                b
                    :
                    0.28627450980392155,
                g
                    :
                    0.10980392156862745,
                r
                    :
                    0.07058823529411765,
            });

            GSAP.to(this.sunLight, {
                intensity: 1.5,
            });

            GSAP.to(this.ambientlight, {
                intensity: 1.5,
            });

        } else {
            GSAP.to(this.sunLight.color, {
                r: 74 / 74,
                g: 93 / 93,
                b: 165 / 165,
            });
            GSAP.to(this.ambientlight.color, {
                r: 74 / 74,
                g: 93 / 93,
                b: 165 / 165,
            });
            GSAP.to(this.sunLight, {
                intensity: 3,
            });

            GSAP.to(this.ambientlight, {
                intensity: 1,
            });

        }
    }
    resize() {

    }
    update() {

    }
}
