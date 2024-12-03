const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 500;

function createParticle(x, y) {
    const size = Math.random() * 3 + 1;
    const speedX = Math.random() * 2 - 1;
    const speedY = Math.random() * 2 - 1;
    const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`;
    particles.push({ x, y, size, speedX, speedY, color });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.closePath();

        p.x += p.speedX;
        p.y += p.speedY;

        // Reset particle if out of bounds
        if (p.x > canvas.width || p.x < 0 || p.y > canvas.height || p.y < 0) {
            particles.splice(particles.indexOf(p), 1);
            createParticle(Math.random() * canvas.width, Math.random() * canvas.height); // Create new particle
        }
    });

    requestAnimationFrame(animateParticles);
}

// Generate initial particles
function generateParticles() {
    for (let i = 0; i < numParticles; i++) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
    }
}

generateParticles();
animateParticles();
