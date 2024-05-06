<template>
  <div>
    <h1>Welcome to My Vue App</h1>
    <p>This is a paragraph of static text.</p>
    <input v-model="textInput" type="text" placeholder="Enter text">
    <button @click="generateModel">Generate</button>
    <div ref="canvasContainer"></div>
    <a v-if="downloadLink" :href="downloadLink" download="model.glb">
      <button>Download Model</button>
    </a>
  </div>
</template>

<script>

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default {
  data() {
    return {
      modelFilePath: "",
      downloadLink: "",
      textInput: ""
    };
  },
  methods: {
    generateModel() {
      fetch('http://localhost:8000/api/generate_3d_model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.textInput
        })
      })
        .then(response => response.blob())
        .then(blob => {
          this.downloadLink = URL.createObjectURL(blob);

          // Load the model
          const loader = new GLTFLoader();
          loader.load(this.downloadLink, gltf => {
            // Add the model to the scene
            const model = gltf.scene;
            this.scene.add(model);
            this.scene.traverse(function (child) {
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

            // Render the scene
            this.renderer.render(this.scene, this.camera);
          });
        });
    },
    initScene() {
      // Create a scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color();
      const gridHelper = new THREE.GridHelper(10, 10);
      this.scene.add(gridHelper);
      // Create a camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 5;

      // Create a renderer
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.canvasContainer.appendChild(this.renderer.domElement);

      // Add controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.update();

      // Animate the scene
      const animate = () => {

        requestAnimationFrame(animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    }
  },
  mounted() {
    this.canvasContainer = this.$refs.canvasContainer;
    this.initScene();
  }
};
</script>

<style>
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
}

input {
  margin-right: 10px;
}
</style>