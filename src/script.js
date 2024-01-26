import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import GUI from 'lil-gui'
import gsap from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// Texture
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('/draco/');

const manager = new THREE.LoadingManager();
let isLoaded = false;

manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    isLoaded = false;
};

manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
    isLoaded = true;
    document.querySelector('.loading').classList.add('hidden');
}

const rootLoader = new GLTFLoader(manager);
// rootLoader.setDRACOLoader(dracoLoader);

let loadedObjects = [];

rootLoader.load(
    '/models/racine.glb',
    (gltf) => {
        gltf.castShadow = true;
        gltf.receiveShadow = true;
        scene.add(gltf.scene);
        gltf.scene.rotation.y = - Math.PI / 2;
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        gltf.scene.position.y = - 0.8;
        loadedObjects.push(gltf.scene);
    }
)

scene.add(loadedObjects[0])

const sectionMeshes = loadedObjects

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Color: white, Intensity: 0.5
scene.add(ambientLight);


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 9)
camera.position.z = 1
camera.rotation.x = - 0.1
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

const animationCameraPos = gsap.to(cameraGroup.position, {
    keyframes: {
        "0%": { z: 0, x: 0 },
        "20%": {  x: 0 },
        "37%": { x: 0.22181 },
        "100%": { z: -42 }
    },
    duration: 4,
    paused: true,
});
const animationCameraRot = gsap.to(cameraGroup.rotation, {
    keyframes: {
        "0%": { y: 0, x: Math.PI * -0.0125},
        "21%": { y: 0.066329},
        "27%": { x: 0},
        "30%": { x: 0.01473},
        "32%": { y: 0.066329},
        "46%": { y: Math.PI * -0.0125},
        "36%": { x: 0.01473},
        "53%": { x: Math.PI * 0.025},
        "82%": { y: Math.PI * -0.0125, x: Math.PI * -0.025},
        "100%": { y: Math.PI * -0.0225, x: Math.PI * 0.125},
    },
    duration: 4,
    paused: true,
});

function avancerAnimation(pourcentage) {
    animationCameraPos.progress(pourcentage / 100);
    animationCameraRot.progress(pourcentage / 100);
}

window.addEventListener('scroll', () => {
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)

    // cameraGroup.position.z = -scrollY / sizes.width;
    console.log("Z:" + cameraGroup.position.z + " X:" + cameraGroup.position.x + " Y:" + cameraGroup.position.y);
    console.log("rotateZ:" + cameraGroup.rotation.z + " rotateX:" + cameraGroup.rotation.x + " rotateY:" + cameraGroup.rotation.y);
    console.log("AnimPercent :" + animationCameraPos.progress() * 100);
    avancerAnimation(scrollY / 225);



})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0


/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate camera
    // camera.position.y = - scrollY / sizes.height * objectsDistance

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()