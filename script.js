/**
 * author Vincent Onyecherem Ikenna
 * created on 04-06-2020
 * github: https://github.com/Domitor12
 * copyright 2020
*/

// Three.js 3D Grid Background - Chief Vincent Portfolio
let scene, camera, renderer, grid;
let mouseX = 0, mouseY = 0;

function init() {
    // 1. Setup Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    // 2. Setup Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // 3. Create Hacker Grid (Neon Green)
    const size = 200;
    const divisions = 20;
    const color = new THREE.Color(0x00ff41); // Your Hacker Green[span_2](start_span)[span_2](end_span)
    
    grid = new THREE.GridHelper(size, divisions, color, color);
    grid.rotation.x = Math.PI / 2.5; // Tilt for 3D perspective
    scene.add(grid);

    // 4. Handle Window Resize
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);

    animate();
}

function onMouseMove(event) {
    // Track mouse for subtle parallax
    mouseX = (event.clientX - window.innerWidth / 2) / 100;
    mouseY = (event.clientY - window.innerHeight / 2) / 100;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Subtle Grid Movement
    grid.position.x += (mouseX - grid.position.x) * 0.05;
    grid.position.y += (-mouseY - grid.position.y) * 0.05;
    
    // Constant slow pulse/drift
    grid.rotation.z += 0.001;

    renderer.render(scene, camera);
}

// Launch the System
init();