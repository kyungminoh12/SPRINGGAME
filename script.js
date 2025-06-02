
const visited = new Set(JSON.parse(localStorage.getItem("visitedPlaces")) || []);
const progressBar = document.getElementById("progress-bar");
const badge = document.getElementById("badge");

function checkIn(place) {
  visited.add(place);
  localStorage.setItem("visitedPlaces", JSON.stringify([...visited]));
  updateProgress();
}

function updateProgress() {
  const total = 3;
  const percent = (visited.size / total) * 100;
  progressBar.style.width = percent + "%";
  if (visited.size >= 1) {
    badge.classList.remove("hidden");
  }
}

window.onload = updateProgress;
