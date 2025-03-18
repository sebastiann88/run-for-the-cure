import { LoadingManager } from 'three';

const manager = new LoadingManager();

manager.onStart = function (url, itemsLoaded, itemsTotal) {
  console.log(`Started loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`);
};

manager.onLoad = function () {
  console.log('All items loaded.');
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
  console.log(`Loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`);
};

manager.onError = function (url) {
  console.log(`There was an error loading ${url}`);
};

export { manager };