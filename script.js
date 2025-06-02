
const missions = [false, false, false];
const stored = JSON.parse(localStorage.getItem("spring_missions"));
if (stored) {
    stored.forEach((done, i) => {
        if (done) missions[i] = true;
    });
    checkReward();
}
function completeMission(i) {
    missions[i] = true;
    localStorage.setItem("spring_missions", JSON.stringify(missions));
    checkReward();
}
function checkReward() {
    const cleared = missions.filter(x => x).length;
    if (cleared >= 1) {
        document.getElementById("reward").style.display = "block";
    }
}
