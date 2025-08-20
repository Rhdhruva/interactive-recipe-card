let currentStep = 0;
let timerInterval;
let totalTime = 45 * 60; // 45 minutes in seconds

// Toggle visibility of sections
function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

// Start cooking process
function startCooking() {
  currentStep = 0;
  highlightStep();
  startTimer();
  updateProgressBar();
}

// Highlight steps one by one
function nextStep() {
  const steps = document.querySelectorAll("#steps ol li");
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("highlight");
    currentStep++;
    highlightStep();
    updateProgressBar();
  }
}

// Highlight current step
function highlightStep() {
  const steps = document.querySelectorAll("#steps ol li");
  steps.forEach(step => step.classList.remove("highlight"));
  if (steps[currentStep]) steps[currentStep].classList.add("highlight");
}

// Progress bar update
function updateProgressBar() {
  const steps = document.querySelectorAll("#steps ol li");
  const percentage = ((currentStep + 1) / steps.length) * 100;
  document.getElementById("progress-bar").style.width = percentage + "%";
}

// Timer function
function startTimer() {
  clearInterval(timerInterval);
  let timeLeft = totalTime;

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText =
      `⏳ Timer: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      alert("Time’s up! Your cake should be ready 🎉");
    }
  }, 1000);
}

// Print Recipe
function printRecipe() {
  window.print();
}
