document.addEventListener("DOMContentLoaded", function () {
    const clickerButton = document.getElementById("clicker");
    const startButton = document.getElementById("start");
    const autoButton = document.getElementById("auto");
    const counterDisplay = document.getElementById("counter");
    const timerDisplay = document.getElementById("timer");
    const resultDisplay = document.getElementById("result");
    const linkDisplay = document.getElementById("link");

    let clickCount = 0;
    let timeLeft = 10;
    let timerInterval;
    let autoClickInterval;
    let cps = 0;  // Store the clicks per second
    let manualClickCount = 0;  // Store the number of manual clicks

    // Visual effect when clicked
    function visuallyClick() {
        clickerButton.classList.add("clicked");
        setTimeout(() => {
            clickerButton.classList.remove("clicked");
        }, 100);
    }

    // Actual click functionality
    clickerButton.addEventListener("click", function () {
        if (timeLeft > 0) {
            manualClickCount++;  // Increment manual click count
            clickCount++;
            counterDisplay.textContent = `Clicks: ${clickCount}`;
            visuallyClick();
        }
    });

    // Start auto-clicking functionality (set to 12 CPS)
    autoButton.addEventListener("click", function () {
        autoButton.disabled = true; // Disable auto button during test
        clickCount = 0; // Reset click counter
        manualClickCount = 0; // Reset manual click counter
        counterDisplay.textContent = "Clicks: 0";
        timeLeft = 10; // Reset timer
        timerDisplay.textContent = "Time: 10";
        resultDisplay.textContent = "";
        linkDisplay.textContent = ""; // Clear the previous link

        clearInterval(timerInterval);
        clearInterval(autoClickInterval);

        // Start auto-clicking with 12 CPS (every 83.33 ms)
        autoClickInterval = setInterval(() => {
            clickerButton.click(); // Trigger click event
        }, 1000 / 12);  // 12 CPS = 1000ms / 12 clicks

        // Update the CPS counter every second
        cps = 0;
        setInterval(() => {
            cps = clickCount;  // Update CPS with both manual and auto clicks
        }, 1000);
    });

    // Start countdown functionality
    startButton.addEventListener("click", function () {
        startButton.disabled = true; // Disable the button during the countdown

        // Start the countdown timer
        clickCount = 0; // Reset click counter
        manualClickCount = 0; // Reset manual click counter
        counterDisplay.textContent = "Clicks: 0";
        timeLeft = 10; // Reset timer
        timerDisplay.textContent = "Time: 10";
        resultDisplay.textContent = "";

        // Countdown timer functionality
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                const cpsResult = (clickCount / 10).toFixed(2);
                resultDisplay.textContent = `CPS: ${cpsResult}`;

                // If CPS reaches 12, show the link
                if (cps >= 12) {
                    linkDisplay.innerHTML = `Click here for vip download!: <a href="https://docs.google.com/document/d/1nxSiMVTPKhvASL2C8AGiOXQV_tQPpeekQgMEzRoSdVw/edit?tab=t.0" target="_blank">HERE</a>`;
                }

                startButton.disabled = false; // Re-enable the start button
            }
        }, 1000);
    });
});
