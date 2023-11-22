import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };

        this.setModel();
        this.onMouseMove();

    }
    
    setModel() {
        this.scene.add(this.actualRoom);
        this.actualRoom.rotation.y = Math.PI / 2; 
        this.actualRoom.scale.set(1.2,1.2,1.2);
        this.actualRoom.position.set(-0.5,0,0);
        
        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            if (child.name === "monitor") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.vid,
                });
            }

  
         
        });


        // pointlight for pc
        const pointLight = new THREE.PointLight(0x838BFF, .8, 100);
        pointLight.position.set(-0.5, .1, 0.05568);
        this.actualRoom.add(pointLight);



        // area light
        const width = 2;
        const height = 2;
        const intensity = .8;
        const rectLight = new THREE.RectAreaLight(
            0xFFCD84, 
            intensity, 
            width, 
            height);
        rectLight.position.set(0.25, 2, 1);
        rectLight.rotation.x = -Math.PI / 2;
        rectLight.rotation.z = Math.PI / 4;
        this.actualRoom.add(rectLight);


    }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.05;
        });
    }



    resize() { }
    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );
        this.actualRoom.rotation.y = this.lerp.current;

    }
}
