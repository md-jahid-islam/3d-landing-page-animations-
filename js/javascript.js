// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);

// Create a basic room (box)
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.BackSide });
const room = new THREE.Mesh(geometry, material);
scene.add(room);

// Position the camera
camera.position.z = 15;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    room.rotation.x += 0.01;
    room.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Resize event handler
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
