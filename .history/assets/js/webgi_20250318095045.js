import {
  ViewerApp,
  GLTFAnimationPlugin,
  addBasePlugins,
  timeout
} from "https://dist.pixotronics.com/webgi/runtime/bundle-0.9.20.mjs";
// import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.137.5/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.137.5/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'https://cdn.jsdelivr.net/npm/three@0.137.5/examples/jsm/postprocessing/ShaderPass.js';


// Check the Documentation and Manual Here: https://webgi.xyz/docs

async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas"),
  });

  // Apply CSS filter to the canvas
  document.getElementById("webgi-canvas").style.filter = "saturate(1.28)";

  await addBasePlugins(viewer, { interactionPrompt: false });

  viewer.renderer.refreshPipeline();

  await viewer.load(
    "./assets/media/female-jogging-pink.glb"
  );

  // Get reference to the camera in from the glb file by name.
  const fileCamera = viewer.scene.getObjectByName("Camera_Orientation");

  if (fileCamera) {
    // Not really required if we are switching cameras below. 
    viewer.scene.activeCamera.controls.enabled = false;

    // Activate the camera in the glb for rendering
    // Comment this line to animate just the ball and not the rendering camera. (The Camera object will still be animated, but it won't be visible)
    fileCamera.dispatchEvent({ type: "activateMain", camera: fileCamera });
  } else {
    // console.error("Camera_Orientation not found in the scene.");
  }

  const contrastShader = {
    uniforms: {
      "tDiffuse": { value: null },
      "contrast": { value: 1.40 } // Adjust this value to increase or decrease contrast
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float contrast;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        color.rgb = (color.rgb - 0.5) * contrast + 0.5;
        gl_FragColor = color;
      }
    `
  };

  const contrastPass = new ShaderPass(contrastShader);
  composer.addPass(contrastPass);

  // Get reference to the gltf animation plugin.
  const gltfAnim = viewer.getPlugin(GLTFAnimationPlugin);
  gltfAnim.addEventListener('animationStep', () => viewer.scene.activeCamera.setDirty()); // because camera is being animated.

  gltfAnim.animationSpeed = -1;
  gltfAnim.loopAnimations = true; // Loop infinitely
  gltfAnim.animateOnScroll = true; // Enable scroll tracking for animation.

  // Start the animation
  gltfAnim.playAnimation();
}

setupViewer();