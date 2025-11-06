// Basic example: draw motion bars for sound visualizer
const canvas = document.getElementById('techCircleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 200;
canvas.height = 200;

const techLogos = [
  { name: "Python", radius: 60, speed: 0.015, angle: 0, color: "#3776AB" },
  { name: "HTML", radius: 80, speed: 0.011, angle: 1, color: "#e44d26" },
  { name: "CSS", radius: 65, speed: 0.014, angle: 2, color: "#264de4" },
  { name: "React", radius: 75, speed: 0.013, angle: 3, color: "#61DBFB" },
  { name: "Power BI", radius: 55, speed: 0.016, angle: 4, color: "#f2c811" },
  { name: "AI", radius: 70, speed: 0.012, angle: 5, color: "#ff00ff" },
];

let angle = 0;
let logoIndex = 0;
const radius = 60;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw circular orbit path
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#0ff";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.stroke();

  // Calculate logo position
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  // Glowing circle
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.fillStyle = techLogos[logoIndex].color;
  ctx.shadowColor = techLogos[logoIndex].color;
  ctx.shadowBlur = 20;
  ctx.fill();

  // Text logo inside the circle
  ctx.fillStyle = "#fff";
  ctx.font = "bold 13px sans-serif";
  ctx.shadowBlur = 0;
  ctx.textAlign = "center";
  ctx.fillText(techLogos[logoIndex].name, x, y + 5);

  // Update angle for animation
  angle += 0.03;

  requestAnimationFrame(draw);
}

// Rotate tech every 2.5 seconds
setInterval(() => {
  logoIndex = (logoIndex + 1) % techLogos.length;
}, 2500);

// Start animation
draw();

const words = ["Python", "HTML", "CSS", "JavaScript", "React", "Power BI", "AI"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const typeEl = document.getElementById("typewrite");
  if (typing) {
    typeEl.textContent += words[wordIndex][charIndex++];
    if (charIndex === words[wordIndex].length) {
      typing = false;
      setTimeout(typeEffect, 1000);
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    typeEl.textContent = typeEl.textContent.slice(0, -1);
    if (typeEl.textContent.length === 0) {
      typing = true;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Scroll-based animation for timeline
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(block => {
    const top = block.getBoundingClientRect().top;
    if (top < triggerBottom) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Run on load
revealOnScroll();
