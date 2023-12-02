import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createOrthographicCamera();
        this.setOrbitControls();

    }



    createOrthographicCamera() {
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -50,
            50
        );

        this.scene.add(this.orthographicCamera);
        this.orthographicCamera.rotation.x = -Math.PI / 6
        this.orthographicCamera.position.y = 3.5;
        this.orthographicCamera.position.z = 5;
    }


    setOrbitControls() {
        this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;

        this.controls.enablePan = false;

        this.controls.maxPolarAngle = 1.4;
        this.controls.minPolarAngle = 1.1;

        this.controls.minAzimuthAngle = -Math.PI/5;
        this.controls.maxAzimuthAngle = 0.25;

    }



    resize() {
        this.orthographicCamera.aspect = this.sizes.aspect;
        this.orthographicCamera.updateProjectionMatrix();

        this.orthographicCamera.left =
            (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right =
            (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    }

    update() {
        this.controls.update();

    }
}
