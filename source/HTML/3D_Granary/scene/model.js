import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let model = new THREE.Group();
let loader = new GLTFLoader();

loader.load(
  "./assets/model.glb",
  function (gltf) {

    gltf.scene.traverse(function(object){
      if(object.type === "Mesh"){
        object.material = new THREE.MeshLambertMaterial(
          {
            map: object.material.map,
            color: object.material.color,
          }
        )
      }
    })
    model.add(gltf.scene);
  },
  modelReady,
);
// 模型加载前过渡动画
function modelReady() {
  const loadingScreen = document.querySelector("#loading-screen");
  const loadingStatus = document.querySelector(".loading-status");
  try {
    loadingStatus.textContent = "场景准备就绪";
    loadingScreen.classList.add("is-hidden");
    loadingScreen.addEventListener(
      "transitionend",
      () => loadingScreen.remove(),
      { once: true },
    );
  } catch (error) {
    loadingStatus.textContent = "无法加载模型";
    console.log(error);
  }
}
export { model };
