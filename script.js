
let completed = [];

function completeMission(num) {
  if (!completed.includes(num)) {
    completed.push(num);
    updateProgress();
    if (completed.length >= 1) {
      document.getElementById('result').classList.remove('hidden');
    }
  }
}

function updateProgress() {
  const percent = (completed.length / 3) * 100;
  document.getElementById('progress-bar').style.width = percent + "%";
}
