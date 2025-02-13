document.addEventListener("DOMContentLoaded", function () {
  let score = 0;
  let clicksPerSecond = 0;
  const scoreDisplay = document.getElementById("score");
  const clicker = document.getElementById("clicker");
  const upgrade1Button = document.getElementById("upgrade1");
  const upgrade2Button = document.getElementById("upgrade2");

  // Clicker button increases score
  clicker.addEventListener("click", function () {
    score++;
    scoreDisplay.textContent = "Score: " + score;
  });

  // Function to buy Upgrade 1
  upgrade1Button.addEventListener("click", function () {
    if (score >= 50) {
      score -= 50;
      clicksPerSecond += 2;
      scoreDisplay.textContent = "Score: " + score;

      // Increase score every second
      setInterval(() => {
        score += 2;
        scoreDisplay.textContent = "Score: " + score;
      }, 1000);

      // Disable upgrade button after purchase
      upgrade1Button.disabled = true;
      upgrade1Button.textContent = "Purchased";
      upgrade1Button.classList.add("opacity-50", "cursor-not-allowed");
    }
  });

  // Function to buy Upgrade 2
  upgrade2Button.addEventListener("click", function () {
    if (score >= 150) {
      score -= 150;
      clicksPerSecond += 3;
      scoreDisplay.textContent = "Score: " + score;

      // Increase score every second
      setInterval(() => {
        score += 3;
        scoreDisplay.textContent = "Score: " + score;
      }, 1000);

      // Disable upgrade button after purchase
      upgrade2Button.disabled = true;
      upgrade2Button.textContent = "Purchased";
      upgrade2Button.classList.add("opacity-50", "cursor-not-allowed");
    }
  });
});
