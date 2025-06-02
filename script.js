
let currentProgress = 0;
let car = document.getElementById("car-icon");

function showCourse(courseNumber) {
  const data = {
    1: [
      { name: "스프링(복숭아체험)", url: "https://map.naver.com/p/search/여주 스프링/place/1385337329" },
      { name: "미식가(점심)", url: "https://map.naver.com/p/search/여주 미식가/place/13045722" },
      { name: "백화원연꽃농원(연잎체험)", url: "https://map.naver.com/p/search/여주 백화원/place/34572848" }
    ],
    2: [
      { name: "아로마파티(블루베리 수확)", url: "https://map.naver.com/p/search/아로마파티/place/1843077403" },
      { name: "하르방(점심)", url: "https://map.naver.com/p/search/여주 하르방/place/1311118369" },
      { name: "산속애(감자체험)", url: "https://map.naver.com/p/search/여주 산속애/place/1966048846" }
    ],
    3: [
      { name: "밀머리마을(전통체험)", url: "https://map.naver.com/p/search/여주 밀머리마을/place/1916883758" },
      { name: "술아원(양조장 체험)", url: "https://map.naver.com/p/search/여주 술아원/place/68832576" }
    ]
  };

  const container = document.getElementById("course-container");
  container.innerHTML = "";
  let completed = 0;
  data[courseNumber].forEach(place => {
    const btn = document.createElement("button");
    btn.textContent = place.name;
    btn.onclick = () => {
      window.open(place.url, "_blank");
      completed++;
      updateProgress(completed, data[courseNumber].length);
    };
    container.appendChild(btn);
  });
}

function updateProgress(count, total) {
  currentProgress = Math.floor((count / total) * 100);
  document.getElementById("progress").style.width = currentProgress + "%";
  document.getElementById("car-icon").style.left = currentProgress + "%";
  if (count >= total) {
    showBadge();
  }
}

function showBadge() {
  const badgeContainer = document.getElementById("badge-container");
  badgeContainer.style.display = "block";
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
      color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
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
}
