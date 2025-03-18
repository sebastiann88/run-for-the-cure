import {
  ViewerApp,
  GLTFAnimationPlugin,
  addBasePlugins,
  timeout
} from "https://dist.pixotronics.com/webgi/runtime/bundle-0.9.20.mjs";

// Check the Documentation and Manual Here: https://webgi.xyz/docs

async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas"),
  });

  await addBasePlugins(viewer, {interactionPrompt: false});

  viewer.renderer.refreshPipeline();

  await viewer.load(
    ./assets/media/female-jogging.glb"
  );

  // Get reference to the camera in from the glb file by name.
  const fileCamera = viewer.scene.getObjectByName("Camera_Orientation");

  // Not really required if we are switching cameras below. 
  viewer.scene.activeCamera.controls.enabled = false;
  
  
  // Activate the camera in the glb for rendering
  // Comment this line to animate just the ball and not the rendering camera. (The Camera object will still be animated, but it won't be visible)
  fileCamera.dispatchEvent({ type: "activateMain", camera: fileCamera });

 
  // Get reference to the gltf animation plugin.
  const gltfAnim = viewer.getPlugin(GLTFAnimationPlugin);
  gltfAnim.addEventListener('animationStep', ()=>viewer.scene.activeCamera.setDirty()); // because camera is being animated.

  gltfAnim.animationSpeed = 1;
  gltfAnim.loopAnimations = true; // Loop infinitely
  gltfAnim.animateOnScroll = true; // Enable scroll tracking for animation.

  // Start the animation
  gltfAnim.playAnimation();
}

setupViewer();
