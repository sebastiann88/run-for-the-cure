async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas")
  });

  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  scroller = await viewer.addPlugin(ScrollableCameraViewPlugin);

  // Add all the plugins at once
  await addBasePlugins(viewer);

  // This must be called after adding any plugin that changes the render pipeline.
  viewer.renderer.refreshPipeline();

  // Load a 3d model.
  await manager.addFromPath(
    "./assets/media/female-jogging-pink.glb"
  );

  const exploreView = document.querySelector(".explore");
  const canvasView = document.getElementById("webgi-canvas");
  const canvasContainer = document.getElementById("webgi-canvas-container");
  const header = document.querySelector(".header");
  const exitContainer = document.querySelector(".exit--container");
  const bodyButton = document.querySelector(".button--body");

  // EXPLORE ALL FEATURES EVENT
  document.querySelector(".button-explore")?.addEventListener("click", () => {
    exploreView.style.pointerEvents = "none";
    exitContainer.style.opacity = "100";
    exitContainer.style.display = "flex";
    canvasView.style.pointerEvents = "all";
    canvasContainer.style.zIndex = "1";
    header.style.position = "fixed";
    document.body.style.overflowY = "hidden";
    document.body.style.cursor = "grab";
    scroller.enabled = false;
    let cameraViews = viewer.getPlugin(CameraViewPlugin);
    cameraViews?.animateToView(cameraViews.camViews[4]);
  });

  document.querySelector(".button--exit")?.addEventListener("click", () => {
    exploreView.style.pointerEvents = "all";
    canvasView.style.pointerEvents = "none";
    canvasContainer.style.zIndex = "unset";
    document.body.style.overflowY = "auto";
    exitContainer.style.display = "none";
    header.style.position = "absolute";
    scroller.enabled = true;
  });

  const lensObjectNames = [
    "Circle002",
    "+Sphere001001",
    "new",
    "+Plane008001",
    "+SideButtons001",
    "Rings2001",
    "+Rings1001",
    "+Circle003001",
    "+Sphere003001",
    "+Circle001001",
    "Text001",
    "Plane006001",
    "+Plane005001",
    "+Sphere001",
    "+Cylinder001",
    "+BODY044001"
  ];

  const lensObjects = [];
  for (const obj of lensObjectNames) {
    const o = viewer.scene.findObjectsByName(obj)[0];
    o.userData.__startPos = o.position.z;
    o.userData.__deltaPos = -Math.pow(Math.abs(o.position.z) * 1.5, 1.25);

    lensObjects.push(o);
  }

  let lensOnly = false;
  bodyButton.addEventListener("click", () => {
    if (lensOnly) {
      setLensAppearance(true);
      lensOnly = false;
      bodyButton.innerHTML = "view body only";
    } else {
      setLensAppearance(false);
      lensOnly = true;
      bodyButton.innerHTML = "view with lens";
    }
  });

  function setLensAppearance(_value) {
    for (const o of lensObjects) {
      o.visible = _value;
    }
    viewer.scene.setDirty({ sceneUpdate: true });
  }

  document.querySelector(".button-know-more")?.addEventListener("click", () => {
    const element = document.querySelector("#view2");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth"
    });
  });
}
setupViewer();