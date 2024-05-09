// api.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class ThreeModelViewer {
    private modelFilePath!: string;
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private controls!: OrbitControls;
    private container!: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container
        this.initScene();
    }

    // 构造函数

    public initScene(): void {
        // Create a scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color();
        const gridHelper = new THREE.GridHelper(10, 10);
        this.scene.add(gridHelper);

        // Create a camera
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.z = 5;

        // Create a renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);

        // Add controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.update();

        // Animate the scene
        const animate = (): void => {
            requestAnimationFrame(animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }

    public loadModel(url: string): void {
        const loader = new GLTFLoader();
        this.modelFilePath = url
        loader.load(this.modelFilePath, (gltf: { scene: any; }) => {
            const model = gltf.scene;
            this.scene.add(model);
            this.scene.traverse(function (child: any) {
                if (child.isMesh) {
                    child.frustumCulled = false;
                    //模型阴影
                    child.castShadow = true;
                    //模型自发光
                    child.material.emissive = child.material.color;
                    child.material.emissiveMap = child.material.map;
                }
            })
            // Set model position and scale
            model.position.set(0, 0, 0); // Set the desired position of the model
            model.scale.set(1, 1, 1); // Set the desired scale of the model
            // Optionally, you can add animations or manipulate the model here

            this.renderer.render(this.scene, this.camera);
        });
    }

    public dispose(): void {
        this.renderer.dispose();
    }
}


export default {
    async generate3DModel(text: string): Promise<Blob> {
        const response = await fetch('http://localhost:8000/api/generate_3d_model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                step: 200
            })
        });
        return await response.blob();
    },
    ThreeModelViewer
}