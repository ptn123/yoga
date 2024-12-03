const canvas = document.getElementById('rays');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the path data for Telugu "OM"
const pathData = 'M150 100 Q 200 50 250 100 T 350 100 Q 300 150 250 100 T 150 100 Z'; // Replace with actual path data

// Function to create rays
function createRay(x, y, length, angle) {
    const endX = x + length * Math.cos(angle);
    const endY = y + length * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'rgba(255, 255, 0, 0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Function to animate rays
function animateRays() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Example center point
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const numRays = 100;
    const rayLength = 300;

    for (let i = 0; i < numRays; i++) {
        const angle = (i / numRays) * Math.PI * 2;
        createRay(centerX, centerY, rayLength, angle);
    }

    requestAnimationFrame(animateRays);
}

animateRays();
