const viewer = new CoreViewerApp({canvas: document.getElementById('mcanvas')})
viewer.initialize({
    caching: true,
    ground: true,
    bloom: true,
    depthTonemap: true,
    enableDrop: false,
    importPopup: false,
    debug: false
}).then(()=>{
    const model = "https://demo-assets.pixotronics.com/pixo/gltf/earringScene1.glb";
    viewer.load(model);
    console.log(viewer);
}