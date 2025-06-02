
window.onload = function () {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 3 + 2,
      color: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of pieces) {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fill();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    }
    requestAnimationFrame(update);
  }

  update();

  // 뱃지 표시
  document.getElementById("badge").style.display = "block";
};
