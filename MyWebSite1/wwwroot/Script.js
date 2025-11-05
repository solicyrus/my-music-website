// Slow horizontal movement for the title
const title = document.getElementById('title');
let pos = 0;
let dir = 1;
let running = true;

// Animation function
function animate() {
    if (running) {
        pos += dir * 0.7; // Speed
        if (pos > 40 || pos < -40) dir *= -1;
        title.style.transform = `translateX(${pos}px)`;
    }
    requestAnimationFrame(animate);
}

animate();

// Button to pause/start the animation
document.getElementById('playPause').addEventListener('click', function () {
    running = !running;
    this.textContent = running ? 'stop/play title movement' : 'start/stop';
});
